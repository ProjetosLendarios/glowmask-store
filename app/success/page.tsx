import Link from "next/link";
import { CheckCircle, Package, Mail, ChevronRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle className="w-14 h-14 text-green-500" />
        </div>

        <h1 className="text-4xl font-black text-gray-900 mb-4">
          Encomenda Confirmada! 🎉
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Obrigada pela tua compra! Receberás um email de confirmação em breve com os detalhes e o número de rastreio.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <Package className="w-8 h-8 text-rose-500 mx-auto mb-3" />
            <p className="font-bold text-gray-900 text-sm">Envio em 24-48h</p>
            <p className="text-gray-500 text-xs mt-1">Após confirmação do pagamento</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <Mail className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <p className="font-bold text-gray-900 text-sm">Email de Confirmação</p>
            <p className="text-gray-500 text-xs mt-1">Verifica o teu email</p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:opacity-90 transition-opacity group"
        >
          Voltar à Loja
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
