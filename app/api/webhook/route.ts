import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

// Este webhook recebe a confirmação de pagamento do Stripe
export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Substituir pela variável de ambiente STRIPE_WEBHOOK_SECRET no Netlify
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";
    
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      // Fallback para desenvolvimento
      event = JSON.parse(body) as Stripe.Event;
    }
  } catch (error) {
    console.error("Webhook signature verification failed.", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Lidar com o evento de pagamento com sucesso
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Dados do cliente para encomendar no fornecedor (Dropshipping)
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name;
    const shippingDetails = session.shipping_details;
    
    console.log("💰 NOVO PAGAMENTO RECEBIDO!");
    console.log("Cliente:", customerName, customerEmail);
    console.log("Morada para Dropshipping:", shippingDetails?.address);

    // TODO: Aqui podemos integrar com o Zapier, enviar email para ti,
    // ou ligar a uma API de AutoDS/DSers para fazer a encomenda automática.
  }

  return NextResponse.json({ received: true });
}
