# UTS 类型：NavigationFailure

导航失败。详情可查阅[导航故障](/guide/advanced/navigation-failures)。

## 属性

### from

+ `必选` from: [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded)

当前路由信息。

### to

+ `必选` to: [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded)

即将前往的路由信息。

### type

+ `必选` type: [`NavigationFailureType`](./NavigationFailureType)

导航失败类型。

## UTS

```ts
/**
 * 导航失败信息
 * + from 当前路由信息
 * + to 即将前往的路由信息
 * + type 导航失败类型
 */
export type NavigationFailure = {
	from: RouteLocationNormalizedLoaded
	to: RouteLocationNormalizedLoaded,
	type?: NavigationFailureType
}
```