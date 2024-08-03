# 安装

## 下载

由于该路由库为完全的 [uts 插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)，所以不需要像传统插件那样通过 `npm` 安装，直接打开插件市场地址：https://ext.dcloud.net.cn/plugin?id=16177, 下载插件导入项目即可。

## 配置

项目根目录创建 `vite.config.ts`，配置内容如下：

```ts
import { defineConfig } from 'vite';
import uni from "@dcloudio/vite-plugin-uni";
import pagesJsonPlugin from './uni_modules/kux-router/vite/vite-plugin-kux-pages-json.ts'; // [!code ++]

export default defineConfig({
	plugins: [
		uni(),
		pagesJsonPlugin // [!code ++]
	],
})
```

::: tip 提示

项目根目录存在该文件时，不需要重新创建，直接按照上面示例代码进行配置 `pagesJsonPlugin` 插件即可。

:::

### `pagesJsonPlugin` 说明 <Badge text="1.1.6+"/>
`v1.1.6+` 版本开始支持函数形式注册 `pagesJsonPlugin`，函数参数如下：

- pagesJsonMappingFile：`pages.json` 映射文件路径，默认值为 `pagesJsonRouter.uts`。自定义目录时不能以 `.` 开头，否则会影响 `router` 中模块的自动导入。具体示例可以参考下面的示例代码。
- routerFile：`router` 路由管理文件路径，默认值为 `./router.uts`。

示例代码：

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
        }) // [!code ++]
    ],
})
```

::: warning 提示
+ 如果自定义了 `routerFile` 那么 `main.uts` 里的 `import router from './router.uts'` 路径也需要修改为自定义路径。
+ 如果自定义了 `pagesJsonMappingFile` 那么 `router.uts` 里的 `import pages from './pagesJsonRouter.uts'` 路径也需要修改为自定义路径。
:::
