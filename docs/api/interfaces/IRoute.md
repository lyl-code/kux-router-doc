# UTS 接口：IRoute

路由实例管理。

## 方法

### getRoutes

+ getRoutes (): [`RouteLocationNormalizedLoaded[]`](./RouteLocationNormalizedLoaded)

获取当前所有路由信息。

#### 返回值

[`RouteLocationNormalizedLoaded[]`](./RouteLocationNormalizedLoaded)

---

### current

+ current (): [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded)

获取当前路由信息。

#### 返回值

[`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded)

---

### hasRoute

+ hasRoute (`path`): `boolean`

根据路由地址判断该路由是否存在。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | 要判断的路由地址 |

#### 返回值

`boolean`

---

### resolve

+ resolve (`to`): [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded) | `null`

返回一个路由地址的规范化路由信息。

#### 参数

| 名称 | 类型 | 说明  |
| --- | --- |-----|
| to | [`RouteRecordName`](./RouteRecordName) | 路由地址 |

#### 返回值

[`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded) | `null`

## UTS

```ts
/**
 * 定义一个管理路由实例接口
 */
export interface IRoute {
	/**
	 * 获取当前所有路由信息
	 * @returns 返回当前所有路由的规范化路由信息列表
	 */
	getRoutes (): RouteLocationNormalizedLoaded[];
	
	/**
	 * 获取当前路由信息
	 * @returns 返回当前路由的规范化路由信息
	 */
	current (): RouteLocationNormalizedLoaded;
	
	/**
	 * 根据路由地址判断该路由是否存在
	 * @param { string } path 要判断的路由地址
	 */
	hasRoute (path: string): boolean;
	
	/**
	 * 返回一个路由地址的规范化路由信息。
	 * + `v1.1.0` 及以上版本支持。
	 * @param { RouteRecordName } to 路由地址
	 * @returns { RouteLocationNormalizedLoaded } 返回规范化的路由信息
	 */
	resolve (to: RouteRecordName): RouteLocationNormalizedLoaded | null;
}
```