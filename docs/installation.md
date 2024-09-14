# 安装

## 下载

由于该路由库为完全的 [uts 插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)，所以不需要像传统插件那样通过 `npm` 安装，直接打开插件市场地址：https://ext.dcloud.net.cn/plugin?id=15998, 下载插件导入项目即可。

## 配置

项目根目录创建 `vite.config.ts`，配置内容如下：

```ts
import { defineConfig } from 'vite';
import uni from "@dcloudio/vite-plugin-uni";
import autopages from './uni_modules/kux-autopages'; // [!code ++]
import kuxgen from './uni_modules/kux-router/vite/vite-plugin-kux-gen'; // [!code ++]

export default defineConfig({
	plugins: [
		uni(),
		autopages(), // [!code ++]
        kuxgen(), // [!code ++]
	],
})
```

::: tip 提示

项目根目录存在该文件时，不需要重新创建，直接按照上面示例代码进行配置 `autopages` 插件即可。

:::

### `kuxgen` 说明 <Badge text="1.2.0+"/>
路由库会通过 `kuxgen` 完成路由管理文件的自动生成，不需要手动创建 `router.uts` 文件。
#### 配置项
- routerFile：`router` 路由管理文件路径，默认值为 `./router.uts`。
- pagesJsonMappingFile：`pages.json` 映射文件路径，默认值为 `pages.interface.uts`。

示例代码：

```ts
import { defineConfig } from 'vite';
import uni from "@dcloudio/vite-plugin-uni";
import kuxgen from './uni_modules/kux-router/vite/vite-plugin-kux-gen';

export default defineConfig({
    plugins: [
        uni(),
        // ...其他配置
        kuxgen(), // [!code --]
        kuxgen({ // [!code ++]
            routerFile: 'router/router.uts', // [!code ++]
            pagesJsonMappingFile: 'router/pages.uts', // [!code ++]
        }) // [!code ++]
    ],
})
```

::: warning 提示
+ 如果自定义了 `routerFile` 那么 `main.uts` 里的 `import router from './router.uts'` 路径也需要修改为自定义路径。
+ 如果自定义了 `pagesJsonMappingFile` 那么 `router.uts` 里的 `import pages from './pagesJsonRouter.uts'` 路径也需要修改为自定义路径。
:::

### `autopages` 说明 <Badge text="1.2.0+"/>
`v1.2.0+` 版本开始支持 `autopages` 插件，该插件可以自动生成 `pages.json` 类型映射文件。方便开发者使用路由插件时代码自动提示。

具体参考 [uni路由映射](/guide/advanced/uni-router-map)
