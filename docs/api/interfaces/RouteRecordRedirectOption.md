# UTS 类型：RouteRecordRedirectOption

路由重定向。详情可查阅[重定向](/guide/essentials/redirect)。

## 可调用函数

### RouteRecordRedirectOption

+ RouteRecordRedirectOption(`to`): [`RouteRecordNormalized`](./RouteRecordNormalized) | `null`

#### 参数

| 名称 | 类型 |
| --- | --- |
| to | [`RouteRecordNormalized`](./RouteRecordNormalized) |

#### 返回值

[`RouteRecordNormalized`](./RouteRecordNormalized) | `null`

## UTS

```ts
export type RouteRecordRedirectOption = (to: RouteLocationNormalizedLoaded) => RouteRecordNormalized | null
```

<!--@include: ./footer.md-->