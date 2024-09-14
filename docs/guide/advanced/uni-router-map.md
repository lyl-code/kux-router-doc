# `uni` 路由映射

插件通过 `vite` 插件自动将 `pages.json` 内容同步到了 `uts` 类型系统中，方便开发者使用。具体操作如下：

### `vite.config.ts` 导入插件
```ts
import { defineConfig } from 'vite';
import uni from "@dcloudio/vite-plugin-uni";
import autopages from './uni_modules/kux-autopages'; // [!code ++]

export  default  defineConfig({
    plugins: [
        uni(),
        autopages({ // [!code ++]
            pagesJsonMappingFile: 'router/pages.uts', // 路由映射文件路径，自定义目录时不要以 `./` 开头  // [!code ++]
            routerFile: 'router/router.uts', // 路由管理文件路径 // [!code ++]
        }) // [!code ++]
    ]
})
```
::: warning 注意
+ autopages 插件需要在插件市场下载插件使用。[点击前往下载](https://ext.dcloud.net.cn/plugin?id=19799)
:::

### autopages 配置项

+ `pagesJsonMappingFile`： 路由映射文件路径，自定义目录时不要以 `./` 开头，否则会影响 `router` 自动生成时模块的导入。
+ `routerFile`： 路由管理文件路径。

## 映射类型
### NavigationBarTextStyle
导航栏标题颜色，仅支持 black/white。
```ts
export type NavigationBarTextStyle = 'white' | 'black'
```

### NavigationBarShadowColorType
阴影的颜色，支持：grey、blue、green、orange、red、yellow
```ts
export type NavigationBarShadowColorType = 'grey' | 'blue' | 'green' | 'orange' | 'red' | 'yellow'
```

### NavigationBarShadow
导航栏阴影
```ts
export type NavigationBarShadow = {
	colorType: NavigationBarShadowColorType
}
```

### NavigationStyle
导航栏样式，支持：custom、default
```ts
export type NavigationStyle = 'custom' | 'default'
```

### PageOrientation
页面旋转设置，支持 auto 设备自适应 / portrait 竖向 / landscape 横向
```ts
export type PageOrientation = 'auto' | 'portrait' | 'landscape'
```

### TransparentTitle
导航栏整体（前景、背景）透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明
```ts
export type TransparentTitle = 'always' | 'auto' | 'none'
```

### TitlePenetrate
导航栏点击穿透
```ts
export type TitlePenetrate = 'YES' | 'NO'
```

### CustomButtonType
自定义按钮类型，支持 forward、back、share、favorite、home、menu、close、none
```ts
export type CustomButtonType = 'forward' | 'back' | 'share' | 'favorite' | 'home' | 'menu' | 'close' | 'none'
```

### CustomButton
自定义按钮配置
```ts
export type CustomButton = {
	type?: CustomButtonType
	color?: string
	background?: string
	badgeText?: string
	colorPressed?: string
	float?: string
	fontWeight?: string
	fontSize?: string
	fontSrc?: string
	select?: string
	text?: string
	width?: string
}
```

### SearchInput
搜索框配置
```ts
export type SearchInput = {
	autoFocus?: boolean
	align?: string
	backgroundColor?: string
	borderRadius?: string
	placeholder?: string
	placeholderColor?: string
	disabled?: boolean
}
```

### TitleNView
导航栏 NView 配置
```ts
export type TitleNView = {
	backgroundColor?: string
	buttons?: CustomButton[]
	titleColor?: string
	titleText?: string
	titleSize?: string
	type?: string
	searchInput?: SearchInput
}
```

### PullToRefreshType
下拉刷新类型，支持 defaultValue 系统默认 / circle 圆形
```ts
export type PullToRefreshType = 'defaultValue' | 'circle'
```

### PullToRefreshContentcommon
下拉刷新内容配置
```ts
export type PullToRefreshContentcommon = {
	caption?: string
}
```

### PullToRefresh
下拉刷新配置
```ts
export type PullToRefresh = {
	support?: boolean
	color?: string
	type?: PullToRefreshType
	height?: string
	range?: string
	offset?: string
	contentdown?: PullToRefreshContentcommon
	contentover?: PullToRefreshContentcommon
	contentrefresh?: PullToRefreshContentcommon
}
```

### H5
H5 配置
```ts
export type H5 = {
	titleNView?: TitleNView
	pullToRefresh?: PullToRefresh
}
```

### PageStyle
页面样式配置
```ts
export type PageStyle = {
	navigationBarBackgroundColor?: string
	navigationBarTextStyle?: NavigationBarTextStyle
	navigationBarTitleText?: string
	navigationBarShadow?: NavigationBarShadow
	navigationStyle?: NavigationStyle
	backgroundColor?: string
	backgroundColorContent?: string
	enablePullDownRefresh?: boolean
	onReachBottomDistance?: number
	pageOrientation?: PageOrientation
	disableSwipeBack?: boolean
	titleImage?: string
	transparentTitle?: TransparentTitle
	titlePenetrate?: TitlePenetrate
	h5?: H5
	usingComponents?: UTSJSONObject
	leftWindow?: boolean
	topWindow?: boolean
	rightWindow?: boolean
	maxWidth?: number
}
```

### AnimationType
页面切换动画类型，支持 slide-in-right、slide-in-left、slide-in-top、slide-in-bottom、fade-in、zoom-out、zoom-fade-out、pop-in
```ts
export type AnimationType = 'slide-in-right' | 'slide-in-left' | 'slide-in-top' | 'slide-in-bottom' | 'fade-in' | 'zoom-out' | 'zoom-fade-out' | 'pop-in'
```

### GlobalStyle
全局样式配置
```ts
export type GlobalStyle = {
	navigationBarBackgroundColor?: string
	navigationBarTextStyle?: NavigationBarTextStyle
	navigationBarTitleText?: string
	navigationStyle?: NavigationStyle
	backgroundColor?: string
	backgroundColorContent?: string
	enablePullDownRefresh?: boolean
	onReachBottomDistance?: number
	titleImage?: string
	transparentTitle?: TransparentTitle
	titlePenetrate?: TitlePenetrate
	pageOrientation?: PageOrientation
	animationType?: AnimationType
	usingComponents?: UTSJSONObject
	leftWindow?: boolean
	topWindow?: boolean
	rightWindow?: boolean
	rpxCalcMaxDeviceWidth?: number
	rpxCalcBaseDeviceWidth?: number
	rpxCalcIncludeWidth?: number
	maxWidth?: number
	h5?: UTSJSONObject
}
```

### IconFont
字体图标配置
```ts
export type IconFont = {
	text?: string
	selectedText?: string
	fontSize?: string
	color?: string
	selectedColor?: string
}
```

### TabbarItem
标签栏项配置
```ts
export type TabbarItem = {
	iconfont?: IconFont
	pagePath?: string
	text?: string
	iconPath?: string
	selectedIconPath?: string
	visible?: boolean
}
```

### TabbarMidButton
中间按钮配置
```ts
export type TabbarMidButton = {
	width?: string
	height?: string
	text?: string
	iconPath?: string
	iconWidth?: string
	backgroundImage?: string
}
```

### Tabbar
标签栏配置
```ts
export type Tabbar = {
	color?: string
	selectedColor?: string
	backgroundColor?: string
	borderStyle?: string
	blurEffect?: string
	list: TabbarItem[]
	fontSize?: string
	iconWith?: string
	spacing?: string
	height?: string
	midButton?: TabbarMidButton
	iconfontSrc?: string
	backgroundImage?: string
	backgroundRepeat?: string
	redDotColor?: string
}
```

### MatchMedia
屏幕宽度条件配置
```ts
export type MatchMedia = {
	minWidth?: number
}
```

### CommonWindow
通用窗口配置
```ts
export type CommonWindow = {
	path?: string
	style?: UTSJSONObject
	matchMedia?: MatchMedia
}
```

### ConditionItem
条件配置项
```ts
export type ConditionItem = {
	name: string
	path: string
	query?: string
}
```

### Condition
条件配置
```ts
export type Condition = {
	current: number
	list: ConditionItem[]
}
```

### Easycom
easycom 配置
```ts
export type Easycom = {
	autoscan?: boolean
	custom?: UTSJSONObject
}
```

### UniIdRouter
uniIdRouter 配置
```ts
export type UniIdRouter = {
	loginPage?: string
	resToLogin?: boolean
	needLogin?: string[]
}
```

### PageItem
页面配置项
```ts
export type PageItem = {
	path: PagePath
	name?: string
	needLogin?: boolean
	meta?: UTSJSONObject
	query?: UTSJSONObject
	data?: UTSJSONObject
	style?: UTSJSONObject
};
```

## 映射变量
### pages
页面配置，类型为 `PageItem[]`，示例如下：
```ts
export const pages: PageItem[] = [
	{
		path: '/pages/index/index',
		name: 'PagesIndexIndex',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"uni-app x"}
	},
	{
		path: '/pages/p1/p1',
		name: 'PagesP1P1',
		needLogin: false,
		meta: {"a":2},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}
	},
	{
		path: '/pages/p2/p2',
		name: 'p2',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"","enablePullDownRefresh":false}
	},
	{
		path: '/pages/demo/pageCompInterceptor/pageCompInterceptor',
		name: 'PagesDemoPageCompInterceptorPageCompInterceptor',
		needLogin: false,
		meta: {},
		query: {"a":1},
		data: {},
		style: {"navigationBarTitleText":"","navigationStyle":"custom"}
	},
	{
		path: '/pages/p1/login',
		name: 'PagesP1Login',
		needLogin: false,
		meta: {},
		query: {},
		data: {"b":2},
		style: {"navigationBarTitleText":""}
	},
	{
		path: '/pages/demo/tabbarInterceptor/tabbarInterceptor',
		name: 'PagesDemoTabbarInterceptorTabbarInterceptor',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}
	},
	{
		path: '/pages/demo/tabbarInterceptor/login',
		name: 'PagesDemoTabbarInterceptorLogin',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":""}
	},
	{
		path: '/pages/demo/indexInterceptor/indexInterceptor',
		name: 'PagesDemoIndexInterceptorIndexInterceptor',
		needLogin: true,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}
	},
	{
		path: '/pages/demo/indexInterceptor/login',
		name: 'PagesDemoIndexInterceptorLogin',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"","enablePullDownRefresh":false}
	},
	{
		path: '/pages/demo/routeInfo/routeInfo',
		name: 'PagesDemoRouteInfoRouteInfo',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"查看路由信息示例","enablePullDownRefresh":false,"navigationStyle":"custom"}
	},
	{
		path: '/pages/p2/login',
		name: 'PagesP2Login',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":""}
	},
	{
		path: '/pages/test1/test1',
		name: 'PagesTest1Test1',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":""}
	},
	{
		path: '/pages/test2/test2',
		name: 'PagesTest2Test2',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":""}
	},
	{
		path: '/pages/profile/profile',
		name: 'PagesProfileProfile',
		needLogin: false,
		meta: {},
		query: {},
		data: {},
		style: {"navigationBarTitleText":"我的"}
	},
];
```

### globalStyle
全局样式配置，类型为 `GlobalStyle`，示例如下：
```ts
export const globalStyle = {
	navigationBarBackgroundColor: '#F8F8F8',
	navigationBarTextStyle: 'black',
	backgroundColor: '#F8F8F8',
} as GlobalStyle
```

### hasTabBar
是否有标签栏，类型为 `boolean`，示例如下：
```ts
export const hasTabBar = true
```

### tabBar
标签栏配置，类型为 `Tabbar`，示例如下：
```ts
export const tabBar = {
	list: [
		{
			pagePath: 'pages/index/index',
			text: '首页',
		},
		{
			pagePath: 'pages/profile/profile',
			text: '我的',
		},
	] as TabbarItem[],
	fontSize: '20px',
	height: '100px',
} as Tabbar
```

### hasTopWindow
是否有顶层窗口，类型为 `boolean`，示例如下：
```ts
export const hasTopWindow = true
```

### topWindow
顶层窗口配置，类型为 `CommonWindow`，示例如下：
```ts
export const topWindow = {
	path: '/pages/index/index',
	style: {
		navigationBarTitleText: '顶层窗口',
	},
} as CommonWindow
```

### hasLeftWindow
是否有左侧窗口，类型为 `boolean`，示例如下：
```ts
export const hasLeftWindow = true
```

### leftWindow
左侧窗口配置，类型为 `CommonWindow`，示例如下：
```ts
export const leftWindow = {
	path: '/pages/test1/test1',
	style: {
		navigationBarTitleText: '左侧窗口',
	},
} as CommonWindow
```

### hasRightWindow
是否有右侧窗口，类型为 `boolean`，示例如下：
```ts
export const hasRightWindow = true
```


### rightWindow
右侧窗口配置，类型为 `CommonWindow`，示例如下：
```ts
export const rightWindow = {
	path: '/pages/test2/test2',
	style: {
		navigationBarTitleText: '右侧窗口',
	},
} as CommonWindow
```


### condition
条件配置，类型为 `Condition`，示例如下：
```ts
export const condition = {
	current: 0,
	list: [
		{
			name: '登录状态',
			path: '/pages/index/index',
		},
		{
			name: '未登录状态',
			path: '/pages/p1/p1',
		},
	] as ConditionItem[],
} as Condition
```


### easycom
easycom 配置，类型为 `Easycom`，示例如下：
```ts
export const easycom = {
	autoscan: true,
	custom: {
		'uni-badge': '/components/uni-badge',
		'uni-badge-group': '/components/uni-badge-group/uni-badge-group',
		'uni-popup': '/components/uni-popup/uni-popup',
		'uni-popup-group': '/components/uni-popup-group/uni-popup-group',
		'uni-transition': '/components/uni-transition/uni-transition',
		'uni-icons': '/components/uni-icons/uni-icons',
		'uni-steps': '/components/uni-steps/uni-steps',
		'uni-rate': '/components/uni-rate/uni-rate',
		'uni-swipe-action': '/components/uni-swipe-action/uni-swipe-action',
		'uni-data-picker': '/components/uni-data-picker/uni-data-picker',
		'uni-data-picker-view': '/components/uni-data-picker-view/uni-data-picker-view',
		'uni-datetime-picker': '/components/uni-datetime-picker/uni-datetime-picker',
		'uni-calendar': '/components/uni-calendar/uni-calendar',
		'uni-countdown': '/components/uni-countdown/uni-countdown',
		'uni-divider': '/components/uni-divider/uni-divider',
		'uni-notice-bar': '/components/uni-notice-bar/uni-notice-bar'
	}
} as Easycom
```

### uniIdRouter
uniIdRouter 配置，类型为 `UniIdRouter`，示例如下：
```ts
export const uniIdRouter = {
	loginPage: '/pages/p1/login',
	resToLogin: true,
	needLogin: ['/pages/p1/p1', '/pages/p2/p2'],
} as UniIdRouter
```

