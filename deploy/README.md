# Deploy（占位）

本站为 Astro SSG，构建后只需托管 `dist/` 静态文件。服务器就绪后再补全下列配置。

## Nginx（占位）

```nginx
# TODO: 等服务器再填
# server {
#   listen 80;
#   server_name example.com;
#   root /var/www/personal-site/dist;
#   index index.html;
#   location / {
#     try_files $uri $uri/ $uri.html =404;
#   }
# }
```

## Docker（占位）

```dockerfile
# TODO: 等服务器再填
# FROM nginx:alpine
# COPY dist/ /usr/share/nginx/html
# EXPOSE 80
```

## 检查清单

- [ ] 域名 / TLS
- [ ] CI：`npm ci && npm run build` 后上传 `dist/`
- [ ] 反向代理与缓存策略
