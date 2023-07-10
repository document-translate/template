import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    search: {
      provider: "local",
    },
    outlineTitle: "章节目录",
    footer: {
      message:
        "此文档为非官方翻译版本 - <div class='vp-doc' style='display:inline-flex;'><a href='#' target='__blank'>官方网站</a></div>",
      copyright: "Copyright © 2023-present GuoJiKun",
    },
  },
});
