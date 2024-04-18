import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kux-router",
  description: "`kux-router` 是一个参考 `vue-router` 的api设计实现的 `uts` 路由库，支持 `vue-router` 的绝大数功能特色。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '教程', link: '/' },
      { text: 'API参考', link: '/api' }
    ],

    sidebar: [
      {
        text: '介绍',
        link: '/introduction'
      },
      {
        text: '安装',
        link: '/installation'
      },
      {
        text: '基础',
        items: [
          {
            text: '入门',
            link: '/guide'
          },
          {
            text: '编程式导航',
            link: '/'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://gitcode.com/kviewui/kux-router-doc/edit/main/:path',
      text: '对本页提出修改建议'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kux'
    }
  }
})
