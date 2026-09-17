# 个人网站 · 视觉基调（MVP）

日期：2026-09-17  
设计：设计师  
对照：`docs/SITE_MAP_MVP.md`  
原则：**简约、可读、简历可打印**；不做花哨动效/大图英雄区。

## 1. 色板

| Token | 值 | 用途 |
|---|---|---|
| `--bg` | `#FAFAF9` | 页面底（近纸色，打印友好） |
| `--surface` | `#FFFFFF` | 卡片/内容区 |
| `--text` | `#1C1917` | 主文字 |
| `--text-muted` | `#57534E` | 次要/日期/标签 |
| `--border` | `#E7E5E4` | 分割线、卡片描边 |
| `--accent` | `#0F766E` | 链接、导航当前态（青绿，屏上够对比） |
| `--accent-hover` | `#0D9488` | hover |

打印：强制黑字 `#000`、去背景色、隐藏导航/页脚链接装饰。

## 2. 字体

| 角色 | 栈 | 规格 |
|---|---|---|
| 正文 | `"IBM Plex Sans", "Source Han Sans SC", "Noto Sans SC", system-ui, sans-serif` | 16–17px / 1.65 |
| 标题 | 同上，稍重 | H1 28–32px；H2 20–22px；区块标题 14px uppercase tracking 可选 |
| 代码（Blog） | `"IBM Plex Mono", ui-monospace, monospace` | 14px |

中英混排：无衬线装饰体；避免纯英文站字体导致中文回落难看。

## 3. 版式

- **内容最大宽**：首页/Blog `720px`；简历 `800px`（信息密度略高）
- **页边距**：屏 `24–32px`；打印 `12–16mm`
- **节奏**：区块间距 `32–40px`；经历条目内 `8–12px`
- **导航**：顶栏单行，高度 ~56px；当前页 `accent` 下划线

## 4. 简历打印

```css
@media print {
  nav, .site-footer, .no-print { display: none !important; }
  body { background: #fff; color: #000; font-size: 11pt; }
  a { color: inherit; text-decoration: none; }
  .resume { max-width: none; }
}
```

目标：一屏结构清晰，打印约 1–2 页 A4，不截断关键联系信息。
