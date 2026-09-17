# UI Spec v3 · hero-split + 简历 head/year

日期：2026-09-17  
负责：UI设计师  
对照：`VISUAL_DIRECTION_v3.md`  
落点：`src/styles/global.css`（本轮已草案落地）；结构已在 `index.astro` / `resume.astro`

## 1. Token 增量

| Token | v3 | 备注 |
|---|---|---|
| `--font` | `"IBM Plex Sans", "PingFang SC", "Noto Sans SC", …` | 换掉 Sora |
| `--font-display` | `"Fraunces", …` | **仅** `.logo` |
| `--font-mono` | IBM Plex Mono | 不变；年份轨可用 |
| `--resume-max` | `800px` | 原 760 → 800 |
| 断点 | `900px` | 首页双栏 / 单栏切换 |

Fonts 已在 `BaseLayout` 拉取 Plex Sans/Mono + Fraunces。

## 2. `.hero-split`（≥900px）

| 属性 | 值 |
|---|---|
| display | `grid` |
| columns | `1fr minmax(16rem, 20rem)` |
| gap | `3rem` |
| align-items | `center` |
| min-height | `calc(100vh - 64px - 56px)`（主区可视） |
| 垂直位置 | `.site-main` 首页可 `padding-top: 12vh`；内容偏上 |

### `.hero-statement h1`

- `clamp(2.75rem, 6vw, 4.25rem)` / weight 600 / lh 1.05 / tracking `-0.04em`
- 左栏**只放 H1**，无 lead/tags/CTA

### `.hero-rail`

- `border-left: 1px solid var(--border)`；`padding-left: 2rem`
- **无**卡片底/阴影
- 内序：`.hero-name` → `.hero-role` → `.hero-lead`（≤2 句）→ `.hero-skills`（`·` 串）→ `.hero-cta`（竖叠）→ `.hero-latest`

| 类 | 规格 |
|---|---|
| `.hero-name` | 1.15rem / 650 / `--text` |
| `.hero-role` | 0.92rem / `--accent` |
| `.hero-lead` | 0.95rem / `--text-muted` / max 28ch |
| `.hero-skills` | 0.88rem / `--text-faint` |
| `.hero-cta` | `flex-direction: column`; `align-items: stretch`; gap 0.6rem；按钮全宽 |

### &lt;900px

- 单栏；rail `border-left:0` → `border-top` + `padding-top: 1.5rem`
- `min-height: auto`；CTA 可改横排

## 3. 简历

### `.resume`

- `max-width: 800px`；padding `2.5rem`；轻边保留，无大阴影

### `.resume-head`

- grid：`1fr auto`；底 `1px` 分割；padding-bottom 1.25rem；margin-bottom 0.5rem
- 左：h1 + `.resume-tagline`（muted）
- 右：`.resume-head-contact` 右对齐，竖排邮箱/电话，`0.9rem`

### `.job`

- grid：`3.5rem 1fr`；gap 1rem；margin `1.35rem 0`
- `.job-year`：Plex Mono / 0.8rem / `--text-faint` / tracking 略开；顶对齐
- `.job-body h3`：紧接年份；`.job-meta` muted 小字；ul bullet 紧（`margin 0.2rem 0`），块间疏

### `.skills-grid`

- ≥640：`grid-template-columns: 1fr 1fr`（第三格可占满或三列视宽）；文本块，非 tag

### 打印

- `.job` 改单栏或保留年份黑灰 `#666`
- `.resume-head` 可叠成单栏，联系方式勿掉页

## 4. 验收（交设计总监）

1. `/` ≥900：左大宣言 / 右身份轨，竖分割线可见  
2. `/` &lt;900：单栏堆叠不坏  
3. `/resume`：头部分栏 + 年份轨可见；技能两列文本  
4. 字体：正文 Plex；仅 logo Fraunces  
5. 无回潮光效 / 渐变钮 / 第二装饰

过稿人：@设计总监。达标后再交工程/@主管。
