import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline'

// https://vitepress.dev/reference/site-config
// @ts-ignore
// @ts-ignore
export default defineConfig({
  title: "kux-router",
  description: "`kux-router` 是一个参考 `vue-router` 的api设计实现的 `uts` 路由库，支持 `vue-router` 的绝大数功能特色。",
  ignoreDeadLinks: true,
  metaChunk: true,
  markdown: {
    config: md => {
      md.use(timeline)
    }
  },
  head: [
      ['link', {
        rel: 'icon',
        href: '/logo.jpg',
        type: 'image/jpeg'
      }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '教程', link: '/guide/' },
      { text: 'API参考', link: '/api/' },
      {
        text: 'v1.1.x',
        items: [
          {
            text: '更新日志',
            link: '/changelog'
          },
          {
            text: 'uniapp插件市场地址',
            link: 'https://ext.dcloud.net.cn/plugin?id=15998'
          }
        ]
      }
    ],

    logo: '/logo.jpg',

    sidebar: {
      '/': [
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
              link: '/guide/'
            },
            {
              text: '编程式导航',
              link: '/guide/essentials/navigation'
            },
            {
              text: '命名路由',
              link: '/guide/essentials/named-routes'
            },
            {
              text: '重定向',
              link: '/guide/essentials/redirect'
            }
          ]
        },
        {
          text: '进阶',
          items: [
            {
              text: '导航守卫',
              link: '/guide/advanced/navigation-guards'
            },
            {
              text: '路由元信息',
              link: '/guide/advanced/meta'
            },
            {
              text: '数据获取',
              link: '/guide/advanced/data-fetching'
            },
            {
              text: '组合式API',
              link: '/guide/advanced/composition-api'
            },
            {
              text: '过渡动效',
              link: '/guide/advanced/transitions'
            },
            {
              text: 'RouterLink',
              link: '/guide/advanced/router-link'
            },
            {
              text: '导航故障',
              link: '/guide/advanced/navigation-failures'
            },
            {
              text: 'uni全局挂载',
              link: '/guide/advanced/uni-ext'
            },
            {
              text: 'uni路由映射',
              link: '/guide/advanced/uni-router-map'
            },
            {
              text: '更新日志',
              link: '/changelog'
            }
          ]
        }
      ],
      '/api/': [
        {
          text: 'packages',
          items: [
            {
              text: 'kux-router',
              link: '/api/'
            }
          ]
        }
      ]
    },

    socialLinks: [
      {
        // icon: {
        //   svg: `<svg data-v-4c828476="" data-v-8b23be9c="" class="icon" aria-hidden="false" style="font-size: 28px; color: var(--color-CG600); transform: rotate(0deg);"/>`
        // },
        icon: 'github',
        link: 'https://gitcode.com/kviewui/kux-router'
      }
    ],

    editLink: {
      pattern: 'https://gitcode.com/kviewui/kux-router-doc/edit/main/:path',
      text: '对本页提出修改建议'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kux'
    }
  },
  vite: {
    server: {
      port: 5273
    }
  }
})
