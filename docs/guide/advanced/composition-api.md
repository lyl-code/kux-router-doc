# 组合式API

## 在 `setup` 中访问路由实例和当前路由

因为我们无法在 `setup` 里面访问 `this`，所以我们不能直接访问 `this.$router` 。作为替代，路由库提供了 `useRouter` 和 `useRoute` 函数：

```ts
import { useRouter, useRoute } from '@/uni_modules/kux-router';

export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        
        const pushTo = () => {
            router.push('/pages/user/info');
        }
        
        // 获取当前路由信息
        console.log(route);
    }
}
```
