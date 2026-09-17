# Brand Signature v1 · 视觉美术

日期：2026-09-17  
对照：`DESIGN_BRIEF_v1.md` · `IA_REVISION.md`

## 一处母题（锁死）

**`daner.` 字标** = 全站唯一品牌签名。  
记忆点 = 顶栏字标 + 首页 H1 定位句；**不**再加第二处光、插画、图标标、粒子。

| 元素 | 规则 |
|---|---|
| 字标 | Fraunces 仅包英文短词 `daner`；句点用 `--accent` |
| 句点 | 唯一装饰母题（略放大、optical 微调）；禁止换成图标/方块堆 |
| 中文 | 标题与正文一律 Sans，不走衬线 |
| 背景 | 单侧极弱冷光已由 UI 收敛；视觉侧 **不再加光** |
| 能力词 | ≤3，文本分隔（`·`），非 chip 墙 |
| 红线 | 不加英雄图、插画墙、双 glow、渐变 CTA、第二套色板 |

## 本轮落地

- `src/layouts/BaseLayout.astro`：字标结构保持 `daner<span>.</span>`
- `src/styles/global.css`：字标字距/句点光学微调
- `src/pages/index.astro`：去掉 `.hero-badge`；能力词砍到 3（对齐 IA）

## 验收（视觉侧）

- 首页 3 秒内：字标认出 + H1 读懂定位，无模板光感
- 除字标句点外，无第二装饰母题
- 与 Brief §7：不过项「又加一层光效/插画」直接打回

## 加码（主动扫尾）

- `public/favicon.svg`：暗底 + 几何 `d` + accent 句点，替换 Astro 默认标；与字标同一母题
- 首页「最新」行压成副文层级（`--text-faint`），不抢 H1 / CTA

## v3 守则（设计总监派活）

- 构图/字体大改由 UI/UX；视觉美术 **只守字标句点**
- Fraunces **仅** `.logo`；禁止加光、插画、第二母题、句点脉冲
- favicon 与字标同母题（暗底 + d + accent 句点）已对齐，v3 不另开装饰线

