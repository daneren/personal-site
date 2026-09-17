# Motion Spec v2 · 页面转场 + 轻章节叙事

日期：2026-09-17  
负责：动效设计师  
参考：emilkowal.ski · linear.app · rauno.me  
对齐：暗色编辑站 Brief ≤200ms；无 Lenis / GSAP / 视差秀场  
落点：`BaseLayout.astro`（ClientRouter）· `src/styles/global.css`

## 1. 方向裁定

老板要「页面转场 + 滚动叙事」。在 Brief 红线内取克制解：

| 要 | 做法 |
|---|---|
| 页面转场 | Astro `ClientRouter` + root **交叉淡入** 180ms |
| 滚动叙事 | 章节 **opacity 淡入**（IntersectionObserver），无位移/视差 |
| 顶栏 | `transition:persist`，换页不闪 |

| 不要 | 原因 |
|---|---|
| 路由滑动 / wipe / morph 大秀 | 模板感、抢内容 |
| Lenis + ScrollTrigger 长叙事 | 超 Brief、工程重 |
| Hero stagger / 句点脉冲 | 已过视觉验收，不加第二层骚动 |

## 2. Token

| Token | 值 | 用途 |
|---|---|---|
| `--motion-fast` | `120ms` | 链接 / nav |
| `--motion` | `150ms` | 按钮 / 卡片 |
| `--motion-enter` | `180ms` | 章节淡入 |
| `--motion-page` | `180ms` | View Transition root |
| `--ease` | `ease` | 统一缓动 |

## 3. 规格表

| 对象 | 触发 | 属性 | 时长 | 备注 |
|---|---|---|---|---|
| 文档 root VT | 同站导航 | opacity crossfade | 180ms | 无共享元素 morph |
| `header` | 换页 | persist | — | 不参与淡出 |
| `.section-reveal` | 进入视口 | opacity 0→1 | 180ms | 一次触发；无 translate |
| 既有 hover | 指针 | color / border / bg | ≤150ms | 维持 v1 |

## 4. 无障碍

`prefers-reduced-motion: reduce`：

- 关闭一切 transition / animation
- 关闭 `::view-transition-*` 动画
- `.section-reveal` 直接 `opacity: 1`

## 5. 验收

1. 本机 `4321`：首页 → 简历 → Blog，页间淡入不硬切、顶栏稳定  
2. 长页滚动：章节淡入可感知、无跳动、无视差  
3. 系统「减少动态效果」开：无转场、无淡入  
4. 观感仍像编辑站，不像 Awwwards 作品集

## 6. 相对 v1

v1 禁止路由 View Transitions。v2 **有条件放开**：仅 root fade ≤180ms，仍禁止滑动/叙事长动画。

## 7. v3 锁（hero-split）

对齐 `VISUAL_DIRECTION_v3.md`：动效仍 ≤180ms，**仅分栏进入淡入**。

| 对象 | 触发 | 属性 | 时长 | 备注 |
|---|---|---|---|---|
| `.hero-split` | 首页首次进入 | opacity 0→1 | 180ms | CSS `hero-split-enter`；statement/rail **同拍、无 stagger** |
| `.hero-rail` | — | — | — | **无独立动画** |
| 滚动章节 reveal | — | — | — | **v3 关闭**（无 scroll story） |
| 页间 VT | 同站导航 | root crossfade | 180ms | 维持；顶栏 persist |

减动：`prefers-reduced-motion` 下 `.hero-split` 动画关闭。

裁定：**按此锁。** 本机强刷 `4321` 先验首页分栏淡入即可。
