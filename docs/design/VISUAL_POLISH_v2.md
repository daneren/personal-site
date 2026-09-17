# Visual Polish v2 · 加码（设计总监拍板）

日期：2026-09-17  
活站：http://127.0.0.1:4321  
前提：深色编辑风 **方向不变**（见 `DESIGN_BRIEF_v1.md`）。本轮只加精致度，不换皮、不加光效。

## 裁定

老板要「明显更高级」。手段是 **字距 / 层级 / 留白 / 边线克制**，不是再堆 glow、渐变、插画。浅色脚手架不回退；打印白底保留。

## 本轮必改（工程师可直接落 CSS）

### 1. 去阴影、收边（全局）

- `.card` / `.resume`：`box-shadow: none`；边框用 `--border`，hover 仅抬 `--border-strong` + 极轻 `surface-hover`
- 禁止再加大投影「冲高级感」

### 2. 字阶（首页 + 简历）

| 元素 | 规格 |
|---|---|
| Hero H1 | `clamp(2.1rem, 5vw, 3.25rem)`；`letter-spacing: -0.035em`；`line-height: 1.08` |
| Hero lead | `1.05rem` / `--text-muted`；max-width `34rem` |
| 能力词 | 保持 · 分隔文本，字号 `0.88rem`，色 `--text-faint` |
| 简历 h2 | 保持 uppercase tracking；与正文间距 `2rem` 起 |
| 简历 h3 | `1.05rem`；公司块之间 `1.75rem` 上边距 |
| 简历 li | `--text`；`line-height: 1.65` |

中文标题继续走 `--font`（Sans）；`--font-display` **仅** logo。

### 3. 间距节奏

- `.site-main` 顶 padding：桌面 `56px`，小屏 `36px`
- `.hero` gap：`1.25rem`；CTA 距能力词 `1.25rem`
- 内容栏：简历 / prose 仍 `720–760px`，左右页边 `24px`（小屏 `16px`）

### 4. 按钮与导航（已大部分对齐，扫尾）

- 主按钮：实心 `--accent`，圆角 `--radius-sm`，无 shadow / 无 gradient
- 次按钮：透明底 + `--border-strong`
- 导航：文字链 + 当前态 2px accent 底边；小屏勿换行挤压（可减 horizontal padding）

### 5. 移动

- `640px` 以下：H1 clamp 下限 `2.1rem`；`.resume` 左右 padding `1rem`
- 长 token：`overflow-wrap: anywhere`（简历已有则保持）

### 6. 明确不做

双径向光、渐变 CTA、pill 标签墙、封面大图、第二品牌装饰、>200ms 动效、暗亮切换。

## 验收（强刷即判）

1. 首页不像模板站：无舞台光、无渐变钮、能力词非 chip 墙  
2. 简历屏上正文清晰可扫；打印白底无 nav  
3. 卡片/简历容器无重阴影  
4. 中文标题无衬线跳变  

## 分工

| 角色 | 动作 |
|---|---|
| @程序员 | 按上表改 `src/styles/global.css`（+ 必要 layout），本机强刷 |
| @设计师 | 对照活站点名 residual；有冲突以本文件为准 |
| @产品经理 | 内容门禁（YouTu2.0 时间线）继续盯，不挡本轮 CSS |
| @测试 | 路由/build/打印/未知 slug；外加移动 375 宽扫一眼 |

**过稿人：设计总监。** 改完 @我 强刷验收。
