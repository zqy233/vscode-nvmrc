# vscode-nvmrc-terminal

`vscode-nvmrc-terminal` 是一个 Visual Studio Code 插件，它允许你在打开或切换终端时自动调用 `nvm use` 命令来切换 Node.js 版本。这对于在多个项目中使用不同的 Node.js 版本时非常方便。

## 功能

- 通过读取项目根目录中的 `.nvmrc` 文件来确定要使用的 Node.js 版本，在打开或切换终端时自动执行 `nvm use` 命令。
- `.nvmrc` 文件可以使用完整版本号、主要版本号、版本别名来指定 Node.js 版本。

## 安装

1. 打开 Visual Studio Code，在侧边栏中点击 Extensions 图标（或按下 `Ctrl+Shift+X`），搜索 `vscode-nvmrc-terminal` 并点击安装。
2. 重新启动 Visual Studio Code。

## 使用方法

1. 在 Visual Studio Code 中打开一个项目。
2. 打开终端（可以使用快捷键 `Ctrl+` \ `或点击菜单栏的 "View" > "Terminal" > "New Terminal"`）。
3. 插件会自动检测到终端的打开或切换，并执行相应的 `nvm use` 命令切换 Node.js 版本。
4. 如果项目根目录中存在 `.nvmrc` 文件，插件将读取该文件，并使用文件中指定的版本号切换 Node.js 版本。
5. 工作区存在多个项目，则会使用第一个项目根目录的 `.nvmrc` 文件
6. 如果 `.nvmrc` 文件不存在或无效，插件将不会执行任何操作。

请确保你的系统中已经安装了 Node Version Manager (NVM) 并正确设置。

## 配置

插件不需要额外的配置，它会自动运行并根据项目根目录的 `.nvmrc` 文件执行 `nvm use` 命令。

## 注意事项

- 插件依赖于正确安装和配置的 NVM 环境。请确保你的系统中已经正确安装了 NVM，并配置了所需的 Node.js 版本。
- 如果在打开或切换终端时遇到任何问题，请确保项目中存在有效的 `.nvmrc` 文件，并正确设置了 Node.js 版本。

## 反馈和贡献

如果你发现任何问题或有任何建议，请随时提出问题或提交请求，我们将非常乐意听取你的反馈和贡献。

- 提交问题：[插件仓库的 Issues 页面](https://github.com/zqy233/vscode-nvmrc-terminal/issues)
- 提交请求：[插件仓库的 Pull Requests 页面](https://github.com/zqy233/vscode-nvmrc-terminal/pulls)

## 许可证

本插件采用 [MIT](LICENSE) 许可证。
