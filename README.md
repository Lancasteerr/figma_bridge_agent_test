# Easy Community · Figma to Code

<p align="center">
  <strong>中文</strong> · <a href="./README.en-US.md">English</a>
</p>

这是一个使用 [figma-local-agent](plugin://figma-local-agent@figma-bridge-marketplace) 将 Figma 设计稿落地为 React 页面的实践项目。Agent 读取选中设计范围的结构、布局、样式、文字、素材与可见状态，使用 React、TypeScript 和 Vite 实现 **Easy Community** 桌面端社区首页。

项目侧重设计还原、可复用组件与轻量前端交互，不包含后端服务。

## 示例提示词

> 使用 React “像素级”复刻当前 Figma 设计稿中选中的页面，使用 [@figma-local-agent](plugin://figma-local-agent@figma-bridge-marketplace)。若滚动、点击、选中状态变化等交互行为不明确，请先与我确认预期行为，再进行实现。

## 注意事项

> [!IMPORTANT]
> **开始实现前，请核对 Agent 工作计划中的验收环节。** 验收应以插件提供的结构、尺寸、布局、字体、颜色、素材及可见状态等事实为主要依据，结合必要的浏览器属性与交互检查。避免大量使用截图、视觉工具或目测进行验收；下方效果截图仅用于展示，不作为还原精度的证明。

- 使用插件前，请确保 Figma Desktop 与本地 Bridge 已连接，并选中需要实现的设计范围。
- Figma 的静态事实不能单独确定运行时行为。滚动方式、点击结果、选中变化等交互不明确时，应先确认再实现。
- 插件返回 `FRESH` 仅表示实现所依据的设计来源未变，不代表代码已经正确还原或交互已经通过检查。
- 核对事实时应按节点和必要字段读取，避免将整份设计树反复载入上下文。

## 效果展示

以下图片于 2026-10-18 重新获取，展示当前主页设计与前端实现，尺寸均为 1440 × 1668。

<table>
  <thead>
    <tr>
      <th width="50%">Figma 设计稿</th>
      <th width="50%">当前前端实现</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="./docs/images/figma-design.png" alt="Easy Community 的 Figma 主页设计，1440 × 1668" /></td>
      <td><img src="./docs/images/implementation-1440.png" alt="Easy Community 当前 React 主页，1440 × 1668，页面顶部及初始状态" /></td>
    </tr>
  </tbody>
</table>

已知选中项左侧蓝条存在约 1px 外偏，本次文档更新保留该真实效果。事实来源、检查范围、截图说明及差异见[详细验收记录](./docs/verification.md)。

## 功能特点

- 实现顶部导航、搜索框、分类侧栏、发布面板和两篇文章组成的连续内容流。
- 以独立组件复用文章条目、按钮、图标、标题和提示条。
- 推荐、热门、关注分类支持本地高亮切换，不筛选或重排文章。
- 关注与点赞可反复切换，点赞同步更新计数；刷新恢复设计初始态。
- 搜索、文章、评论、发布、管理作品与头像入口显示轻量提示，不跳转页面。
- 顶栏和两侧栏纵向驻留；窄屏可横向滚动，宽屏内容居中，背景独立固定覆盖窗口。
- 使用插件导出的图片与 SVG 图标，以及本地字体；主要按钮支持键盘操作和选中状态语义。

## 技术栈

| 类别 | 技术 |
| --- | --- |
| UI | React 19 |
| 开发语言 | TypeScript 5.9 |
| 构建工具 | Vite 7 |
| 样式 | CSS |
| 字体 | 本地 Noto Sans SC 可变字体子集，附 SIL OFL 授权文本 |

## 快速开始

需要 Node.js 22.12+ 或兼容的更新版本，以及 npm。

```sh
npm ci
npm run dev
```

开发服务器默认运行在 [http://127.0.0.1:5173/](http://127.0.0.1:5173/)，监听本机 IPv4。若端口已占用，可使用 `npm run dev -- --port 5174` 指定其他端口。

## 可用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run typecheck` | 执行 TypeScript 类型检查 |
| `npm run build` | 执行类型检查并生成生产构建 |
| `npm run preview` | 本地预览生产构建 |

## 项目结构

```text
.
├── docs/
│   ├── figma/            # 插件事实、资源清单及节点与代码映射
│   ├── images/           # 当前设计图与网页展示截图
│   └── verification.md   # 详细实现约定、检查记录与已知差异
├── public/
│   ├── assets/           # 插件导出的原始图片与 SVG 图标
│   └── fonts/            # 本地字体子集及授权文本
├── src/
│   ├── components/       # 可复用页面组件
│   ├── data/             # 文章演示数据与分类配置
│   ├── hooks/            # 提示计时与清理逻辑
│   ├── App.tsx           # 页面组合与交互状态
│   ├── main.tsx          # React 入口
│   └── styles.css        # 页面布局与组件样式
├── package.json
└── vite.config.ts
```

## 项目范围

- 仅实现主页节点 `84:673`，右侧组件样例只作为状态参考。
- 不提供后端接口、账号系统、数据持久化或文章详情页；交互数据保存在当前页面内存中。
- 以 1440px 桌面画布实现，窄屏保持桌面布局，不自动改为移动端单列。
- 横幅为单张静态图片。滚动、点击、提示与状态变化按用户已确认的约定实现。
- 当前验收采用主要布局和状态的重点核对，不声称全面逐节点或无偏差还原。详见[中文详细记录](./docs/verification.md)。
