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