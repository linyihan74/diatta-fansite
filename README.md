# Krépin Diatta 球迷网站 / Fan Site

一个关于塞内加尔球员 **克雷平·迪亚塔（Krépin Diatta）** 的中英双语粉丝资料网站。
An unofficial bilingual (中文 / English) fan site for Senegalese footballer **Krépin Diatta**.

## 特性 / Features

- 中英双语一键切换（默认中文，选择保存在浏览器中）/ Bilingual toggle (default Chinese, preference saved in browser)
- 8 个页面：首页、生平、俱乐部、国家队、数据、荣誉、图库、关于 / 8 pages: Home, Bio, Career, National, Stats, Honours, Gallery, About
- 复古球衣视觉风格（塞内加尔绿/黄/红 + 摩纳哥红白 + 泛黄纸张质感）/ Retro jersey visual style
- 图片引用 Wikimedia Commons 公开许可图片并署名，加载失败自动回退到 CSS 球衣占位图 / Images hotlinked from Wikimedia Commons with credits; graceful CSS-jersey fallback
- 无需构建工具，纯静态 / No build step, pure static HTML/CSS/JS

## 本地预览 / Local preview

**最快方式：直接双击 `index.html` 即可在浏览器中打开（无需任何服务器）。**

如果需要本地服务器（推荐，体验更完整）：

```bash
# Python
python -m http.server 8000
# 然后打开 http://localhost:8000

# Node
npx serve .
```

> 提示：页面通过 Google Fonts 异步加载装饰字体，网络被拦截或加载失败时**不会影响浏览**，会自动回退到系统字体；图库图片加载失败时也会自动显示球衣占位图。若个别环境仍出现异常，请先尝试更换浏览器或清理缓存。

## 部署到 GitHub Pages / Deploy to GitHub Pages

1. 将本目录推送到 GitHub 仓库
2. 仓库 Settings → Pages → Source 选择 `Deploy from a branch`
3. Branch 选择 `main`（或你的默认分支），目录选择 `/ (root)`
4. 保存后等待几分钟，即可通过 `https://<用户名>.github.io/<仓库名>/` 访问

> 本站所有链接均为相对路径，在子路径（如 `/<仓库名>/`）下也能正常工作。

## 文件结构 / File structure

```
index.html      # 首页 Home
bio.html        # 生平 Biography
career.html     # 俱乐部生涯 Club career
national.html   # 国家队 National team
stats.html      # 数据统计 Stats
honors.html     # 荣誉 Honours
gallery.html    # 图库 Gallery
about.html      # 关于 About
css/style.css   # 主题样式 Theme
js/i18n.js      # 双语词典与切换 Bilingual dictionary & toggle
js/main.js      # 导航、灯箱、图片回退 Nav, lightbox, image fallback
favicon.svg     # 站点图标 Site icon
```

## 数据说明 / Data note

数据截至 **2026 年 8 月**，整理自维基百科、Transfermarkt、FootyStats、WhoScored 等公开来源，仅用于球迷分享，不承诺实时更新。
Stats are as of **August 2026**, compiled from public sources (Wikipedia, Transfermarkt, FootyStats, WhoScored) for fan purposes only.

## 免责声明 / Disclaimer

本站为非官方球迷网站，与球员本人及其所属俱乐部无关。图片版权归原作者所有（详见图库页署名）。
This is an unofficial fan site, not affiliated with the player or his clubs. Image copyrights belong to their respective owners (see credits on the Gallery page).