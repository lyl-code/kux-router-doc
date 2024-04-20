# UTS 类型：NavigationGuardWithThis

导航守卫。详情可查阅[导航守卫](/guide/advanced/navigation-guards)。

## 可调用函数

### NavigationGuardWithThis

+ NavigationGuardWithThis(`to`, `from`): `Promise`<`any` | `null`>

#### 参数

| 名称   | 类型                                                                         |
|------|----------------------------------------------------------------------------|
| to   | [RouteLocationNormalizedLoaded](./RouteLocationNormalizedLoaded) \| `null` |
| from | [RouteLocationNormalizedLoaded](./RouteLocationNormalizedLoaded) \| `null` |

#### 返回值

`Promise`<`any` | `null`>

::: warning 返回值说明

由于目前 `UTS` 联合类型限制，类型定义只能定义 `any | null`，实际返回值支持如下三种情况：

+ `false`: 直接返回 `false` 可以用来取消导航。
+ `string`: 可以直接返回 `页面地址` 或者 `路由名称`。
+ [`RouteLocationNormalizedLoaded`](./RouteRecordNormalized)：可以直接返回对象形式的路由信息。

:::

## UTS

```ts
export type NavigationGuardWithThis = (to: RouteLocationNormalizedLoaded | null, from: RouteLocationNormalizedLoaded | null) => Promise<any | null>
```

