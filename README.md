# personal-site（daner · 简历 + Blog）

本机优先的静态站（Astro SSG）。内容：简历从 PDF 导入的 MD；Blog 用 `src/content/blog/*.md`。

## 命令

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # 输出 dist/（无写死本机绝对路径）
npm run preview      # 预览构建结果
npm run import:resume  # 从 content/source/*.pdf 抽文本（人工校对 MD）
npm run deploy:stub    # 部署占位，等服务器再填
```

可选环境变量：

- `SITE_URL` — 构建时站点 URL（默认 `http://localhost:4321`）
- `RESUME_PDF` — 导入用 PDF 路径（默认 `content/source/resume-202607.pdf`）

## 目录

| 路径 | 说明 |
|------|------|
| `src/pages/` | `/` · `/resume` · `/blog` · `/blog/[slug]` |
| `src/content/resume/` | 简历 MD（源：`content/source/resume-202607.pdf`） |
| `src/content/blog/` | 文章 MD |
| `docs/` | 站点地图 / 设计 |
| `scripts/deploy/stub.mjs` | 部署 stub |

## 约束

- 先本机可跑；不擅自对外发布
- 构建产物不依赖本机绝对路径
- 简历中文 PDF 抽取可能乱码：以 PDF 原文 + 已确认联系方式为准校对 `src/content/resume/main.md`
