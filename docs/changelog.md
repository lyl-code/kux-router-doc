# 更新日志

<br/>

::: timeline 1.2.2 (2024-10-28)
+ 修复 `4.31编译器` 编译失败问题。
+ 修复因使用 [uni全局挂载](/guide/advanced/uni-ext.html) 导致无法云打包的问题。
+ 修复因使用 [uni全局挂载](/guide/advanced/uni-ext.html) 导致编译 `web` 反复热刷新的问题。
+ 修复因首次使用 [uni全局挂载](/guide/advanced/uni-ext.html) 需要编译两次的问题。
+ 优化其他已知问题。
:::

::: timeline 1.2.1 (2024-09-26)
+ 启动拦截场景新增支持 `beforeEnter` 守卫。
+ 优化其他已知问题。
:::

::: timeline 1.2.0 (2024-09-13)
+ 修复同一路由多次跳转时，路由参数未更新的问题。
+ `createRouter` 方法新增 `useAddInterceptor` 原生拦截器配置参数，用来支持 [uni原生页面跳转](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html) 跳转的拦截兼容。具体参数说明如下：
  + switchTab：是否监听拦截 `switchTab` 跳转，默认值为 `false`。
  + navigateTo：是否监听拦截 `navigateTo` 跳转，默认值为 `false`。
  + redirectTo：是否监听拦截 `redirectTo` 跳转，默认值为 `false`。
  + 示例代码如下：

  ```ts
  import { createRouter } from 'kux-router'

  const router = createRouter({
    //...
    useAddInterceptor: {
      switchTab: true,
      navigateTo: true,
      redirectTo: true
    }
  })
  ```

  > [!WARNING] 注意
  > + 该功能属于实验性功能，可能存在兼容性问题。如遇到问题，请及时反馈给我们。
+ web环境新增支持浏览器输入网址后的拦截跳转。原理是监听 `popstate` 变化，如果发生跳转，则触发 `router.replace` 方法。
+ 内部vite插件优化调整，具体如下：
  + 原来的 `vite-plugin-kux-pages-json` 改名为 `vite-plugin-kux-gen` 。
  + 新增绑定 [kux-autopage](https://ext.dcloud.net.cn/plugin?id=19799) 插件，用来做 `pages.json` 类型映射。原来 `vite-plugin-kux-pages-json` 对应的生成逻辑由 `kux-autopages` 完成。
  + 调整后的 `vite.config` 配置如下：

  ```ts
  import { defineConfig } from 'vite';
  import uni from "@dcloudio/vite-plugin-uni";
  import generateUniext from './uni_modules/kux-router/vite/vite-plugin-generate-uniext'
  import autopages from './uni_modules/kux-autopages'
  import kuxgen from './uni_modules/kux-router/vite/vite-plugin-kux-gen';

  export default defineConfig({
      plugins: [
          generateUniext, // 该配置为可选项，主要是为了使用uni.xxx的语法
          uni(),
          autopages({
              pagesJsonMappingFile: 'router2/pages.uts', // 该参数未配置时，默认在项目根目录下生成 `pages.interface.uts`
          }),
          kuxgen({
              pagesJsonMappingFile: 'router2/pages.uts', // 该参数同上
              routerFile: 'router2/router.uts' // 该参数未配置时，默认在项目根目录下生成 `router.uts`
          })
      ],
  })
  ```
:::

::: timeline 1.1.12 (2024-08-06)
+ 修复导航守卫因返回 `false` 取消导航插件锁定全局导航导致导航方法全都失效的问题。
+ 优化其他已知问题。
:::

::: timeline 1.1.11 (2024-08-05)
+ 修复 `pagesJsonRouter` 自动生成 `condition` 时缺少逗号导致编译失败的问题。
:::

::: timeline 1.1.10 (2024-08-05)
+ 优化 `router.uts` 默认生成逻辑，解决默认生成的内容编译安卓报错的问题。
+ 优化 `pagesJsonPlugin` 参数类型，调整为可选参数。
+ 优化其他已知问题。
:::

::: timeline 1.1.9 (2024-08-03)
+ 修复因自定义 `pagesJsonMappingFile` 导致插件内部 `interface` 因类型导入硬编码导致编译失败的问题。
+ 插件 `interface` 调整为自动生成，可以根据用户注册配置自动调整类型定义。为后续用户自定义类型注册提供便利。
+ 优化其他已知问题。
:::

::: timeline 1.1.8 (2024-08-02)
+ 修复 `pagesJsonRouter` 自动生成 `easycom` 变量错误的问题。
+ 优化 `pagesJsonRouter` 自动生成内容的换行格式。
:::

::: timeline 1.1.7 (2024-08-01)
+ 修复自定义目录无法自动创建的问题。
:::

::: timeline 1.1.6 (2024-07-30)
+ `pagesJsonRouter` 页面映射优化底层实现，调整为自动跟随 `pages.json` 变化同步，不再需要重新编译。
+ `pagesJsonRouter` 已支持 `pages.json` 的全部内容和类型映射，新增 `hasTabBar`、`hasTopWindow`、`hasLeftWindow`、`hasRightWindow`、`hasCondition`、`hasEasycom`、`hasUniIdRouter` 的导出，用来判断 `pages.json` 是否设置了 `tabBar`、`topWindow`、`leftWindow`、`rightWindow`、`condition`、`easycom` 和 `uniIdRouter` 等属性。
+ `pagesJsonRouter` 新增导出 `tabBar`、`topWindow`、`leftWindow`、`rightWindow`、`condition`、`easycom`、`uniIdRouter` 变量，用来获取 `pages.json` 中设置的属性值。
+ `pagesJsonRouter` 新增导出 `pages.json` 的属性类型定义，以此来帮助开发者更好地编写 `pages.json` 的类型定义。
+ `pagesJsonPlugin` vite插件定义调整为函数形式，并且函数参数新增 `pagesJsonMappingFile` 和 `routerFile`，具体说明如下：
  + pagesJsonMappingFile：`pages.json` 映射文件路径，默认值为 `pagesJsonRouter.uts`。自定义目录时不能以 `.` 开头，否则会影响 `router` 中模块的自动导入。具体示例可以参考下面的示例代码。
  + routerFile：`router` 文件路径，默认值为 `./router.uts`。
  > [!WARNING] 注意
  > + 如果自定义了 `routerFile` 路径，则需要在 `main.uts` 中同步调整原来 `router` 的导入路径。

```ts
import { defineConfig } from 'vite';
import uni from "@dcloudio/vite-plugin-uni";
import generateUniext from './uni_modules/kux-router/vite/vite-plugin-generate-uniext'
import pagesJsonPlugin from './uni_modules/kux-router/vite/vite-plugin-kux-pages-json';

export default defineConfig({
  plugins: [
    generateUniext,
    uni(),
    pagesJsonPlugin, // [!code --]     
    pagesJsonPlugin({ // [!code ++]
      pagesJsonMappingFile: 'router/pages.uts', // [!code ++]
      routerFile: 'router/router.uts' // [!code ++]
    }), // [!code ++]
  ]
})
```
+ `pagesJsonPlugin` 新增自动生成默认的 `router.uts` 路由管理文件，该文件不存在时会自动生成。默认内容如下：
  ```ts
  /**
  * 路由注册文件，编译时如果该文件不存在会由插件自动生成
  * @author kux <kviewui@163.com>
  * @created 2024-07-30 16:07:00
  * @version 1.1.6
  * @copyright Copyright (c) 2024 The Authors.
  * @license MIT License
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:

  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.

  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  */

  import { pages } from '@/router/pages.uts';
  import { RouteRecordNormalized } from '@/uni_modules/kux-router/utssdk/interface';

  let routes: RouteRecordNormalized[] = [];
  pages.map((item) => {
    // 演示拦截，请根据自己的实际业务逻辑和item内容实现，此处仅作为默认的演示参考
    if (item.needLogin) {
      // 这里是自己的拦截逻辑
    } else {
      routes.push({
          path: item.path,
          name: item.name
      } as RouteRecordNormalized)
    }
  });

  export default routes;
  ```
+ 优化其他已知问题。
:::

::: timeline 1.1.5 (2024-07-25)
+ 修复全局导航守卫 `beforeEach` 部分场景会重复跳转的问题。
+ 新增 `uni` 全局挂载支持，实现如下：
    + `vite.config.ts` 修改如下：


	```typescript
	import { defineConfig } from 'vite';
	import uni from "@dcloudio/vite-plugin-uni";
	import generateUniext from './uni_modules/kux-router/vite/vite-plugin-generate-uniext' // [!code ++]
	import pagesJsonPlugin from './uni_modules/kux-router/vite/vite-plugin-kux-pages-json.ts';

	export default defineConfig({
		plugins: [
			generateUniext, // [!code ++]
			uni(),
			pagesJsonPlugin
		],
	})
	```
	
	+ 然后项目中即可直接使用： 
		+ `uni.useKuxRouter` 来替代原来的手动导入 `useRouter`。
		+ `uni.useKuxRoute` 来替代原来的手动导入 `useRoute`。
		+ `uni.createKuxRouter` 来替代原来的手动导入 `createRouter`。
	
	> [!WARNING] 注意
	> + 上面的 `generateUniext` 为新增的导入模块。模块初始化时会在 `uni_modules` 目录下面生成 `uni-kuxrouter` 插件，该插件第一次生成时需要编译两次才能正常使用。该插件存在时按照正常的编译一次即可。
	> + 介意上面第一次需要编译两次的谨慎使用 `uni` 全局挂载方式。

+ 优化其他已知问题。
:::

::: timeline 1.1.4（2024-07-24）
+ 修复全局导航守卫 `redirect` 部分场景会重复跳转的问题。
+ 优化全局导航守卫类型规范，以此解决部分场景下类型检查报错的问题。
+ 优化其他已知问题。
:::

::: timeline 1.1.3（2024-07-24）
+ 修复全局守卫 `beforeEnter` 异步拦截失效问题。
+ `pagesJsonRouter` 新增支持 `pages.json` 中自带的 `needLogin`，以及自定义的 `query`、`meta` 和 `data` 参数。下面以 `needLogin` 作为演示，其他参数用法参考该示例即可。 示例如下：
    + pages.json中 `needLogin` 使用示例：<br/>
      **`pages.json` 添加 `needLogin`**

      ```json
      "pages": [
          {
              "path" : "pages/demo/indexInterceptor/indexInterceptor",
              "style" : 
              {
                  "navigationBarTitleText" : "",
                  "enablePullDownRefresh" : false,
                  "navigationStyle": "custom"
              },
              "needLogin": true
          }
      ]
      
      ```

      **`router` 路由配置使用**

      ```ts
      import { pages } from '@/pagesJsonRouter';
      import { RouteRecordNormalized } from '@/uni_modules/kux-router/utssdk/interface';
      
      let routes: RouteRecordNormalized[] = [];
      pages.map((item) => {
          if (item.needLogin == true) {
              routes.push({
                  path: item.path,
                  name: item.name,
                  redirect: (_): RouteRecordNormalized | null => {
                      return {
                          name: 'PagesP1Login'
                      } as RouteRecordNormalized
                  }
              } as RouteRecordNormalized)
          } else {
              routes.push({
                  path: item.path,
                  name: item.name
              } as RouteRecordNormalized)
          }
      })
      ```
+ 优化过时和非规范语法，以此解决编译期间产生的 `warning` 警告。
+ 优化 `updateRoute` 更新路由时偶发的空异常问题。
+ 优化其他已知问题。
:::

::: timeline 1.1.2（2024-04-19）
+ 修复编译web端时无法自动生成 `pagesJsonRouter.uts` 的问题。
:::

::: timeline 1.1.1（2024-04-18）
+ 【重要】底层全面重构，API设计完全对齐 [vue-router](https://router.vuejs.org/)，基于 [uniapp x](https://doc.dcloud.net.cn/uni-app-x/) 的跨平台原生特色新增诸多方便灵活的属性和方法。
+ 【重要】适配兼容ios平台。
+ 【新增】全局导航守卫支持同时设置多个，包括 `beforeEach`、`afterEach` 导航守卫方法。
+ 【新增】`to` 和 `from` 路由属性新增 `data` 字段，用来支持路由隐式传参。
+ 【新增】`RouteLocationNormalizedLoaded` 规范化路由信息新增 `data` 字段，用来接收路由隐式传参。
+ 【新增】`to` 和 `from` 路由属性新增 `fullPath` 字段，用来显示当前路由页面带参数的完整地址，如：`/pages/user/info?id=1`
+ 【新增】`RouteLocationNormalizedLoaded ` 规范化路由信息新增 `name` 字段，用来显示路由名称或者页面地址别名。
+ 【调整️】`fullUrl` 属性将被废弃，由 `fullPath` 属性替代。
+ 【新增】`RouteRecordNormalized` 创建路由表时的路由信息对象参数新增 `startupIntercept` 用来支持开启启动拦截，该参数为 `true` 时，应用启动时路由守卫就会立即挂载。常用于 `首页未登录拦截` 场景。
+ 【新增】`RouteRecordNormalized ` 创建路由表时的路由信息对象参数新增 `animationType` 参数，用来支持路由跳转时窗口显示的动画类型。动画类型参数参考下面说明。
    + auto: 自动选择动画效果
    + none: 无动画效果
    + slide-in-right: 从右侧横向滑动效果
    + slide-in-left: 左侧横向滑动效果
    + slide-in-top: 从上侧竖向滑动效果
    + slide-in-bottom: 从下侧竖向滑动效果
    + fade-in: 从透明到不透明逐渐显示效果
    + zoom-out: 从小到大逐渐放大显示效果
    + zoom-fade-out: 从小到大逐渐放大并且从透明到不透明逐渐显示效果
    + pop-in: 从右侧平移入栈动画效果

  > [!TIP] 提示
  > 该属性效果暂时需 [uniapp x](https://doc.dcloud.net.cn/uni-app-x/) 官方同步支持。
  
+ 【新增】`RouteRecordNormalized ` 创建路由表时的路由信息对象参数新增 `animationDuration` 参数，用来支持窗口显示动画的持续时间，单位为毫秒。

  > [!TIP] 提示
  > 该属性效果暂时需 [uniapp x](https://doc.dcloud.net.cn/uni-app-x/) 官方同步支持。
  
+ 【新增】`useRouter` 和 `createRouter` 实例新增 `options` 属性，可以获取创建路由实例时的原始选项参数。
+ 【调整️】`afterEach` 和 `beforeEach` 导航守卫新增返回可以移除自身的函数，调用后可以移除该导航守卫。
+ 【新增】`useRouter` 和 `createRouter` 实例新增 `removeBeforeEach` 方法用来移除所有的 `beforeEach` 守卫。
+ 【新增】`useRouter` 和 `createRouter` 实例新增 `onError` 方法，用来添加一个错误处理器，它会在每次导航遇到未被捕获的错误出现时被调用。其中包括同步和异步被抛出的错误、在任何导航守卫中返回或传入 next 的错误、尝试解析一个需要渲染路由的异步组件时发生的错误。
+ 【调整️】`push` 方法参数类型调整为一个参数，可支持多种参数类型。
    + `push (to: RouteRecordName): Promise<NavigationFailure | null>`
    + `push (to: RouteRecordNormalized): Promise<NavigationFailure | null>`
+ 【新增】`useRouter` 和 `createRouter` 实例新增 `replace` 方法，程序式地通过替换历史栈中的当前记录来导航到一个新的 URL。参数类型为一个参数，可以支持多种参数类型。
    + `replace (to: RouteRecordName): Promise<NavigationFailure | null>`
    + `replace (to: RouteRecordNormalized): Promise<NavigationFailure | null>`
+ 【新增】`useRouter` 和 `createRouter` 实例新增 `reLaunch` 方法，关闭所有页面，打开到应用内的某个页面。参数类型为一个参数，可以支持多种参数类型。
    + `reLaunch (to: RouteRecordName): Promise<NavigationFailure | null>`
    + `reLaunch (to: RouteRecordNormalized): Promise<NavigationFailure | null>`
+ 【新增】`useRouter` 和 `createRouter` 实例新增 `switchTab` 方法，跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。参数类型为一个参数，可以支持多种参数类型。
    + `switchTab (to: RouteRecordName): Promise<NavigationFailure | null>`
    + `switchTab (to: RouteRecordNormalized): Promise<NavigationFailure | null>`
+ 【新增】`useRouter` 和 `createRouter` 实例新增 `resolve` 方法，用来返回一个路由地址的规范化路由信息。

:::

::: timeline 1.0.1 (2024-01-30)
适配web版本【hbx4.0及以上版本支持】
:::

::: timeline 1.0.0（2023-12-20）
初始发布
:::
