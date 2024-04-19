# 路由元信息

有时你希望将自定义的任意信息添加到路由上，如是否需要授权的场景，通过路由配置对象的 `meta` 属性可以实现前面的需求，并且它会被记录在全局路由配置状态中，路由信息和导航守卫都可以访问到。定义路由的时候你可以这样配置 `meta` 字段：

```ts
import {RouteRecordNormalized} from '@/uni_modules/kux-router';

const routes = [
    {
        path: '/pages/posts/new',
        meta: {
            // 只有经过身份认证的用户才能创建帖子
            requiresAuth: true
        }
    },
    {
        path: '/pages/posts/info',
        meta: {
            // 任何人都可以阅读
            requiresAuth: false
        }
    }
] as RouteRecordNormalized[];
```

这时候你可以通过 `beforeEach` 全局前置守卫来检查是否授权

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';

router.beforeEach(async (to, from): Promise<any | null> => {
    if (to?.meta?.get('requiresAuth') == true && !auth.isLoggedIn()) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: '/pages/login/index',
            // 保存现在的位置，方便后面跳回来
            query: {
                redirect: to.fullPath
            }
        } as RouteRecordNormalized;
    }

    return null;
});
```
