# 数据获取

进入路由页面后，需要获取其他页面跳转到当前页面时传的数据。例如，在渲染用户信息时，需要从服务器获取用户数据需要知道用户的id。我们可以通过以下方式获取：

+ **query参数**：即最后拼接在地址栏后面的参数，如：`/user/info?id=1`。
+ **data参数**：即 `隐式传参`，该类型参数不会在地址栏后面显示，具有不需要 `URL编码解码`、`传统地址栏参数字数限制` 的优点。
  + 不需要 `URL编码解码`。
  + 没有参数字数限制。
  + 不用明文暴露参数。

## query参数获取

query 参数获取可以通过两种方式：

+ 通过当前路由信息获取
  ```ts
  const id = this.$router.current.query?.get('id');
  ```

+ 通过页面 `onLoad` 生命周期获取
  ```ts
  export default {
    data() {
        id: 0
    },
    onLoad(event: OnLoadOptions) { // 类型非必填，可自动推导 // [!code focus:3]
        this.id = event['id'] ?? 0;
    }
  }
  ```
  
## data参数获取

data 参数可以直接通过当前路由信息获取。

```ts
const id = this.$router.current.data?.get('id');
```
