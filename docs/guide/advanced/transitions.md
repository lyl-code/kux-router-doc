# 过渡动效

过渡动效是直接使用的 [`uniapp x 页面跳转API`](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html) 本身的 `animationType` 参数。

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';

router.push({
    path: '/pages/home/index',
    animationType: 'slide-in-bottom' // [!code focus]
} as RouteRecordNormalized);
```

::: tip 提示

过渡动效兼容性请以实际运行效果为准。

:::
