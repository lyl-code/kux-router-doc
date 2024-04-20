# UTS 类型：NavigationHookAfter

全局后置守卫。详情可查阅[全局后置钩子](/guide/advanced/navigation-guards#全局后置钩子)。

## 可调用函数

+ NavigationHookAfter(`to`, `from`, `failure`): `any`

### 参数

| 名称 | 类型 |
| --- | --- |
| to | [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded) |
| from | [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded) |
| failure | [`NavigationFailure`](./NavigationFailure) \| `null` |

### 返回值

`any`

## UTS

```ts
/**
 * `afterEach` 守卫回调定义
 */
export type NavigationHookAfter = (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, failure: NavigationFailure | null) => any
```

