# 术语说明

本文档中使用的术语和概念整理如下：

## 路由实例

路由实例是通过 [createRouter](/api/#createrouter) 方法创建的路由对象。也可以通过 [useRouter](/api/#userouter) 方法获取当前路由实例。
前面文档代码中所有的 `router` 都是指路由实例。
::: danger 注意
文档中代码的 `router` 指代的路由实例对象，并不是代码中的 `router` 变量名。
:::

## 路由参数

路由参数分为 2 种：

- 查询参数：`?key=value` 形式的 URL 参数，可参考 [query 参数获取](/guide/advanced/data-fetching#query参数获取)。
- 隐式参数：通过路由 `data` 配置项传入的动态参数，可参考 [data 参数获取](/guide/advanced/data-fetching#data参数获取)。

## 路由元信息

路由元信息是指通过 `meta` 配置项传入的额外信息，可参考 [路由元信息](/guide/advanced/meta)。

## 路由池

路由池是指通过 [createRouter](/api/#createrouter) 方法创建路由实例时，插件通过传入的 `routes` 参数，将 `pages.json` 文件中定义的路由信息转换成的路由实例列表。

## 路由栈

路由栈是指当前激活的路由实例列表，是通过 [getCurrentPages](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html#getcurrentpages) 获取。

