import{_ as a,c as i,o as s,a5 as e}from"./chunks/framework.fnDmWd_6.js";const g=JSON.parse('{"title":"UTS 类型：NavigationFailure","description":"","frontmatter":{},"headers":[],"relativePath":"api/interfaces/NavigationFailure.md","filePath":"api/interfaces/NavigationFailure.md"}'),t={name:"api/interfaces/NavigationFailure.md"},n=e(`<h1 id="uts-类型-navigationfailure" tabindex="-1">UTS 类型：NavigationFailure <a class="header-anchor" href="#uts-类型-navigationfailure" aria-label="Permalink to &quot;UTS 类型：NavigationFailure&quot;">​</a></h1><p>导航失败。详情可查阅<a href="/guide/advanced/navigation-failures.html">导航故障</a>。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="from" tabindex="-1">from <a class="header-anchor" href="#from" aria-label="Permalink to &quot;from&quot;">​</a></h3><ul><li><code>必选</code> from: <a href="./RouteLocationNormalizedLoaded.html"><code>RouteLocationNormalizedLoaded</code></a></li></ul><p>当前路由信息。</p><h3 id="to" tabindex="-1">to <a class="header-anchor" href="#to" aria-label="Permalink to &quot;to&quot;">​</a></h3><ul><li><code>必选</code> to: <a href="./RouteLocationNormalizedLoaded.html"><code>RouteLocationNormalizedLoaded</code></a></li></ul><p>即将前往的路由信息。</p><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><ul><li><code>必选</code> type: <a href="./NavigationFailureType.html"><code>NavigationFailureType</code></a></li></ul><p>导航失败类型。</p><h2 id="uts" tabindex="-1">UTS <a class="header-anchor" href="#uts" aria-label="Permalink to &quot;UTS&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 导航失败信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * + from 当前路由信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * + to 即将前往的路由信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * + type 导航失败类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NavigationFailure</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	from</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RouteLocationNormalizedLoaded</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	to</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RouteLocationNormalizedLoaded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NavigationFailureType</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,14),l=[n];function o(h,p,r,d,k,c){return s(),i("div",null,l)}const y=a(t,[["render",o]]);export{g as __pageData,y as default};
