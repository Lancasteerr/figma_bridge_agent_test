# Easy Community · Figma to Code

<p align="center">
  <strong>中文</strong> · <a href="./README.en-US.md">English</a>
</p>

这是一个使用 [figma-local-agent](plugin://figma-local-agent@figma-bridge-marketplace) 完成的 Figma 设计稿到前端代码实践项目。Coding Agent 读取当前 Figma 页面中选中的设计范围，并使用 React、TypeScript 与 Vite 完成 **Easy Community** 桌面端社区首页还原。

本仓库重点展示设计稿落地后的视觉效果、可复用组件结构与轻量前端交互，不包含后端服务。

## 使用提示词

本项目使用的原始提示词如下：

> 使用React ”像素级“复刻现在figma设计稿所选的页面 [@figma-local-agent](plugin://figma-local-agent@figma-bridge-marketplace) 遇到交互问题（滚动，点击，选中变化等）和我确认实现

> [!IMPORTANT]
> 使用本地 Figma Bridge 读取设计稿时，需要让 **Figma Desktop 保持在前台运行**，避免应用休眠导致设计上下文读取失败或中断。

Figma 设计上下文能够确定当前画面的布局、样式、文字、素材与可见状态，但不能单独定义运行时交互。遇到滚动方式、点击结果、选中状态变化等交互问题时，应先与用户确认预期行为，再进行实现。

## 设计还原效果

以下为 1440px Figma 设计稿与当前前端实现的对比：

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

## 功能亮点

- 还原顶部导航、搜索区域、侧栏、发布面板和文章内容流等桌面端布局。
- 将文章卡片、侧栏导航、站点顶栏和发布面板拆分为可复用组件。
- 支持推荐、热门与关注导航项的本地选中状态切换。
- 支持搜索框输入、文章关注状态切换，以及点赞状态和计数更新。
- 使用本地图片与 SVG 图标呈现设计视觉，无需远程素材服务。
- 为主要交互元素提供语义化标签和键盘焦点状态，并使用组件测试覆盖关键交互。

## 技术栈

| 类别 | 技术 |
| --- | --- |
| UI | React 19.3 |
| 开发语言 | TypeScript 7 |
| 构建工具 | Vite 8.3 |
| 样式 | CSS Modules、CSS |
| 测试 | Vitest 5、Testing Library、jsdom |

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
| `npm run test` | 运行全部组件测试 |
| `npm run test:watch` | 以监听模式运行组件测试 |
| `npm run preview` | 本地预览生产构建 |

## 项目结构

```text
.
├── docs/images/          # README 使用的设计稿与实现截图
├── src/
│   ├── assets/figma/     # 从设计上下文整理的页面图片与图标
│   ├── components/       # 可复用的页面组件及其样式
│   ├── data/             # 社区文章演示数据
│   ├── test/             # 测试环境配置
│   ├── types/            # TypeScript 类型定义
│   ├── App.test.tsx      # 页面渲染与交互测试
│   ├── App.module.css    # 页面整体布局样式
│   └── App.tsx           # 页面组合入口
├── package.json
└── vite.config.ts
```

## 项目范围

- 本项目是设计还原与前端交互演示，不提供后端接口、账号系统或数据持久化。
- 搜索输入、导航选中、关注和点赞状态仅保存在当前页面内存中，刷新后会恢复初始状态。
- 页面按照 Figma 的 1440px 桌面画布实现，并设置 1440px 最小宽度；较小视口会保留桌面布局，不切换为移动端版式。
- Figma 只提供静态视觉依据；滚动、点击、选中变化等运行时行为以与用户确认后的实现为准。

