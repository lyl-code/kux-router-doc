# `uni` 全局挂载

插件通过vite自动生成了 [uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html) 的封装插件来实现了直接挂载 `uni` 对象。具体操作如下：

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

::: danger 注意

+ `v1.1.5` 及以上版本支持。
+ 上面的 `generateUniext` 为新增的导入模块。模块初始化时会在 `uni_modules` 目录下面生成 `uni-kuxrouter` 插件，该插件第一次生成时需要编译两次才能正常使用。该插件存在时按照正常的编译一次即可。
+ 介意上面第一次需要编译两次的谨慎使用 `uni` 全局挂载方式。

:::
