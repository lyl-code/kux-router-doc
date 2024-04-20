# UTS 类型：RouteLocationGuardReturnOptions

导航守卫回调函数参数值。

## 属性

### query

+ `可选` query: `UTSJSONObject`

当前路由的 `query` 传参。

### path

+ `可选` path: `string`

当前路由去除 `query` 参数后的页面地址。

### name

+ `可选` name: [`RouteRecordName`](./RouteRecordName)

路由名称，即 `routes` 中配置的 `name` 参数。

### meta

+ `可选` meta: `UTSJSONObject`

路由元信息，即 `routes` 中配置的 `meta` 参数。

## UTS

```ts
export type RouteLocationGuardReturnOptions = {
	/**
	 * 当前路由的 `query` 传参
	 */
	query?: UTSJSONObject
	// params?: Map<string, any>
	/**
	 * 当前路由去除 `query` 参数后的页面地址
	 */
	path?: string
	/**
	 * 当前路由隐式传参，即参数不在地址栏中展现
	 * + `v1.1.0` 及以上版本支持。
	 */
	data?: UTSJSONObject
	/**
	 * 路由名称，即 `routes` 中配置的 `name` 参数
	 */
	name?: RouteRecordName
	/**
	 * 路由元信息，即 `routes` 中配置的 `meta` 参数
	 */
	meta?: UTSJSONObject
	/**
	 * 当前路由页面带参数的完整地址，如：`/pages/user/info?id=1`
	 * + `v1.1.0` 及以上版本支持。
	 */
	fullPath?: string
};
```

<!--@include: ./footer.md-->