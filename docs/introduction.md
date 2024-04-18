# 介绍
`kux-router` 是一个参考 [vue-router](https://router.vuejs.org/zh/) 的api设计实现的 [uts](https://doc.dcloud.net.cn/uni-app-x/uts/) 路由库，支持 [vue-router](https://router.vuejs.org/zh/) 的绝大数功能特色，如全局路由自定义 `routes` 配置，`beforeEach`、`afterEach` 等全局导航守卫，路由元信息等丰富的 api 供开发者灵活使用。功能特色：

+ 完全对齐 [vue-router](https://router.vuejs.org/zh/) 的API设计用法。
+ 支持多种导航守卫。
+ 支持应用启动拦截守卫。
+ 支持路由返回守卫。
+ 支持异步拦截守卫。
+ 支持组件式用法，需下载 [kux-router-link](https://ext.dcloud.net.cn/plugin?id=17593)。
+ 自动生成 `pages.json` 路由配置映射。
+ ...其他更多优秀的工具方法。

:::danger 注意
+ 由于 [uts](https://doc.dcloud.net.cn/uni-app-x/uts/) 为强类型语言，所以涉及自定义传参的都要手动指定类型，所有参数类型都已经导出，开发者直接根据提示直接导入使用即可。
+ `v1.1.0`  为全新重构的版本，旧版本升级时请仔细查看版本更新日志，升级过程有什么问题可以进群交流：[870628986](https://qm.qq.com/q/lJOzzu6UEw)
:::

