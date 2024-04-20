# UTS 类型：NavigationGuardReturn

导航守卫回调函数参数。

## 属性

### to

+ `可选` to: [`RouteLocationGuardReturnOptions`](./RouteLocationGuardReturnOptions)

即将前往的路由信息。

### from

+ `可选` from: [`RouteLocationGuardReturnOptions`](./RouteLocationGuardReturnOptions)

当前路由信息。

## UTS

```ts
export type NavigationGuardReturn = {
	/**
	 * 即将前往的路由信息
	 */
	to?: RouteLocationGuardReturnOptions
	/**
	 * 当前路由信息
	 */
	from?: RouteLocationGuardReturnOptions
};
```

<!--@include: ./footer.md-->