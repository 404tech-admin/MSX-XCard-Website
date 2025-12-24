import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  alias: {
    "@": "/assets/",
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "MSX X-Card",
      meta: [
        { name: "description", content: "MCR" },
        { charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, user-scalable=no, minimal-ui",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js",
          type: "text/javascript",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js",
          type: "text/javascript",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/sweetalert2@11",
          type: "text/javascript",
        },
        {
          src: "https://code.createjs.com/1.0.0/preloadjs.min.js",
          type: "text/javascript",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  css: ["@/css/styles.scss", "@/css/main.css"],
  dev: process.env.NODE_ENV !== "production",
  runtimeConfig: {
    public: {
      env: process.env.NODE_ENV,
      localUrl: "http://localhost:3000/",
      connectedWallet: "connectedWallet",
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "nuxt-aos",
    "nuxt-marquee",
    "nuxt-tradingview",
  ],
  i18n: {
    langDir: "locales",
    locales: [
      { code: "en", file: "en-EN.json" },
      { code: "cn", file: "cn-CN.json" },
    ],
    defaultLocale: "cn",
    strategy: "prefix_except_default",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: "2025-12-07",
});
