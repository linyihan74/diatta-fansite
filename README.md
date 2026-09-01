# Krépin Diatta 球迷网站 / Fan Site

一个关于塞内加尔球员 **克雷平·迪亚塔（Krépin Diatta）** 的中英法三语粉丝资料网站。
An unofficial trilingual (中文 / English / Français) fan site for Senegalese footballer **Krépin Diatta**.
Un site de supporters non officiel en trois langues consacré au footballeur sénégalais **Krépin Diatta**.

## 特性 / Features

- 中文 / English / Français 三语下拉切换，支持 `?lang=zh|en|fr`，选择保存在浏览器中
- 9 个页面：首页、国家队、生平、俱乐部、数据、荣誉、图库、新闻、关于 / 9 pages: Home, National, Bio, Career, Stats, Honours, Gallery, News, About
- 复古球衣视觉风格（塞内加尔绿/黄/红 + 摩纳哥红白 + 泛黄纸张质感）/ Retro jersey visual style
- 重点图片保存在本地，图库保留 Wikimedia Commons 作者、许可证与来源链接；加载失败自动显示球衣占位图
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
news.html       # 新闻与慈善 News & Charity
about.html      # 关于 About
css/style.css   # 主题样式 Theme
js/i18n.js      # 双语词典与切换 Bilingual dictionary & toggle
js/main.js      # 导航、灯箱、图片回退 Nav, lightbox, image fallback
assets/images/  # 本地图片资源 Local image assets
favicon.svg     # 站点图标 Site icon
```

## 数据说明 / Data note

资料统一核验至 **2026 年 9 月 1 日**，优先采用 AS Monaco、CAF、FIFA 和塞内加尔足协等官方来源。AS Monaco 2026 年 6 月 30 日公告所载官方总计为 143 场、8 球、7 次助攻。
Information was reviewed through **1 September 2026**, prioritising official club and competition sources. Statistics with differing scopes remain labelled as approximate.

Wikimedia Commons 图片保留作者与许可证。来自球员官方 Instagram `@krepindiatta` 的图片只在获得可长期保存的原始文件后加入，注明球员许可和原帖链接；网站不热链 Instagram 文件，且球员许可不自动取代第三方摄影师可能拥有的版权。

## 免责声明 / Disclaimer

本站为非官方球迷网站，与球员本人及其所属俱乐部无关。图片版权归原作者所有（详见图库页署名）。
This is an unofficial fan site, not affiliated with the player or his clubs. Image copyrights belong to their respective owners (see credits on the Gallery page).
