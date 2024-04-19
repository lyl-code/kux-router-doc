# 命名路由

除了 `path` 之外，还可以通过路由的 `name` 进行跳转。主要应用于 `routes` 中的路由重定向。命名路由有以下优点：

+ 没有硬编码的 URL。
+ 防止手动填写 `path` 路径出现打字错误。 

```ts
import {RouteRecordNormalized} from '@/uni_modules/kux-router';
const routes = [
	{
		path: '/pages/user/info',
		name: 'UserInfo'
	}
] as RouteRecordNormalized[];
```

要导航到一个命名的路由，参考下面示例代码：

### 声明式

```vue
<template>
  <kux-router-link :to="options">User</kux-router-link>
</template>

<script setup>
  import { RouteRecordNormalized } from '@/uni_modules/kux-router';
  
  const options = ref<RouteRecordNormalized>({
    name: 'User',
    data: {
        username: 'tom'
    }
  } as RouteRecordNormalized);
</script>
```

### 编程式

```ts
import { RouteRecordNormalized } from '@/uni_modules/kux-router';

router.push({
    name: 'User',
    data: {
        username: 'tom'
    }
} as RouteRecordNormalized);
```

::: warning 提醒

所有路由的命名**都必须是唯一的**。如果为多个路由添加相同的命名，路由器只会保留最后一条记录。

:::
