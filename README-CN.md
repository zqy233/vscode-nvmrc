# vscode-nvmrc

`vscode-nvmrc` 是一个 Visual Studio Code 插件，用于在 Visual Studio Code 窗口聚焦时自动调用 `nvm use` 命令来切换 Node.js 版本。这对于在多个 Visual Studio Code 实例中切换不同的 Node.js 版本时非常方便。

## 功能

- 如果项目根目录中存在 `.nvmrc` 文件，插件将读取该文件，并使用文件中指定的版本号切换 Node.js 版本。

- 例如：

  ```
  v16.16.0
  ```

## 用法

1. 多个 Visual Studio Code 实例间切换，插件会自动执行`nvm use` 命令切换 Node.js 版本。
2. 如果 `.nvmrc` 文件不存在或无效，插件将不会工作。
3. 插件创建一个终端来运行`nvm use`，并且会在数秒后自动关闭终端，可以在配置项中配置是否自动关闭以及多少秒后自动关闭。

## 注意事项

- 请确保项目根目录中存在有效的 `.nvmrc` 文件。
- 工作区存在多个项目，则会使用第一个项目根目录的 `.nvmrc` 文件
- 请确保你的系统中已经正确安装了 NVM，并配置了所需的 Node.js 版本。

## 反馈和贡献

如果你发现任何问题或有任何建议，请随时提出问题或提交请求，我们将非常乐意听取你的反馈和贡献。

- 提交问题：[插件仓库的 Issues 页面](https://github.com/zqy233/vscode-nvmrc/issues)
- 提交请求：[插件仓库的 Pull Requests 页面](https://github.com/zqy233/vscode-nvmrc/pulls)

## 许可证

本插件采用 [MIT](LICENSE) 许可证。
