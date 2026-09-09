"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Shield, Truck, RotateCcw, CheckCircle, Minus, Plus, ChevronRight, Zap } from "lucide-react";
import { getProductBySlug } from "@/lib/products";
import { useCart } from "@/components/CartContext";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const { dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", product, color: selectedColor });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 mb-4 shadow-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.stock < 30 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                  Apenas {product.stock} em stock!
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === i ? "border-rose-500 shadow-md" : "border-gray-100 hover:border-rose-200"
                  }`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-3 py-1 text-xs font-bold mb-4">
              <Zap className="w-3 h-3" />
              Mais Vendido
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-500 text-lg mb-4">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="font-bold text-gray-900">{product.rating}</span>
              <span className="text-gray-500 text-sm">({product.totalReviews} avaliações)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-black text-gray-900">€{product.price}</span>
              <span className="text-2xl text-gray-400 line-through">€{product.originalPrice}</span>
              <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">
                Poupa €{product.originalPrice - product.price}!
              </span>
            </div>

            {/* Color */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Cor: <span className="text-gray-900">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all ${
                      selectedColor === color
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-gray-200 text-gray-600 hover:border-rose-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-sm font-semibold text-gray-700">Quantidade:</p>
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
                  added
                    ? "bg-green-500 text-white shadow-green-200"
                    : "bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:from-rose-600 hover:to-purple-700 shadow-rose-200 hover:shadow-xl"
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Adicionado ao Carrinho!
                  </>
                ) : (
                  <>
                    Adicionar ao Carrinho
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: <Truck className="w-4 h-4" />, text: "Envio Grátis" },
                { icon: <Shield className="w-4 h-4" />, text: "12m Garantia" },
                { icon: <RotateCcw className="w-4 h-4" />, text: "30d Devolução" },
              ].map((t) => (
                <div key={t.text} className="flex flex-col items-center gap-1.5 bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-rose-500">{t.icon}</div>
                  <span className="text-xs font-semibold text-gray-700">{t.text}</span>
                </div>
              ))}
            </div>

            {/* Benefits list */}
            <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-5 border border-rose-100">
              <p className="font-bold text-gray-900 mb-3">✨ O que inclui:</p>
              <ul className="space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs: Description / How to Use / Specs */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 text-xl mb-4">Descrição</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 text-xl mb-4">Como usar</h3>
              <ol className="space-y-3">
                {product.howToUse.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-black text-gray-900 text-xl mb-4">Especificações</h3>
              <dl className="space-y-3">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{s.label}</dt>
                    <dd className="text-sm text-gray-900 font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16" id="reviews">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Avaliações de Clientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                <p className="text-gray-400 text-xs mt-3">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
