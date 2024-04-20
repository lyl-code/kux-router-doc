# 导航故障

当使用 `kux-router-link` 组件时，Kux Router 会自动调用 `router.push()` 来触发新的导航。一般情况下都会将用户导航到用户预期的新页面，但也有少数情况用户仍会留在同一页面：

+ 用户已经处在他们即将导航的页面。
+ 一个 [导航守卫](/guide/advanced/navigation-guards) 通过 `return false` 中断了导航。
+ 当前导航还未完成，新的导航守卫出现。
+ 一个 [导航守卫](/guide/advanced/navigation-guards) 通过返回新的路由，从而重定向到了其他页面。
+ 一个 [导航守卫](/guide/advanced/navigation-guards) 抛出了一个 `Error`。

## 等待导航结果

如果我们想在一个导航完成后做一些事情，我们需要在调用 `router.push` 后进行等待的方法。想象一下，我们有一个移动手机菜单，它允许我们进入不同的页面，而我们只想在导航到新页面后隐藏菜单，我们可能想这样做：

```ts
router.push('/my-profile');
this.isMenuOpen = false;
```

这样做的话会马上关闭菜单，因为 **导航是异步的**，我们需要通过 `await` 关键字等待导航完成：

```ts
await router.push('/my-profile'); // [!code focus]
this.isMenuOpen = false;
```

## 全局导航故障

你可以使用 [`router.afterEach()导航守卫`](/guide/adavanced/navigation-guards#全局后置钩子)检测全局导航故障：

```ts
router.afterEach((to, from, failure) => {
    if (failure != null) {
        sendToAnalytics(to, from, failure);
    }
});
```

## 鉴别导航故障

等待导航完成后，可以通过返回值是否为 `null` 以及是否为 [`NavigationFailure`](/api/interfaces/NavigationFailure) 类型来判断导航是否失败：

```ts
import { NavigationFailure } from '@/uni_modules/kux-router';

// 试图离开未保存的编辑文本界面
const failure = await router.push('/pages/articles/detail');

if (failure != null && failure instanceof NavigationFailure) {
    // 给用户显示一个小通知
    showToast('你现在还未完成保存，是否现在就离开?')
}
```

## 导航故障的属性

当导航失败时实例方法就会返回一个 [NavigationFailure](/api/interfaces/NavigationFailure)，该对象会返回以下三个参数：

+ `from`: 当前路由信息。一个 [规范化路由信息](/api/interfaces/RouteLocationNormalizedLoaded)。
+ `to`: 即将前往的路由信息。一个 [规范化路由信息](/api/interfaces/RouteLocationNormalizedLoaded)。
+ `type`: 导航失败类型。
  + `aborted`: 被中止，比如路由守卫中手动返回了 `false`。
  + `cancelled`: 被取消，比如下一个导航已经开始而导航失败。
  + `duplicated`: 重复导航，比如现在已经处于要导航到的路径而导航失败。
