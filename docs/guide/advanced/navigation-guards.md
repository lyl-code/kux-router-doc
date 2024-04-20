# 导航守卫

`kux-router` 提供的导航守卫主要用来通过跳转或取消的方法守卫导航。目前支持全局导航守卫和路由配置全局守卫两种方式。

## 全局前置守卫

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';

router.beforeEach(async (to, from): Promise<any | null> => {
    if (from?.path == '/home') {
        return {
            path: '/homepage'
        } as RouteRecordNormalized;
    }
    
    return null;
});
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 `resolve` 完之前一直处于**等待中**。

每个守卫方法接收两个参数：

+ `to`: 即将要进入的目标
+ `from`: 当前导航即将离开的路由

可以返回如下参数值：

+ `false`: 取消当前的导航。
+ 一个 [路由地址](/api/interfaces/RouteRecordPath): 通过一个路由地址重定向到一个不同的地址，如同调用 `router.push()`。
+ 一个 [路由对象](/api/interfaces/RouteRecordNormalized): 通过传入对象参数同样可以重定向到一个不同的路由地址，正如上面示例代码那样。
+ `null`: 如果不需要拦截导航，可以直接返回 `null`。

如果遇到了导航失败的情况，路由实例可能会抛出一个 `Error`。这将会取消导航，并且调用 [`router.onError()`](/api/interfaces/IRouter#onerror) 注册过的回调函数。你可以在该回调里面获取导航失败的信息。

::: info 提示

`beforeEach` 返回一个可以用来移除自身的函数，如果需要移除该守卫，可以在使用完守卫后直接调用自身函数，示例代码如下：

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';

router.beforeEach(async (to, from): Promise<any | null> => {
    if (from?.path == '/home') {
        return {
            path: '/homepage'
        } as RouteRecordNormalized;
    }
})(); // 这里最后调用自身即可移除该守卫。
```

:::

## 全局后置钩子

你也可以注册全局后置钩子，和前置守卫不同的是后置钩子不需要返回类型，一般用来做路由跳转后的日志统计信息。

```ts
router.push('/pages/p1/p1');
// 模拟路由后置钩子记录日志
router.afterEach((to, from) => {
	console.log(`页面 ${from.path} 跳转到了页面 ${to.path}`);
});
```

::: info 提示

该守卫返回一个用来移除自身的函数，可以直接调用自身来移除该守卫。

:::

## 路由独享的守卫

你可以直接在路由配置上定义 `beforeEnter` 守卫：

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';

const routes = [
    {
        path: '/pages/p5/p5',
        beforeEnter: (async (_, _): Promise<any | null> => {
            return {
                path: '/pages/p6/p6'
            } as RouteRecordNormalized;
        })
    }
] as RouteRecordNormalized[];
```

## 完整的守卫解析流程

+ 检测 `routes` 配置中是否有 `redirect` 重定向，有的话执行重定向。
+ 检测 `routes` 配置中是否有 `beforeEnter` 守卫，有的话执行守卫。
+ 检测全局的 `beforeEach` 守卫，如果定义了就执行守卫。
+ 检测全局的 `afterEach` 守卫，如果定义了就执行守卫。

## 移除所有的前置守卫

你可以通过调用 `router.removeBeforeEach()` 来移除所有的 `beforeEach` 前置守卫。

## 移除所有的后置守卫

你可以通过调用 `router.removeAfterEach()` 来移除所有的 `afterEach` 后置守卫。
