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
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    ],
    colors: ["Rosa", "Branco", "Dourado"],
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
      "Limpa o rosto completamente",
      "Coloca a máscara confortavelmente no rosto",
      "Seleciona o modo de luz desejado",
      "Usa 15 minutos por sessão",
      "Aplica o teu sérum preferido após o tratamento",
      "Recomendamos 3-5 sessões por semana",
    ],
    specs: [
      { label: "Luzes LED", value: "7 cores / comprimentos de onda" },
      { label: "Tempo por sessão", value: "15 minutos" },
      { label: "Material", value: "Silicone médico flexível" },
      { label: "Alimentação", value: "USB-C recarregável" },
      { label: "Intensidade", value: "Ajustável (3 níveis)" },
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
        avatar: "AS",
      },
      {
        id: "r2",
        author: "Mariana Costa",
        location: "Porto, Portugal",
        rating: 5,
        date: "Julho 2025",
        text: "Comprei com algum ceticismo mas foi a melhor decisão. O meu acne reduziu 80% em 4 semanas. Super recomendo!",
        avatar: "MC",
      },
      {
        id: "r3",
        author: "Sofia Ferreira",
        location: "Braga, Portugal",
        rating: 5,
        date: "Setembro 2025",
        text: "A minha pele está completamente diferente. Mais firme, luminosa e sem manchas. Vale cada cêntimo!",
        avatar: "SF",
      },
      {
        id: "r4",
        author: "Catarina Lima",
        location: "Faro, Portugal",
        rating: 4,
        date: "Agosto 2025",
        text: "Produto excelente, qualidade surpreendente para o preço. Envio rápido e bem embalado. Muito satisfeita!",
        avatar: "CL",
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
