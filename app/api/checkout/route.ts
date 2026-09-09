import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio" }, { status: 400 });
    }

    const lineItems = items.map((item: { product: { name: string; images: string[]; price: number }; quantity: number; color: string }) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: `${item.product.name} — ${item.color}`,
          images: [item.product.images[0]],
          description: "Máscara LED de Fototerapia 7 em 1 — GlowMask Store",
        },
        unit_amount: Math.round(item.product.price * 100),
      },
      quantity: item.quantity,
    }));

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
      shipping_address_collection: {
        allowed_countries: ["PT", "ES", "FR", "DE", "GB", "IT", "NL", "BE"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "eur" },
            display_name: "Envio Grátis",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 10 },
            },
          },
        },
      ],
      locale: "pt",
      custom_text: {
        submit: { message: "Ao finalizar a compra, aceitas os nossos termos e condições." },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Erro ao criar sessão de checkout" }, { status: 500 });
  }
}
