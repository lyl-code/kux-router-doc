# UTS 类型：RouterOptions

创建路由器的配置参数。

## 属性

### routes

+ `必选` routes: [`RouteRecordNormalized[]`](./RouteRecordNormalized)

创建路由器时的初始化路由表。

## UTS

```ts
/**
 * 创建路由器的配置参数
 */
export type RouterOptions = {
	/**
	 * 创建路由器时的初始化路由表
	 */
	routes: RouteRecordNormalized[]
}
```