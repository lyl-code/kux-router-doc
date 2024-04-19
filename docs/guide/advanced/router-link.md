# RouterLink

Kux Router 提供了组件标签式的路由跳转导航守卫使用方式，需要单独下载 [kux-router-link](https://ext.dcloud.net.cn/plugin?id=17593) 插件。路由实例的所有导航守卫对该组件都生效。

## 组件属性

| 名称       | 类型                                                                                                                                           | 默认值    | 描述                                                             |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------|--------|----------------------------------------------------------------|
| to       | string([string.PageURIString](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#ide-string))                                            | -      | 要前往的页面地址，支持带query参数，如：/pages/user/info?id=1                    |
| openType | `'push'                                                                                           \| 'replace' \| 'switchTab' \| 'reLaunch'` | 'push' | 导航方式，见下方说明                                                     |
| options  | [RouteRecordNormalized](#api_types_RouteRecordNormalized)                                                                                    | -      | 编程式导航页面信息，在导航跳转时以对象方式设置更多参数信息，如 `data` 隐式传参，`meta` 元信息等等。见下发说明 |

### OpenType 说明
| 名称        | 说明                     |
|-----------|------------------------|
| push      | 对应 `router.push()`     |
| replace   | 对应 `router.replace()`  |
| switchTab | `router.switchTab()`   |
| reLaunch  | 对应 `router.reLaunch()` |

### 示例代码
```vue
<kux-router-link to="/pages/demo/pageCompInterceptor/pageCompInterceptor">
	<button type="primary">页面组件拦截示例</button>
</kux-router-link>
```
