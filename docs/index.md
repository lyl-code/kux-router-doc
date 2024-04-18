---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Kux Router"
  text: "uts生态最好用最灵活最具特色的路由库"
  tagline: 参考 vue-router 的api设计实现的 uts 路由库，支持 vue-router 的绝大数功能特色。
  actions:
    - theme: brand
      text: 入门 ->
      link: /introduction
    - theme: alt
      text: 开源地址
      link: https://gitcode.com/kviewui/kux-router

features:
  - title: 🤖自动生成pages配置
    details: 基于vite插件自动生成 pages.json 映射配置。
  - title: ⚒️ 细致的导航控制
    details: 可以拦截任何导航并精确地控制其结果。
  - title: 💎 具有uniapp x特色的路由跳转方式
    details: 支持 uni.reLaunch、uni.switchTab 等原生api跳转。
  - title: 📱 支持应用启动拦截
    details: 单个路由支持设置是否开启启动拦截。
  - title: 🔙 支持路由返回守卫
    details: 在 uts 跨平台基础上可以监听页面返回自动挂载守卫拦截。
  - title: ⌛️ 支持异步拦截守卫
    details: 全局拦截守卫均支持 async 异步拦截。
---

