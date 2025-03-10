# UTS 类型：NavigationFailureType

导航失败类型。详情可查阅[导航故障](/guide/advanced/navigation-failures)。

## 可选值

### aborted

被中止，比如路由守卫中手动返回了 `false`。

### cancelled

被取消，比如下一个导航已经开始而导航失败。

### duplicated

重复导航，比如现在已经处于要导航到的路径而导航失败。

### notTabPage

非 `tab` 页面，比如通过 `switchTab` 跳转非tab页面而导航失败。

### notfound

页面不存在， 比如输入了错误的路由地址。
