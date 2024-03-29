import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("vitepress/package.json");

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "Nuxt 3 Auth Module",
  description: "A simple authentication module for Nuxt 3",
  lang: "en",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Guide", link: "/guide/login" },
      { text: "API Reference", link: "/api/options" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Prerequisites", link: "/prerequisites" },
          { text: "Installation", link: "/installation" },
          { text: "Usage", link: "/usage" },
        ],
      },
      {
        text: "Guide",
        items: [
          { text: "Login", link: "/guide/login" },
          { text: "Logout", link: "/guide/logout" },
          { text: "Middleware", link: "/guide/middleware" },
          { text: "HTTP Request", link: "/guide/http-request" },
          { text: "Typescript", link: "/guide/typescript" },
          { text: "FAQ", link: "/guide/faq" },
        ],
      },
      {
        text: "API",
        items: [
          {
            text: "Options",
            link: "/api/options",
            items: [
              { text: "endpoints", link: "/api/options#endpoints" },
              { text: "token", link: "/api/options#token" },
              { text: "refreshToken", link: "/api/options#refreshtoken" },
              { text: "redirect", link: "/api/options#redirect" },
              { text: "cookie", link: "/api/options#cookie" },
              { text: "middleware", link: "/api/options#middleware" },
              {
                text: "rewriteRedirects",
                link: "/api/options#rewriteredirects",
              },
              { text: "routes", link: "/api/options#routes" },
              { text: "debug", link: "/api/options#debug" },
              { text: "plugins", link: "/api/options#plugins" },
              { text: "useGlobalFetch", link: "/api/options#useglobalfetch" },
              { text: "useI18n", link: "/api/options#usei18n" },
            ],
          },
          {
            text: "Composables",
            link: "/api/composables",
            items: [
              { text: "useAuth", link: "/api/composables#useauth" },
              { text: "useLogin", link: "/api/composables#uselogin" },
              { text: "useLogout", link: "/api/composables#uselogout" },
              // { text: "useRefresh", link: "/api/composables#userefresh" },
              // { text: "useUser", link: "/api/composables#useuser" },
              // { text: "useMiddleware", link: "/api/composables#usemiddleware" },
            ],
          },
          {
            text: "$auth",
            link: "/api/$auth",
            items: [
              { text: "user", link: "/api/$auth#user" },
              { text: "store", link: "/api/$auth#store" },
              { text: "redirectPath", link: "/api/$auth#redirectpath" },
              { text: "accessToken", link: "/api/$auth#accesstoken" },
              { text: "refreshToken", link: "/api/$auth#refreshtoken" },
              { text: "loggedIn", link: "/api/$auth#loggedin" },
              { text: "hasTokens", link: "/api/$auth#hastokens" },
              { text: "isSessionExpired", link: "/api/$auth#issessionexpired" },
              { text: "isSessionEnd", link: "/api/$auth#issessionend" },
              { text: "isPersistent", link: "/api/$auth#ispersistent" },
              { text: "config", link: "/api/$auth#config" },
              { text: "httpService", link: "/api/$auth#httpservice" },
              { text: "storage", link: "/api/$auth#storage" },
              { text: "$fetch", link: "/api/$auth#fetch" },
              { text: "login", link: "/api/$auth#login" },
              { text: "fetchUser", link: "/api/$auth#fetchuser" },
              { text: "logout", link: "/api/$auth#logout" },
              { text: "refreshTokens", link: "/api/$auth#refreshtokens" },
              { text: "setReferer", link: "/api/$auth#setreferer" },
            ],
          },
          {
            text: "Components",
            items: [
              {
                text: "Authenticator",
                link: "/api/components/authenticator",
                items: [
                  {
                    text: "Props",
                    link: "/api/components/authenticator#props",
                  },
                  {
                    text: "Slots",
                    link: "/api/components/authenticator#slots",
                  },
                ],
              },
            ],
          },
          {
            text: "Pages",
            items: [
              {
                text: "Login",
                link: "/api/pages/login",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/trandaison/nuxt-3-auth" },
    ],

    search: {
      provider: "local",
    },
  },

  outDir: "../../nuxt-3-auth-docs",
});
