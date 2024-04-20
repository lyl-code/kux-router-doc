# API 文档

## UTS 类型
+ [<s>RouteRecordRedirect</s>](interfaces/RouteRecordRedirect)
+ [RouteRecordName](interfaces/RouteRecordName)
+ [RouteRecordPath](interfaces/RouteRecordPath)
+ [<s>RouteLocationGuardReturnOptions</s>](interfaces/RouteLocationGuardReturnOptions)
+ [<s>NavigationGuardReturn</s>](interfaces/NavigationGuardReturn)
+ [RouteLocationNormalizedLoaded](interfaces/RouteLocationNormalizedLoaded)
+ [NavigationGuardWithThis](interfaces/NavigationGuardWithThis)
+ [<s>RouteRecordRedirectOption</s>](interfaces/RouteRecordRedirectOption)
+ [RouteRecordNormalized](interfaces/RouteRecordNormalized)
+ [RouterOptions](interfaces/RouterOptions)
+ [NavigationFailureType](interfaces/NavigationFailureType)
+ [NavigationFailure](interfaces/NavigationFailure)
+ [NavigationHookAfter](interfaces/NavigationHookAfter)
+ [ErrorListener](interfaces/ErrorListener)

## UTS 接口
+ [IRouter](interfaces/IRouter)
+ [IRoute](interfaces/IRoute)

## UTS 函数

### useRouter

+ useRouter (): [`IRouter`](interfaces/IRouter)

返回当前路由器实例。

#### 返回值

[`IRouter`](interfaces/IRouter)

---

### useRoute

+ useRoute (): [`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded)

返回当前路由信息。

#### 返回值

[`RouteLocationNormalizedLoaded`](interfaces/RouteLocationNormalizedLoaded)

---

### createRouter

+ createRouter (`options`): [`IRouter`](interfaces/IRouter)

创建一个路由器实例。

#### 参数

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| options | [`RouterOptions`](interfaces/RouterOptions) | 路由器初始化参数 |

#### 返回值

[`IRouter`](interfaces/IRouter)
