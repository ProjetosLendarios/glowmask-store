"use client";

import Link from "next/link";
import { ShoppingCart, Zap, Menu, X } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const { totalItems, dispatch } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <CartDrawer />
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                GlowMask
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-rose-500 transition-colors font-medium text-sm">
                Início
              </Link>
              <Link href="/products/mascara-led-fototerapia-pro-7" className="text-gray-600 hover:text-rose-500 transition-colors font-medium text-sm">
                Produto
              </Link>
              <Link href="#reviews" className="text-gray-600 hover:text-rose-500 transition-colors font-medium text-sm">
                Avaliações
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-rose-500 transition-colors font-medium text-sm">
                FAQ
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
                className="relative p-2 rounded-full hover:bg-rose-50 transition-colors"
                aria-label="Carrinho"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-full hover:bg-rose-50 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden py-4 border-t border-rose-100 flex flex-col gap-3">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-rose-500 py-2 font-medium">Início</Link>
              <Link href="/products/mascara-led-fototerapia-pro-7" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-rose-500 py-2 font-medium">Produto</Link>
              <Link href="#reviews" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-rose-500 py-2 font-medium">Avaliações</Link>
              <Link href="#faq" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-rose-500 py-2 font-medium">FAQ</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
