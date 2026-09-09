"use client";

import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Minus, Plus, X, Truck, Shield, ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { state, dispatch, totalPrice } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (state.items.length === 0) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: state.items }),
      });

      const data = await res.json();

      if (data.url) {
        dispatch({ type: "CLEAR_CART" });
        window.location.href = data.url;
      } else {
        setError("Erro ao processar. Tenta novamente.");
      }
    } catch {
      setError("Erro de ligação. Verifica a tua internet.");
    } finally {
      setLoading(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-gray-500 px-4">
        <div className="text-6xl">🛒</div>
        <h2 className="text-2xl font-bold text-gray-900">O teu carrinho está vazio</h2>
        <Link
          href="/"
          className="bg-gradient-to-r from-rose-500 to-purple-600 text-white py-3 px-8 rounded-2xl font-bold hover:opacity-90 transition-opacity"
        >
          Ver Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 w-fit">
          <ArrowLeft className="w-4 h-4" />
          Continuar a comprar
        </Link>

        <h1 className="text-3xl font-black text-gray-900 mb-8">Revisão da Encomenda</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={`${item.product.id}-${item.color}`} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">Cor: {item.color}</p>
                    </div>
                    <button
                      onClick={() => dispatch({ type: "REMOVE_ITEM", productId: item.product.id })}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-1">
                      <button
                        onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity - 1 })}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity + 1 })}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-black text-gray-900 text-lg">€{(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="font-black text-gray-900 text-xl mb-6">Resumo</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Envio</span>
                  <span className="font-semibold text-green-600">Grátis 🎉</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-black text-gray-900 text-lg">Total</span>
                  <span className="font-black text-gray-900 text-2xl">€{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-2xl font-black text-lg hover:from-rose-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-rose-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    A processar...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Pagar com Stripe
                  </>
                )}
              </button>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="w-3.5 h-3.5 text-green-500" />
                  Pagamento 100% seguro e encriptado
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Truck className="w-3.5 h-3.5 text-rose-400" />
                  Envio grátis — 5 a 10 dias úteis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
