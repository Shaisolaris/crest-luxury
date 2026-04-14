"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpen, itemCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-serif text-xl md:text-2xl tracking-[0.15em] text-foreground">
              MAISON
              <span className="block text-center text-[0.6em] tracking-[0.3em] text-muted-foreground">
                ÉLÉGANCE
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#collections"
              className="text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Collections
            </a>
            <a
              href="#selection"
              className="text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('selection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Selection
            </a>
            <a
              href="#heritage"
              className="text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Heritage
            </a>
            <a
              href="#services"
              className="text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </a>
            <a
              href="#boutiques"
              className="text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('boutiques')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Boutiques
            </a>

            {/* Icons - Desktop */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border/50">
              <button
                type="button"
                className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:text-accent transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:text-accent transition-colors duration-300"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:text-accent transition-colors duration-300 relative"
                aria-label="Cart"
               onClick={() => setIsOpen(true)}>
                <ShoppingBag className="w-5 h-5" />
                  {itemCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full">{itemCount}</span>}
                <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Icons and Menu Button - Right */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:text-accent transition-colors duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:text-accent transition-colors duration-300 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                2
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 min-h-11 min-w-11 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-8 px-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-6">
              <a
                href="#collections"
                className="text-sm tracking-[0.2em] uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Collections
              </a>
              <a
                href="#selection"
                className="text-sm tracking-[0.2em] uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('selection')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Selection
              </a>
              <a
                href="#heritage"
                className="text-sm tracking-[0.2em] uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Heritage
              </a>
              <a
                href="#services"
                className="text-sm tracking-[0.2em] uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </a>
              <a
                href="#boutiques"
                className="text-sm tracking-[0.2em] uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('boutiques')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Boutiques
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
