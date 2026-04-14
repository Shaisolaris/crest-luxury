"use client"
import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, qty: number) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id)
      if (existing) return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...newItem, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: number) => setItems(prev => prev.filter(i => i.id !== id)), [])
  const updateQuantity = useCallback((id: number, qty: number) => {
    if (qty <= 0) setItems(prev => prev.filter(i => i.id !== id))
    else setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i))
  }, [])

  const itemCount = items.reduce((a, i) => a + i.quantity, 0)
  const subtotal = items.reduce((a, i) => a + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, isOpen, setIsOpen, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
