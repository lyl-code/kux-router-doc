# 入门
路由导航使用支持 `HTML 组件标签` 和 `JavaScript API` 两种用法。请参考下面示例：
## HTML 组件标签
```vue
<!--使用 router-link 组件进行导航 -->
<kux-router-link class="mb-2" to="/pages/demo/pageCompInterceptor/pageCompInterceptor">
    <button type="primary">页面组件拦截示例</button>
</kux-router-link>
```

### `kux-router-link`
该组件方便开发者们直接在 `HTML 标签` 中进行导航跳转，路由实例的所有导航守卫对该组件都生效。
> [!WARNING] 提示
> 
> 需要单独下载 [kux-router-link](https://ext.dcloud.net.cn/plugin?id=17593) 组件方可正常使用。
## JavaScript API
由于新版的底层全面重构，所以在初始化的时候自动做了 `pages.json` 路由映射，会在项目根目录自动生成 `pagesJsonRouter.uts` 文件，方便创建路由实例时自动根据该映射配置创建 `routes` 路由池。具体操作如下：
+ 项目根目录创建 `router.uts` 文件
+ 项目根目录的 `main.uts` 全局挂载

::: code-group

```ts [router.uts]
import { pages } from '@/pagesJsonRouter';
import { RouteRecordNormalized } from '@/uni_modules/kux-router/utssdk/interface';
// 这个是全局 `store` 状态管理内容，可以根据自己的项目灵活引入使用。
import { state } from '@/store/index';

// 初始化路由池信息
let routes: RouteRecordNormalized[] = [];
// 遍历pages映射创建路由池信息
pages.map((item) => {
    switch (item.path) {
        case '/pages/p1/p1':
            routes.push({
                path: item.path,
                // name为可选，如果后面想通过该路由的名称跳转时记得要在这里传 `name`
                name: item.name,
                // query为可选，一般用来设置全局query参数的场景
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
            break;
        case '/pages/demo/indexInterceptor/indexInterceptor':
            routes.push({
                path: item.path,
                name: item.name,
                // 测试未登录启动首页拦截
                beforeEnter: (async (to, from): Promise<any | null> => {
                    if (state.token3.length == 0) {
                        let s = 3;
                        let timer: number = 0;
                        timer = setInterval(() => {
                            if (s <= 0) {
                                clearInterval(timer);
                            } else {
                                uni.showToast({
                                    title: `${s}秒后自动拦截到登录页面`,
                                    icon: 'none',
                                    position: 'center'
                                });
                            }
                            s--;
                        }, 1000);
                        const delay = async (): Promise<number> => {
                            return new Promise<number>((resolve) => {
                                setTimeout(() => {
                                    resolve(0);
                                }, 5000);
                            })
                        }

                        await delay();

                        return {
                            name: 'PagesDemoIndexInterceptorLogin'
                        } as RouteRecordNormalized;
                    }

                    return null;
                }),
            } as RouteRecordNormalized);
            break;
        // 不需要做自定义导航守卫的记得要在这里获取映射配置内容并传给 `routes`
        default:
            routes.push({
                path: item.path,
                name: item.name
            } as RouteRecordNormalized);
    }
});
```
```ts [main.uts]
import App from './App.uvue'

import { createSSRApp } from 'vue'
import { createRouter } from '@/uni_modules/kux-router';
import { RouterOptions } from '@/uni_modules/kux-router/utssdk/interface';
import routes from './router';

export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter({
        routes: routes
    } as RouterOptions);
    // 组合式API建议通过如下方式挂载
    app.provide('router', router);
    // 选项式API可以通过如下方式挂载
    // app.config.globalProperties.router = router;
    return {
        app
    }
}
```

:::

全局挂载后我们可以通过 `this.$router` 的形式使用路由实例，并且以 `this.$router.current` 的形式访问当前路由
