# UTS 类型：RouteRecordNormalized

创建路由时路由表中的路由信息。

## 属性

### beforeEnter

+ `可选` beforeEnter: [`NavigationGuardWithThis`](./NavigationGuardWithThis)

被注册的 `beforeEnter` 前置守卫。详情可查阅[前置守卫](/guide/advanced/navigation-guards.html#全局前置守卫)。

### meta

+ `可选` meta: `UTSJSONObject`

路由元信息。详情可查阅[路由元信息](/guide/advanced/meta)。

### name

+ `可选` name: [`RouteRecordName`](./RouteRecordName)

路由名称。

### path

+ `可选` path: `PagesJson.PagePath`

当前路由页面地址，这个是去除参数后的地址，如：`/pages/user/info`。

### query

+ `可选` query: `UTSJSONObject`

当前路由的 `query` 传参。

### data

+ `可选` data: `UTSJSONObject`

路由隐式传参，替代旧版本的 `params`。

### redirect

+ `可选` redirect: [`RouteRecordRedirectOption`](./RouteRecordRedirectOption)

被注册的路由重定向守卫。详情可查阅[重定向](/guide/essentials/redirect)。

### startupIntercept

+ `可选` startupIntercept: `boolean`

是否开启启动拦截，开启后 `beforeEnter` 和 `redirect` 会在实例加载成功后就立刻挂载全局，适用于应用启动拦截的场景，如首页未登录直接跳转登录页等。

### animationType

+ `可选` animationType: `string`

窗口显示的动画类型。详情可查阅[过渡动效](/guide/advanced/transitions)。

### animationDuration

+ `可选` animationDuration: `number`

窗口显示动画的持续时间，单位为毫秒。详情可查阅[过渡动效](/guide/advanced/transitions)。

## UTS

```ts
/**
 * 创建路由时路由表中的路由信息
 */
export type RouteRecordNormalized = {
    /**
     * 被注册的 `beforeEnter` 前置守卫
     */
    beforeEnter?: NavigationGuardWithThis
    // children: any[]
    /**
     * 路由元信息
     */
    meta?: UTSJSONObject
    /**
     * 路由名称
     */
    name?: RouteRecordName
    /**
     * 当前路由页面地址，这个是去除参数后的地址，如：`/pages/user/info`
     */
    path?: PagesJson.PagePath
    /**
     * 当前路由的 `query` 传参
     */
    query?: UTSJSONObject
    /**
     * 路由隐式传参，替代旧版本的 `params`
     */
    data?: UTSJSONObject
    /**
     * 被注册的路由重定向守卫
     */
    redirect?: RouteRecordRedirectOption
    /**
     * 是否开启启动拦截，开启后 `beforeEnter` 和 `redirect` 会在实例加载成功后就立刻挂载全局，适用于应用启动拦截的场景，如首页未登录直接跳转登录页等。
     */
    startupIntercept?: boolean
    /**
     * 窗口显示的动画类型，`v1.1.0` 及以上版本支持
     * + auto: 自动选择动画效果
     * + none: 无动画效果
     * + slide-in-right: 从右侧横向滑动效果
     * + slide-in-left: 左侧横向滑动效果
     * + slide-in-top: 从上侧竖向滑动效果
     * + slide-in-bottom: 从下侧竖向滑动效果
     * + fade-in: 从透明到不透明逐渐显示效果
     * + zoom-out: 从小到大逐渐放大显示效果
     * + zoom-fade-out: 从小到大逐渐放大并且从透明到不透明逐渐显示效果
     * + pop-in: 从右侧平移入栈动画效果
     */
    animationType?: string
    /**
     * 窗口显示动画的持续时间，单位为 ms
     * + `v1.1.0` 及以上版本支持
     */
    animationDuration?: number
}
```