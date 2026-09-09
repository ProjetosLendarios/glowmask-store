import Link from "next/link";
import Image from "next/image";
import { Star, Shield, Truck, RotateCcw, Zap, ChevronRight, CheckCircle } from "lucide-react";
import { getAllProducts } from "@/lib/products";

export default function HomePage() {
  const products = getAllProducts();
  const product = products[0];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjY0ODAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <Zap className="w-3.5 h-3.5" />
                Tecnologia Aprovada por Dermatologistas
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Pele Perfeita{" "}
                <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                  em Casa
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A <strong>FotoGlow Pro 7</strong> usa 7 comprimentos de onda de luz LED para tratar acne, manchas e sinais de aging — como num spa de luxo, mas no conforto da tua casa.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Anti-Aging", "Anti-Acne", "Clareia Manchas", "Firmeza"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-gray-900">€{product.price}</span>
                    <span className="text-xl text-gray-400 line-through">€{product.originalPrice}</span>
                    <span className="bg-green-100 text-green-700 text-sm font-bold px-2.5 py-1 rounded-full">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">+ Envio grátis para Portugal</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 sm:flex-none bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-rose-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-rose-200 text-center flex items-center justify-center gap-2 group"
                >
                  Comprar Agora
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 sm:flex-none border-2 border-gray-200 text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg hover:border-rose-300 hover:text-rose-600 transition-all text-center"
                >
                  Ver Detalhes
                </Link>
              </div>

              {/* Trust */}
              <div className="flex items-center gap-5 mt-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  <strong className="text-gray-900">4.9/5</strong> — +847 avaliações
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-purple-200 rounded-[3rem] transform rotate-3" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Resultados visíveis</p>
                      <p className="font-bold text-gray-900 text-sm">Em 4 semanas</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <p className="text-2xl font-black text-rose-500">50%</p>
                    <p className="text-xs text-gray-500 font-medium">DESCONTO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Truck className="w-6 h-6" />, title: "Envio Grátis", desc: "Para toda Portugal" },
              { icon: <Shield className="w-6 h-6" />, title: "12 Meses Garantia", desc: "Qualidade garantida" },
              { icon: <RotateCcw className="w-6 h-6" />, title: "30 Dias Devolução", desc: "Sem perguntas" },
              { icon: <Zap className="w-6 h-6" />, title: "Resultados Rápidos", desc: "Visível em 4 semanas" },
            ].map((badge) => (
              <div key={badge.title} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center">
                  {badge.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{badge.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              7 Luzes. 7 Benefícios.{" "}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                1 Máscara.
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cada comprimento de onda LED trata um problema diferente da pele de forma segura e eficaz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { color: "bg-red-100 text-red-600", light: "Luz Vermelha (630nm)", benefit: "Estimula o colagénio e elastina — efeito anti-aging poderoso" },
              { color: "bg-blue-100 text-blue-600", light: "Luz Azul (415nm)", benefit: "Elimina bactérias causadoras do acne com eficácia clínica" },
              { color: "bg-green-100 text-green-600", light: "Luz Verde (520nm)", benefit: "Clareia manchas e hiperpigmentação uniformemente" },
              { color: "bg-yellow-100 text-yellow-600", light: "Luz Amarela (590nm)", benefit: "Reduz vermelhidão, rosácea e inflamações" },
              { color: "bg-purple-100 text-purple-600", light: "Luz Roxa (405nm)", benefit: "Ação antibacteriana + regeneração celular" },
              { color: "bg-cyan-100 text-cyan-600", light: "Luz Ciana (490nm)", benefit: "Aumenta a absorção de nutrientes e séruns" },
            ].map((item) => (
              <div key={item.light} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center gap-2 ${item.color} rounded-full px-3 py-1 text-xs font-bold mb-4`}>
                  <div className="w-2 h-2 rounded-full bg-current" />
                  {item.light}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              O que dizem as nossas clientes
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-700 font-bold ml-2">4.9 / 5 — 847 avaliações</span>
            </div>
          </div>

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
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "É seguro para todos os tipos de pele?", a: "Sim! A fototerapia LED é 100% não invasiva e segura para todos os fotótipos. Aprovada por dermatologistas e sem efeitos secundários." },
              { q: "Quanto tempo até ver resultados?", a: "A maioria das clientes vê melhorias na textura da pele em 2 semanas e resultados significativos em 4-6 semanas de uso regular (3-5x por semana)." },
              { q: "Posso usar com outros produtos de skincare?", a: "Sim! Recomendamos usar após o cleansing e antes do sérum. A luz LED aumenta a absorção dos ativos da pele em até 30%." },
              { q: "Qual é a política de devolução?", a: "Oferecemos 30 dias de garantia de satisfação. Se não ficares satisfeita, devolvemos o dinheiro sem perguntas." },
              { q: "Quanto tempo demora o envio?", a: "Envio para Portugal continental em 5-10 dias úteis, totalmente grátis. Recebes um email com rastreio assim que enviarmos." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Pronta para transformar a tua pele?
          </h2>
          <p className="text-rose-100 text-lg mb-8">
            Junta-te a mais de 847 clientes satisfeitas. Envio grátis + 30 dias de garantia.
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 bg-white text-rose-600 py-4 px-10 rounded-2xl font-black text-lg hover:bg-rose-50 transition-all shadow-xl group"
          >
            Comprar por €{product.price}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-rose-200 text-sm mt-4">🔒 Pagamento seguro com Stripe — SSL 256-bit</p>
        </div>
      </section>
    </div>
  );
}
