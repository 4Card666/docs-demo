import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSDC官网",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我们', link: '/markdown-examples'},
      { text: '赛事规则', link: '/api-examples'},
    ],
    sidebar: [
      {
        text: 'CSDC',
        items: [
          { text: '关于我们', link: '/markdown-examples' },
          { text: '赛事规则', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer:{
      copyright:"Copyright © 2026 itz4Card/CSDC. All Rights Reserved."
    }
  }
})
