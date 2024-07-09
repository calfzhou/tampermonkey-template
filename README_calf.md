# 油猴脚本开发模板

> 以斗鱼直播自动切换清晰度作为示例。
> forked from <https://github.com/Eished/tampermonkey-template>
> 配置了 React、Tailwind CSS 等。

使用此模板 [创建油猴脚本项目](https://github.com/calfzhou/tampermonkey-template/generate)。

## Development

```bash
yarn install
yarn run development
```

## Build

```bash
yarn run build
```

## GitHub Deployment

[./.github/workflows/webpack.yml](./.github/workflows/webpack.yml) 中预设了 GitHub 上自动构建和部署的流程。

默认会把 dist 目录的内容部署到 GitHub Pages。

> 注意：首次创建项目仓库后，需要进入 代码仓库首页 -> Settings -> Pages，在 Build and deployment -> Source 中选 GitHub Actions。

假设项目的代码仓库是 `calfzhou/expert-funicular`，那么获取构建结果的地址为：<https://calfzhou.github.io/expert-funicular/douyu.user.js>
