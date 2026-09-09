"use client";

import { useCart } from "./CartContext";
import { X, Plus, Minus, ShoppingBag, Truck, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { state, dispatch, totalItems, totalPrice } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    dispatch({ type: "CLOSE_CART" });
    router.push("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      {state.isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={() => dispatch({ type: "CLOSE_CART" })}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-rose-500" />
            <h2 className="text-lg font-bold text-gray-900">
              Carrinho {totalItems > 0 && <span className="text-rose-500">({totalItems})</span>}
            </h2>
          </div>
          <button
            onClick={() => dispatch({ type: "CLOSE_CART" })}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400">
              <ShoppingBag className="w-16 h-16 opacity-30" />
              <p className="text-lg font-medium">O teu carrinho está vazio</p>
              <button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="text-rose-500 hover:text-rose-600 font-medium underline"
              >
                Continuar a comprar
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {state.items.map((item) => (
                <div key={`${item.product.id}-${item.color}`} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">Cor: {item.color}</p>
                    <p className="text-rose-600 font-bold mt-1">€{item.product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity - 1 })}
                        className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-semibold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity + 1 })}
                        className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => dispatch({ type: "REMOVE_ITEM", productId: item.product.id })}
                        className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-2 text-sm text-green-600 mb-4 bg-green-50 rounded-xl p-3">
              <Truck className="w-4 h-4 flex-shrink-0" />
              <span>Envio grátis para toda Portugal!</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-gray-900">€{totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-rose-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-rose-200 flex items-center justify-center gap-2 group"
            >
              Finalizar Compra
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">🔒 Pagamento 100% seguro com Stripe</p>
          </div>
        )}
      </div>
    </>
  );
}
