# Tech stack

- **Astro 5** static (`output: 'static'`) — SSG，日后迁服务器只换 `SITE_URL` + 上传 `dist/`
- **Markdown content collections** — Blog + Resume，无 CMS
- **设计 token** — 对齐 `docs/design/VISUAL_BASELINE.md`（纸色底 / 石色字 / 青绿强调 / 打印藏导航）

不引入本机绝对路径进构建；PDF 源放仓库相对路径 `content/source/`。
