import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlowMask Store — Máscara LED de Fototerapia",
  description:
    "Tratamento profissional de fototerapia LED em casa. A FotoGlow Pro 7 com 7 comprimentos de onda para pele perfeita. Envio rápido para Portugal.",
  keywords: ["mascara led", "fototerapia", "skincare", "anti-aging", "acne", "beauty tech"],
  openGraph: {
    title: "GlowMask Store — Máscara LED de Fototerapia",
    description: "Tratamento profissional de fototerapia LED em casa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${geist.className} antialiased bg-white`}>
        <CartProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
