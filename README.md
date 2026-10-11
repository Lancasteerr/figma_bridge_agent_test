# Easy Community · Figma to Code

<p align="center">
  <strong>中文</strong> · <a href="./README.en-US.md">English</a>
</p>

这是一个基于 [figma_bridge_agent](https://github.com/Lancasteerr/figma_bridge_agent) 完成的设计稿到前端代码生成案例展示仓库。项目以 **Easy Community** 社区首页为目标，通过 Coding Agent 读取和理解 Figma 设计上下文，并使用 React、TypeScript 与 Vite 完成桌面端页面还原。

本仓库重点展示设计稿落地后的视觉结果、组件拆分和轻量交互，不包含后端服务。

## 设计还原效果

以下为 1440px Figma 原稿与前端实现的对比：

<table>
  <thead>
    <tr>
      <th width="50%">Figma 设计稿</th>
      <th width="50%">前端实现</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="./docs/images/figma-design.png" alt="Easy Community 的 Figma 设计稿" /></td>
      <td><img src="./docs/images/implementation-1440.png" alt="Easy Community 的 1440px 前端实现" /></td>
    </tr>
  </tbody>
</table>

<details>
  <summary>查看增强差异图</summary>
  <br />
  <p>差异图会增强两张图片之间的像素偏差：较亮的轮廓代表仍可观察到的视觉差异，较暗区域代表还原结果更接近设计稿。</p>
  <img src="./docs/images/visual-diff-enhanced.png" alt="Figma 设计稿与前端实现的增强差异图" />
</details>

## 功能亮点

- 还原顶部导航、搜索区域、侧栏、发布面板和文章内容流等桌面端布局。
- 将文章卡片、侧栏导航、站点顶栏和发布面板拆分为可复用组件。
- 支持推荐、热门与关注导航项的本地选中状态切换。
- 支持搜索框输入、文章关注状态切换以及点赞状态和计数更新。
- 使用本地图片、SVG 图标与 Noto Sans SC 字体资源呈现设计视觉。
- 为主要交互元素补充语义化标签和键盘焦点状态，并使用组件测试覆盖关键交互。

## 技术栈

| 类别 | 技术 |
| --- | --- |
| UI | React 19 |
| 开发语言 | TypeScript 6 |
| 构建工具 | Vite 8 |
| 样式 | CSS |
| 字体 | Noto Sans SC |
| 测试 | Vitest、Testing Library、jsdom |

## 快速开始

### 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`
- npm

### 安装与运行

```bash
npm install
npm run dev
```

开发服务器默认运行在 [http://127.0.0.1:5173](http://127.0.0.1:5173)。

## 可用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 执行 TypeScript 检查并生成生产构建 |
| `npm run lint` | 检查代码规范 |
| `npm run test` | 运行全部组件测试 |
| `npm run test:watch` | 以监听模式运行测试 |

## 项目结构

```text
.
├── docs/images/          # README 使用的设计与实现截图
├── src/
│   ├── assets/           # 页面图片、图标和视觉资源
│   ├── components/       # 可复用的页面组件
│   ├── data/             # 社区文章演示数据
│   ├── styles/           # 全局页面样式
│   ├── test/             # 测试环境配置
│   ├── types/            # TypeScript 类型定义
│   ├── App.test.tsx      # 页面渲染与交互测试
│   └── App.tsx           # 页面组合入口
├── package.json
└── vite.config.ts
```

## 项目范围

- 本项目是设计还原与前端交互演示，不提供后端接口、账号系统或数据持久化。
- 搜索输入、导航选中、关注和点赞状态仅保存在当前浏览器会话中，刷新页面后会恢复初始状态。
- 页面按照 Figma 的 1440px 桌面画布实现，并设置了 1440px 最小宽度；小尺寸视口会保留桌面布局，而不是切换为移动端版式。
- `figma_bridge_agent` 用于协助 Coding Agent 安全读取、检查和导出 Figma 设计上下文；本仓库保存的是该工作流产出的前端案例。
