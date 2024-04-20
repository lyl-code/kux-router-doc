# 编程式导航

除了使用 `<kux-router-link>` 创建标签来自定义导航外，我们还可以通过 `router` 的实例方法来自定义跳转到导航的页面。

路由实例支持 [`uniapp x API`](https://doc.dcloud.net.cn/uni-app-x/api/) 页面跳转的所有方法，具体参考下面说明：

| 声明式                                               | 编程式                |
|---------------------------------------------------|--------------------|
| `<kux-router-link :to="...">`                     | `router.push(...)` |
| `<kux-router-link :to="..." open-type="replace">` | `router.replace(...)` |
| `<kux-router-link :to="..." open-type="reLaunch">` | `router.reLaunch(...)` |
| `<kux-router-link :to="..." open-type="switchTab">` | `router.switchTab(...)` |
| - | `router.back(...)` |

下面以部分实例方法进行演示说明。

## 导航到不同的位置

::: danger 注意

下面以及文档中所有的 `router` 都是指代的路由实例本身。在页面内部你可以使用 `$router` 访问路由，如：`this.$router.push(...)`。如果使用的是 `组合式API`，你可以通过 [`useRouter`](/guide/advanced/composition-api) 来访问路由实例。

:::

想要导航到不同的 URL，可以使用 `router.push` 方法。这个方法会向路由栈添加一个新的记录。该方法基于 [`uni.navigateTo`](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#navigateto) 实现。

当你点击 `<kux-router-link>` 时，其实组件内部也会这个方法。相当于调用 `router.push(...)`:

| 声明式                           | 编程式                |
|-------------------------------|--------------------|
| `<kux-router-link :to="...">` | `router.push(...)` |

###### 该方法有一个参数，参数类型支持多种，具体类型说明如下：

| 类型名                                                | 默认值 | 说明                                    |
|----------------------------------------------------|-----|---------------------------------------|
| [RouteRecordPath](/api/interfaces/RouteRecordPath) | -   | 路由地址，该类型会在重新编译的时候根据 `pages.json` 自动更新 |
| [RouteRecordNormalized](/api/interfaces/RouteRecordNormalized)          | -   | 创建路由表时的路由配置信息                         |

::: tip 说明

上面参数类型支持下面所有的方法，如 `router.replace`、`router.reLaunch` 以及 `router.switchTab`

:::

```ts
// 路径直传
router.push('/pages/user/list');

// 对象方式跳转，可以指定 `query` 参数，`data` 参数等其他内容
router.push({
    path: '/pages/user/info',
    query: {
        id: 1
    },
    data: {
        member_id: 30
    }
} as RouteRecordNormalized);
```

`router.push` 以及其他所有导航方法都会返回一个 ***Promise***，这样我们可以等到导航完成后知道是导航成功还是失败了。你可以在 [导航故障](/guide/advanced/navigation-failures) 中了解更多关于 `导航故障` 的情况。

## 替换当前位置

该方法类似于 `router.push`，不过它是关闭当前页面直接打开应用内的某个页面的形式。该方法基于 [`uni.redirectTo`](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#redirectto) 实现。

| 声明式                                               | 编程式                   |
|---------------------------------------------------|-----------------------|
| `<kux-router-link :to="..." open-type="replace">` | `router.replace(...)` |

参数类型 [同上](#该方法有一个参数-参数类型支持多种-具体类型说明如下)

```ts
// 路径直传
router.replace('/pages/user/list');

// 对象方式跳转，可以指定 `query` 参数，`data` 参数等其他内容
router.replace({
    path: '/pages/user/info',
    query: {
        id: 1
    },
    data: {
        member_id: 30
    }
} as RouteRecordNormalized);
```

## 横跨历史
该方法采用一个整数作为参数，表示在历史堆栈中后退多少步。方法基于 [`uni.navigateBack`](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#navigateback) 实现。

```ts
// 返回1条记录，与 uni.navigateBack() 相同
router.back();

// 返回 3 条记录，与 uni.navigateBack({delta: 3}) 相同
router.back(3);
```

::: danger 注意

上面所有示例代码用到了 [`RouteRecordNormalized`](/api/interfaces/RouteRecordNormalized) 自定义类型，需要手动从路由库中手动导入该类型。

:::
