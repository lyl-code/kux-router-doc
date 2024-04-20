# UTS 接口：IRouter

路由器实例。

## 属性

### options

+ `只读` options: [`RouterOptions`] | `null`

创建路由器时的原始选项对象。

### from

+ from: [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded)

获取即将离开的路由信息。

## 方法

### updateRoute

+ updateRoute (`route`): `Promise`<`any` | `null`>

动态更新 `routes` 配置中的路由信息。

#### 参数

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| route | [`RouteRecordNormalized`](./RouteRecordNormalized) | `routes` 中的路由配置信息。 |

#### 返回值

`Promise`<`any` | `null`>

---

### currentRoute

+ currentRoute (): [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded)

获取当前路由信息。

#### 返回值

`RouteLocationNormalizedLoaded`[`一个规范化的路由信息`](./RouteLocationNormalizedLoaded)

---

### afterEach

+ afterEach (`guard`): () => `void`

添加一个导航钩子，它会在每次导航之后被执行。返回一个用来移除该钩子的函数。

#### 参数

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| guard | [`NavigationHookAfter`](./NavigationHookAfter) | 要加入的导航钩子 |

#### 返回值

`fn`

一个用来移除该钩子的函数。

+ (): `void`

添加一个导航钩子，它会在每次导航之后被执行。返回一个用来移除该钩子的函数。

##### 示例代码

```ts
router.afterEach((to, from) => {
	console.log(`页面 ${from.path} 跳转到了页面 ${to.path}`);
});
```

##### 返回值

`void`

---

### removeAfterEach

+ removeAfterEach (): `void`

用来移除所有的 `afterEach` 钩子函数。

#### 返回值

`void`

---

### back

+ back (`delta?`): `void`

通过调用 [`uni.navigateBack()`](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#navigateback) 在可能的情况下在历史中后退。

#### 参数

| 名称 | 类型 | 说明 |
| -- | --- | --- |
| delta | `number` | 回退的页面数，如果 delta 大于现有页面数，则返回到首页 |

#### 返回值

`void`

---

### beforeEach

+ beforeEach (`guard`): () => `void`

添加一个导航钩子，它会在每次导航之前被执行。返回一个用来移除该钩子的函数。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| guard | [`NavigationGuardWithThis`](./NavigationGuardWithThis) | 要加入的导航钩子 |

#### 返回值

`fn`

+ (): `void`

添加一个导航钩子，它会在每次导航之前被执行。返回一个用来移除该钩子的函数。

##### 返回值

`void`

---

### removeBeforeEach

+ removeBeforeEach (): `void`

用来移除所有的 `beforeEach` 守卫。

#### 返回值

`void`

---

### getRoutes

+ getRoutes (): [`RouteRecordNormalized[]`](./RouteRecordNormalized)

获得所有路由记录的完整列表。

#### 返回值

[`RouteRecordNormalized[]`](./RouteRecordNormalized)

---

### hasRoute

+ hasRoute (`name`): `boolean`

检查一个给定名称的路由是否存在。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| name | `string` | 要检查的路由名称 |

#### 返回值

`boolean`

---

### onError

+ onError (`handler`): `void`

添加一个错误处理器，它会在每次导航遇到未被捕获的错误出现时被调用。其中包括同步和异步被抛出的错误、在任何导航守卫中返回或传入 next 的错误、尝试解析一个需要渲染路由的异步组件时发生的错误。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| handler | [`ErrorListener`](./ErrorListener) | 要注册的错误处理器 |

#### 返回值

`void`

---

### push

+ push (`to`): `Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

程序式地通过将一条记录加入到历史栈中来导航到一个新的 URL。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| to | [`RouteRecordPath`](./RouteRecordPath) | 要导航到的路由地址 |
| to | [`RouteRecordNormalized`](./RouteRecordNormalized) | 要导航到的路由信息 |

#### 返回值

`Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

---

### replace

+ replace (`to`): `Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

程序式地通过替换历史栈中的当前记录来导航到一个新的 URL。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| to | [`RouteRecordPath`](./RouteRecordPath) | 要导航到的路由地址 |
| to | [`RouteRecordNormalized`](./RouteRecordNormalized) | 要导航到的路由信息 |

#### 返回值

`Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

---

### reLaunch

+ reLaunch (`to`): `Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

关闭所有页面，打开到应用内的某个页面。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| to | [`RouteRecordPath`](./RouteRecordPath) | 要导航到的路由地址 |
| to | [`RouteRecordNormalized`](./RouteRecordNormalized) | 要导航到的路由信息 |

#### 返回值

`Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

---

### switchTab

+ switchTab (`to`): `Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| to | [`RouteRecordPath`](./RouteRecordPath) | 要导航到的路由地址 |
| to | [`RouteRecordNormalized`](./RouteRecordNormalized) | 要导航到的路由信息 |

#### 返回值

`Promise`<[`NavigationFailure`](./NavigationFailure) | `null`>

---

### resolve

+ resolve (`to`): [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded) | `null`

返回一个路由地址的规范化路由信息。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| to | [`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded) | 路由地址 |

#### 返回值

[`RouteLocationNormalizedLoaded`](./RouteLocationNormalizedLoaded) | `null`

## UTS

```ts
/**
 * 定义一个路由器实例接口
 */
export interface IRouter {
	/**
	 * 当前的 `RouteLocationNormalized`
	 */
	// readonly currentRoute: Ref<RouteLocationNormalizedLoaded | null>
	
	/**
	 * 创建路由器时的原始选项对象。
	 * + `v1.1.0` 及以上版本支持
	 */
	readonly options: RouterOptions | null
	
	/**
	 * 获取即将离开的路由信息。
	 * + `v1.1.0` 及以上版本支持
	 */
	from: RouteLocationNormalizedLoaded | null
	
	/**
	 * 动态增加 routes 配置中的路由信息。
	 * @param { RouteRecordNormalized } route `routes` 中的路由配置信息。
	 * @deprecated 该方法即将被废弃，由路由库提供新的自动化解决方案替代。
	 */
	addRoute (route: RouteRecordNormalized): Promise<any | null>
	
	/**
	 * 动态更新 `routes` 配置中的路由信息。
	 * @param { RouteRecordNormalized } route `routes` 中的路由配置信息。
	 */
	updateRoute (route: RouteRecordNormalized): Promise<any | null>
	
	/**
	 * 获取当前路由信息
	 * @returns 返回一个规范化的路由信息。
	 */
	currentRoute (): RouteLocationNormalizedLoaded
	
	/**
	 * 添加一个导航钩子，它会在每次导航之后被执行。返回一个用来移除该钩子的函数。
	 * @param { NavigationHookAfter } guard 要加入的导航钩子
	 */
	afterEach (guard: NavigationHookAfter): () => void
	
	/**
	 * 用来移除所有的 `afterEach` 钩子函数
	 */
	removeAfterEach (): void
	
	/**
	 * 通过调用 uni.navigateBack() 在可能的情况下在历史中后退。相当于 router.go(-1)。
	 * @param { number } delta 回退的页面数，如果 delta 大于现有页面数，则返回到首页
	 */
	back (delta?: number): void
	
	/**
	 * 通过调用 uni.navigateBack() 在可能的情况下在历史中后退。相当于 router.go(-1)。
	 * @param { number } delta 回退的页面数，如果 delta 大于现有页面数，则返回到首页
	 * @param { RouteLocationNormalizedOptions } options 路由跳转时的配置参数，比如跳转时的转场动画配置
	 */
	back (delta?: number, options?: RouteLocationNormalizedOptions): void
	
	/**
	 * 添加一个导航钩子，它会在每次导航之前被执行。返回一个用来移除该钩子的函数。
	 * @param { NavigationGuardWithThis } guard 要加入的导航钩子
	 */
	beforeEach (guard: NavigationGuardWithThis): () => void
	
	/**
	 * 用来移除所有的 `beforeEach` 守卫。
	 * + `v1.1.0` 及以上版本支持。
	 */
	removeBeforeEach (): void
	
	/**
	 * 添加一个导航守卫，它会在导航将要被解析之前被执行。此时所有组件都已经获取完毕，且其它导航守卫也都已经完成调用。返回一个用来移除该守卫的函数。
	 * @param { NavigationGuardWithThis } guard 要加入的导航钩子
	 */
	// beforeResolve (guard: NavigationGuardWithThis): () => void
	
	/**
	 * 通过调用 history.forward() 在可能的情况下在历史中前进。相当于 router.go(1)。
	 */
	// forward (): void
	
	/**
	 * 获得所有路由记录的完整列表。
	 * @returns { RouteRecordNormalized[] } 返回所有路由记录的完整列表。
	 */
	getRoutes (): RouteRecordNormalized[]
	
	// go (delta: number): void
	
	/**
	 * 检查一个给定名称的路由是否存在。
	 * @param { string } name 要检查的路由名称
	 */
	hasRoute (name: string): boolean
	
	/**
	 * 添加一个错误处理器，它会在每次导航遇到未被捕获的错误出现时被调用。其中包括同步和异步被抛出的错误、在任何导航守卫中返回或传入 next 的错误、尝试解析一个需要渲染路由的异步组件时发生的错误。
	 * + `v1.1.0` 及以上版本支持。
	 * @param { ErrorListener } handler 要注册的错误处理器
	 */
	onError (handler: ErrorListener): void
	
	/**
	 * 程序式地通过将一条记录加入到历史栈中来导航到一个新的 URL。
	 * @param { RouteRecordPath } to 要导航到的路由地址
	 */
	push (to: RouteRecordPath): Promise<NavigationFailure | null>
	
	/**
	 * 程序式地通过将一条记录加入到历史栈中来导航到一个新的 URL。
	 * @param { RouteRecordNormalized } to 要导航到的路由信息
	 */
	push (to: RouteRecordNormalized): Promise<NavigationFailure | null>
	
	/**
	 * 程序式地通过将一条记录加入到历史栈中来导航到一个新的 URL。
	 * @param { any } to 要导航到的路由信息
	 * @param { RouteLocationNormalizedOptions } options 路由跳转时的配置参数，比如跳转时的转场动画配置
	 */
	push (to: any): Promise<NavigationFailure | null>
	
	// removeRoute (name: RouteRecordName): void
	
	/**
	 * 程序式地通过替换历史栈中的当前记录来导航到一个新的 URL。
	 * + `v1.1.0` 及以上版本支持。
	 * @param { RouteRecordPath } to 要导航到的路由地址
	 */
	replace (to: RouteRecordPath): Promise<NavigationFailure | null>
	
	/**
	 * 程序式地通过替换历史栈中的当前记录来导航到一个新的 URL。
	 * + `v1.1.0` 及以上版本支持。
	 * @param { RouteRecordNormalized } to 要导航到的路由信息
	 */
	replace (to: RouteRecordNormalized): Promise<NavigationFailure | null>
	
	/**
	 * 程序式地通过替换历史栈中的当前记录来导航到一个新的 URL。
	 * + `v1.1.0` 及以上版本支持。
	 * @param { any } to 要导航到的路由信息
	 */
	replace (to: any): Promise<NavigationFailure | null>
	
	/**
	 * 关闭所有页面，打开到应用内的某个页面
	 * `v1.1.0` 及以上版本支持
	 * @param { RouteRecordPath } to 要导航到的路由地址
	 */
	reLaunch (to: RouteRecordPath): Promise<NavigationFailure | null>
	
	/**
	 * 关闭所有页面，打开到应用内的某个页面
	 * `v1.1.0` 及以上版本支持
	 * @param { RouteRecordNormalized } to 要导航到的路由信息
	 */
	reLaunch (to: RouteRecordNormalized): Promise<NavigationFailure | null>
	
	/**
	 * 关闭所有页面，打开到应用内的某个页面
	 * `v1.1.0` 及以上版本支持
	 * @param { any } to 要导航到的路由信息
	 */
	reLaunch (to: any): Promise<NavigationFailure | null>
	
	/**
	 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	 * `v1.1.0` 及以上版本支持
	 * @param { RouteRecordPath } to 要导航到的路由地址
	 */
	switchTab (to: RouteRecordPath): Promise<NavigationFailure | null>
	
	/**
	 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	 * `v1.1.0` 及以上版本支持
	 * @param { RouteRecordNormalized } to 要导航到的路由信息
	 */
	switchTab (to: RouteRecordNormalized): Promise<NavigationFailure | null>
	
	/**
	 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	 * @param { any } to 要导航到的路由信息
	 */
	switchTab (to: any): Promise<NavigationFailure | null>
	
	/**
	 * 返回一个路由地址的规范化路由信息。
	 * + `v1.1.0` 及以上版本支持。
	 * @param { RouteRecordName } to 路由地址
	 * @returns { RouteLocationNormalizedLoaded } 返回规范化的路由信息
	 */
	resolve (to: RouteRecordName): RouteLocationNormalizedLoaded | null
}
```

