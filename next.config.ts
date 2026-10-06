import type { NextConfig } from "next";

const WEEK = 60 * 60 * 24 * 7;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF para quem suporta (arquivos ~20% menores), WebP para os demais.
    formats: ["image/avif", "image/webp"],
    // As imagens do site mudam raramente: mantém as versões otimizadas em
    // cache por 31 dias em vez das 4 horas padrão.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  async headers() {
    return [
      {
        // Arquivos de `public/` saem sem cache por padrão.
        source: "/:path*.(mp4|jpg|jpeg|png)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${WEEK}, stale-while-revalidate=${WEEK}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
