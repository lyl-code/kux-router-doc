# UTS 类型：ErrorListener

错误处理器。详情可查阅[onError](IRouter#onerror)。

## 可调用函数

+ ErrorListener(`error`): `void`

### 参数

| 名称 | 类型 |
| --- | --- |
| error | `any` |

### 返回值

`void`

## UTS

```ts
/**
 * `onError` 回调定义
 */
export type ErrorListener = (error: any) => void
```