// Product data for GlowMask Store

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  currency: string;
  images: string[];
  colors: string[];
  benefits: string[];
  description: string;
  howToUse: string[];
  specs: { label: string; value: string }[];
  reviews: Review[];
  rating: number;
  totalReviews: number;
  stock: number;
  shippingDays: string;
  stripePriceId?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

export const products: Product[] = [
  {
    id: "led-mask-pro-7",
    slug: "mascara-led-fototerapia-pro-7",
    name: "Máscara LED FotoGlow Pro 7",
    tagline: "Tratamento profissional de fototerapia em casa",
    price: 89,
    originalPrice: 179,
    currency: "EUR",
    images: [
      "https://ae01.alicdn.com/kf/S263fc3c2249e49a2b5ef54c8612140bb0/Led-Mask-Facial-7-Colors-Light-Therapy-Face-Mask-Skin-Rejuvenation-Anti-Acne-Wrinkle-Removal-Machine.jpg",
      "https://ae01.alicdn.com/kf/S0c441b11e2f3484f9dfc1eb6832db682W/Led-Mask-Facial-7-Colors-Light-Therapy-Face-Mask-Skin-Rejuvenation-Anti-Acne-Wrinkle-Removal-Machine.jpg",
      "https://ae01.alicdn.com/kf/Hb16baec9cd6648719bc4aab160ed9295r/Led-Mask-Facial-7-Colors-Light-Therapy-Face-Mask-Skin-Rejuvenation-Anti-Acne-Wrinkle-Removal-Machine.jpg",
      "https://ae01.alicdn.com/kf/H7ecbc49931fc4ed9ba65dceeaee155d0E/Led-Mask-Facial-7-Colors-Light-Therapy-Face-Mask-Skin-Rejuvenation-Anti-Acne-Wrinkle-Removal-Machine.jpg",
    ],
    colors: ["Branco (Clássico)", "Ouro Rosa"],
    benefits: [
      "Reduz manchas e hiperpigmentação",
      "Anti-aging: estimula o colagénio",
      "Combate o acne e bactérias",
      "Melhora a textura da pele",
      "Reduz poros dilatados",
      "Efeito lifting e firmeza",
    ],
    description:
      "A FotoGlow Pro 7 é a máscara de fototerapia LED mais avançada do mercado para uso doméstico. Com 7 comprimentos de onda de luz diferentes, trata todos os problemas de pele de forma não invasiva — como num spa de luxo, mas em casa. Aprovada por dermatologistas, com resultados visíveis em apenas 4 semanas de uso regular.",
    howToUse: [
      "Limpa o rosto completamente e seca suavemente",
      "Coloca a máscara confortavelmente no rosto",
      "Seleciona o modo de luz e a intensidade desejada",
      "Relaxa durante 15 minutos por sessão",
      "Aplica o teu creme ou sérum preferido após o tratamento",
      "Recomendamos usar entre 3 a 5 vezes por semana para melhores resultados",
    ],
    specs: [
      { label: "Luzes LED", value: "7 cores / comprimentos de onda (150 LEDs)" },
      { label: "Tempo por sessão", value: "15 - 20 minutos" },
      { label: "Material", value: "Silicone ABS de grau médico" },
      { label: "Alimentação", value: "USB Recarregável / Bateria interna" },
      { label: "Intensidade", value: "Ajustável (5 níveis)" },
      { label: "Garantia", value: "12 meses" },
    ],
    reviews: [
      {
        id: "r1",
        author: "Ana Sousa",
        location: "Lisboa, Portugal",
        rating: 5,
        date: "Agosto 2025",
        text: "Incrível! Uso há 6 semanas e as minhas manchas reduziram visivelmente. O meu dermatologista ficou admirado com os resultados!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: "r2",
        author: "Mariana Costa",
        location: "Porto, Portugal",
        rating: 5,
        date: "Julho 2025",
        text: "Comprei com algum ceticismo mas foi a melhor decisão. O meu acne reduziu 80% em 4 semanas. Super recomendo a toda a gente com pele sensível.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        id: "r3",
        author: "Sofia Ferreira",
        location: "Braga, Portugal",
        rating: 5,
        date: "Setembro 2025",
        text: "A minha pele está completamente diferente. Mais firme, luminosa e as linhas finas estão muito menos visíveis. Vale cada cêntimo investido!",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      },
      {
        id: "r4",
        author: "Catarina Lima",
        location: "Faro, Portugal",
        rating: 4,
        date: "Agosto 2025",
        text: "Produto excelente, qualidade surpreendente para o preço. Chegou bem embalado e tem sido muito fácil de usar na minha rotina noturna.",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      },
    ],
    rating: 4.9,
    totalReviews: 847,
    stock: 23,
    shippingDays: "5-10 dias úteis",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
