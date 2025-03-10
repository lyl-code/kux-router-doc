# UTS 类型：ErrorListener

错误处理器。详情可查阅[onError](IRouter#onerror)。

## 可调用函数

+ ErrorListener(`ErrorListenerOptions`): `void`

### 参数

| 名称    | 类型                            | 说明 |
|-------|-------------------------------|-----|
| error | `any`                         | 捕获的错误对象。
| type  | [`NavigationFailureType`](./NavigationFailureType) | 导航失败类型。

### 返回值

`void`

## UTS

```ts
/**
 * `onError` 回调定义
 */
export type ErrorListener = (error: any) => void

/**
 * `onError` 守卫回调定义
 */
export type ErrorListenerOptions = {
    error?: any
    failure?: NavigationFailure
}
```
