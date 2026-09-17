# Visual Direction v3 · 可感知改版

日期：2026-09-17  
负责：设计总监  
活站：http://127.0.0.1:4321  
前提：暗色编辑方向保留；**停掉 4px polish**。本轮要外行并排截图也能看出跃迁。

## 0. 为什么 v2 不够「好看」

v2 是减法（去影、收光、改字号）。活站仍是 **单栏堆叠的编辑器皮肤**：顶栏 + 一块 Hero 竖排 + 按钮。缺构图记忆点，所以不像个人品牌页。

## 1. 本轮择重（只做深这一刀）

**构图主刀 + 简历版式辅刀。字体换皮服从构图，不单独炫字体。**

一句话：  
**首页改成「左宣言 / 右身份轨」的非对称编辑构图；简历改成「左时间轨 / 右内容」的高密度纸面。**

气质：systems editorial · quiet brand · print-ready  
反面：SaaS landing · AI glow portfolio · 居中大标题模板

## 2. 首页构图（必须改 HTML 结构）

### 桌面 ≥900px

```
┌─────────────────────────────────────────────┐
│ daner.          首页  简历  Blog              │
├──────────────────────────┬──────────────────┤
│                          │  daner            │
│  把复杂训推系统           │  ML Infra / RL    │
│  跑稳、跑快。             │  · Training Infra │
│                          │  · Inference      │
│                          │  · Agentic RL     │
│                          │                   │
│                          │  [查看简历]       │
│                          │  [阅读 Blog]      │
│                          │  最新 · 一文链    │
└──────────────────────────┴──────────────────┘
```

- 左栏：仅 H1（可两行），`clamp(2.75rem, 6vw, 4.25rem)`，字重 600，字距 `-0.04em`，行高 `1.05`；**不要**再在左栏塞 lead/tags/CTA  
- 右栏：宽 `min(20rem, 34%)`，顶对齐；身份一行 + 短 lead（≤2 句）+ 能力词竖排或 `·` 串 + CTA 竖叠；与左栏用 `1px` 竖分割线（`--border`），**不要**卡片底  
- 垂直：主区 `min-height: calc(100vh - 64px)`，内容垂直居中偏上（padding-top ≈ 12vh），像杂志扉页不是后台 dashboard

### 小屏 <900px

恢复单栏：H1 → lead → 能力词 → CTA → 最新；但 H1 仍用新字阶，能力词保持文本不是 chip。

### 验收（3 秒）

打开 `/`：一眼是「有名字的人的站」，不是文档站皮肤。左右分栏是记忆点。

## 3. 字体体系（为构图服务，一次换齐）

| 角色 | v3 | 说明 |
|---|---|---|
| UI / 中文 / 正文 | `IBM Plex Sans` + PingFang SC / Noto Sans SC | 工程师可信感，去 Sora 模板味 |
| Logo 英文 | 可留 Fraunces **仅** `daner.` | 唯一装饰字体；中文标题禁止衬线 |
| 代码 | `IBM Plex Mono` | 不变 |

Google Fonts 只拉：`IBM+Plex+Sans:wght@400;500;600;700` + `IBM+Plex+Mono` +（可选）`Fraunces` 仅 logo。

## 4. 简历版式（可感知第二刀）

### 屏上

- 顶栏头：左 **姓名+一句话角色**，右 **邮箱 / 电话**（右对齐）；底部分割线  
- 经历：每段左侧或行首挂 **年份轨**（如 `2025` / `2024`，`text-faint`，等宽/小号）；右侧公司 h3 → 项目 h4 → bullets  
- 去掉「大卡片悬浮」感：简历容器可保留轻边，但 **全宽内容栏拉到 ~800px**，内边距加大到 `2.5rem`，块间更疏、bullet 更紧（密而不挤）  
- 技能：两列文本（屏 ≥640），不是 tag 墙

### 打印

- 白底、藏 chrome（已有）  
- 年份轨改黑灰，不出现暗色底  
- 单栏，避免右栏联系掉出页

## 5. 明确不做（防跑偏）

- 不回浅色默认皮；不加双光晕/渐变钮/插画/Lottie  
- 不做作品集瀑布流、大图 Hero  
- 动效仍 ≤180ms，仅分栏进入淡入；不要 stagger 炫技  
- 不借「好看」改内容口径

## 6. 前后对比要点（给老板截图用）

| | v2（现在） | v3（目标） |
|---|---|---|
| 首页 | 单栏竖堆，像编辑器欢迎页 | 左大宣言 / 右身份轨，像个人品牌扉页 |
| 字体 | Sora 通用感 | Plex 体系，更「系统工程师」 |
| 简历 | 一坨卡片里顺排 | 头部分栏 + 年份轨，密度高级 |
| 外行一眼 | 「换了皮肤的文档站」 | 「这个人的站」 |

## 7. 分工与顺序

| 谁 | 做什么 | 产出 |
|---|---|---|
| @设计师 | 按 §2 改 `index` 结构线框（桌面/手机各一帧，可写在本文件附录或短注） | 今天内 |
| @程序员 | ① layout 字体换成 Plex；② 首页双栏 HTML+CSS；③ 简历头部分栏+年份轨 class | 本机强刷 |
| 设计总监 | 活站过稿：3 秒测试 + 与 v2 截图对比 | 工程交后 |
| @测试负责人 | 路由/打印/375 宽；不管美丑门禁 | 过稿后 |
| 产品 | 时间线内容门禁并行，不挡 v3 | — |

**落地顺序：** 字体换齐 → 首页双栏结构 → 简历头/年份轨 → 动效扫尾。  
**规范未按本文件改的微调，打回。**

## 8. 工程接口（最小 class）

```html
<section class="hero-split">
  <div class="hero-statement"><h1>…</h1></div>
  <aside class="hero-rail">…</aside>
</section>
```

```css
.hero-split { display:grid; grid-template-columns: 1fr minmax(16rem,20rem); gap: 3rem; align-items:center; min-height: calc(100vh - 8rem); }
.hero-rail { border-left: 1px solid var(--border); padding-left: 2rem; }
@media (max-width: 899px) { .hero-split { grid-template-columns: 1fr; min-height: auto; } .hero-rail { border-left: 0; padding-left: 0; border-top: 1px solid var(--border); padding-top: 1.5rem; } }
```

简历：

```html
<header class="resume-head">…</header>
<article class="job"><div class="job-year">2025</div><div class="job-body">…</div></article>
```

过稿人：设计总监。

## 9. 设计组派工（本群）

| 角色 | 今日动作 | 完成标准 |
|---|---|---|
| **UX** | 确认首页双栏信息层级（左仅 H1；右：名/角色/lead≤2句/3能力/主次 CTA/最新一文）；简历头部分栏 + 经历年份轨扫读路径 | 在本文件或短注回一句「层级无异议」；有异议只改结构不改气质 |
| **UI** | 出 v3 token 增量：Plex 字族、hero-split 栅格、rail 分割线、简历 head/job-year 规格（可直接改注释进 `global.css` 草案） | 桌面≥900 双栏、≤899 单栏堆叠可开发 |
| **视觉** | 品牌只守 logo 句点；**禁止**为「好看」加第二道光/插画/材质底 | 交一页「不做清单」勾过即过 |
| **动效** | 仅：分栏首次进入 150–180ms fade；rail 无独立动画；无 scroll story | 更新 `MOTION_SPEC` 一小节或回复「按此锁」 |

过稿门禁（设计总监）：并排想象 v2 单栏 vs v3 双栏，外行能说出差别；简历年份轨可见；无回潮光效。达标后我交工程/`@主管`，过程不烦老板。
