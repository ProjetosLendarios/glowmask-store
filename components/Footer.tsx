import Link from "next/link";
import { Zap, Heart, Share2, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GlowMask</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tecnologia de fototerapia LED profissional para a tua rotina de beleza em casa.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Heart className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Loja</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/products/mascara-led-fototerapia-pro-7" className="hover:text-white transition-colors">Máscara LED Pro 7</Link></li>
              <li><Link href="#reviews" className="hover:text-white transition-colors">Avaliações</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Apoio</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="mailto:suporte@glowmask.pt" className="hover:text-white transition-colors">Política de Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rastreio de Encomenda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400" />
                <a href="mailto:suporte@glowmask.pt" className="hover:text-white transition-colors">suporte@glowmask.pt</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>+351 912 345 678</span>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-xs text-gray-500">Resposta em até 24h úteis</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 GlowMask Store. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className="h-5 opacity-50 invert" />
            <span className="text-gray-600 text-xs">Pagamentos seguros</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
