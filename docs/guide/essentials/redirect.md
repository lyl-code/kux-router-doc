# 重定向

重定向也是通过 `routes` 配置来完成，下面例子是从 `/home` 重定向到 `/`：

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';

const routes = [
    {
        path: '/home',
        redirect: (_): RouteRecordNormalized | null => {
            return {
                path: '/'
            } as RouteRecordNormalized;
        }
    },
    {
        path: '/'
    }
] as RouteRecordNormalized[];
```

重定向的目标也可以是一个命名的路由：

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';
import { state } from '@/store/index';

routes.push({
    path: '/pages/p1/p1',
    name: item.name,
    query: {
        e: 1,
        f: 2
    } as UTSJSONObject,
    redirect: (to): RouteRecordNormalized | null => {
        // 测试判断是否登录
        if (state.token1.length == 0) {
            return {
                name: 'PagesP1Login'
            } as RouteRecordNormalized;
        }
        
        return null;
    }
} as RouteRecordNormalized);
```
