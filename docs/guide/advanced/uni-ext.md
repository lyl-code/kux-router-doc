# `uni` 全局挂载

插件通过vite自动生成了 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html) 的封装插件来实现了直接挂载 `uni` 对象。具体操作如下：

+ `vite.config.ts` 修改如下：
```typescript
import { defineConfig } from 'vite';
import uni from "@dcloudio/vite-plugin-uni";
import generateUniext from './uni_modules/kux-router/vite/vite-plugin-generate-uniext' // [!code ++]
import autopages from './uni_modules/kux-autopages';
import kuxgen from './uni_modules/kux-router/vite/vite-plugin-kux-gen';

export default defineConfig({
	plugins: [
		generateUniext, // [!code ++]
		uni(),
        autopages({
          pagesJsonMappingFile: 'router/pages.uts',
        }),
        kuxgen({
          pagesJsonMappingFile: 'router/pages.uts',
          routerFile: 'router/router.uts'
        })
	],
})
```

+ 然后项目中即可直接使用：
    + `uni.useKuxRouter` 来替代原来的手动导入 `useRouter`。
    + `uni.useKuxRoute` 来替代原来的手动导入 `useRoute`。
    + `uni.createKuxRouter` 来替代原来的手动导入 `createRouter`。

::: danger 注意

+ `v1.1.5` 及以上版本支持。
+ 上面的 `generateUniext` 为新增的导入模块。模块初始化时会在 `uni_modules` 目录下面生成 `uni-kuxrouter` 插件，该插件第一次生成时需要编译两次才能正常使用。该插件存在时按照正常的编译一次即可。
+ 介意上面第一次需要编译两次的谨慎使用 `uni` 全局挂载方式。
+ `v1.2.2` 及以上版本修复了需要编译两次的问题。

:::

## 小程序环境使用事项 <Badge text="v1.2.4+" />
uni编译器 `4.35` 及以上版本开始支持小程序，`main.uts` 写法如下：

```ts
import App from './App.uvue'

import { createSSRApp } from 'vue'
import { createRouter } from '@/uni_modules/kux-router';
import { RouterOptions, UseAddInterceptorOptions } from '@/uni_modules/kux-router';
import routes from './router2/router';
// #ifdef MP // [!code ++]
import { createKuxRouter, useKuxRouter, useKuxRoute } from '@/uni_modules/uni-kuxrouter'; // [!code ++]
// #endif // [!code ++]

export function createApp() {
	const app = createSSRApp(App)
	// #ifdef MP // [!code ++]
	uni.createKuxRouter = createKuxRouter; // [!code ++]
	uni.useKuxRouter = useKuxRouter; // [!code ++]
	uni.useKuxRoute = useKuxRoute; // [!code ++]
	// #endif // [!code ++]
	const router = uni.createKuxRouter({
		routes: routes,
		useAddInterceptor: {
			switchTab: true,
		} as UseAddInterceptorOptions
	} as RouterOptions)
	app.provide('router', router);
	return {
		app
	}
}
```
