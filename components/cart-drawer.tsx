"use client"
import { useEffect, useRef } from "react"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, itemCount } = useCart()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsOpen(false)} />
      <div ref={drawerRef} className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-sm font-light tracking-[0.2em] uppercase">Shopping Bag ({itemCount})</h2>
          <button onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity"><X className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
              <p className="text-sm tracking-[0.15em] uppercase">Your bag is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-gray-100 shrink-0 overflow-hidden rounded">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500 mt-1">${item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100"><Minus className="w-3 h-3" /></button>
                      <span className="text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-100"><Plus className="w-3 h-3" /></button>
                      <button onClick={() => removeItem(item.id)} className="text-xs text-gray-400 underline ml-auto">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between"><span className="text-sm tracking-[0.1em] uppercase">Subtotal</span><span className="font-medium">${subtotal.toLocaleString()}</span></div>
            <button className="w-full py-3 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors rounded">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  )
}
