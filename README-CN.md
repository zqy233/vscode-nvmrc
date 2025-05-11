# vscode-nvmrc

`vscode-nvmrc` 是一个 Visual Studio Code 插件，用于在 Visual Studio Code 窗口聚焦时自动调用 `nvm use` 命令来切换 Node.js 版本。这对于在多个 Visual Studio Code 实例中切换不同的 Node.js 版本时非常方便。

## 功能

- 如果项目根目录中存在 `.nvmrc` 文件，插件将读取该文件，并使用文件中指定的版本号切换 Node.js 版本。
- `.nvmrc` 文件内容示例：

  ```
  v16.16.0
  ```

- 插件会创建一个终端来运行 `nvm use` ，并且会在数秒后自动关闭终端。可以在配置项中配置是否自动关闭以及多少秒后自动关闭。
- 插件会记录切换的 Node.js 版本，如果版本之后没有变化，不会重复运行`nvm use`。
- 如果没有找到有效的 `.nvmrc` 文件，将使用插件设置中指定的默认 Node.js 版本，如果都不可用，将不会执行任何操作。

## 配置

您可以在 Visual Studio Code `settings.json` 文件中配置以下选项（或者在设置中找到插件进行配置）：

```json
{
  "vscode-nvmrc.defaultNodeVersion": "18.17.1",
  "vscode-nvmrc.autoCloseNvmTerminal": true,
  "vscode-nvmrc.delayBeforeCloseNvmTerminal": 5
}
```

- **`defaultNodeVersion`**: （可选）当 `.nvmrc` 文件缺失时，默认使用的 Node.js 版本。
- **`autoCloseNvmTerminal`**: 是否在执行完 `nvm use` 命令后自动关闭终端。
- **`delayBeforeCloseNvmTerminal`**: 自动关闭终端前的延迟时间（以秒为单位），用于确保命令执行完成。

## 注意事项

- 请确保你的系统中已经正确安装了 NVM，并配置了所需的 Node.js 版本。
- 工作区存在多个项目，则会使用第一个项目根目录的 `.nvmrc` 文件
- 如果您使用的是 Windows 11 并且插件执行`nvm use`时出现用户账户控制（UAC）弹窗，建议将 UAC 设置为“从不通知”。否则，请在插件设置中禁用自动关闭终端的选项。因为 UAC 弹窗会暂停 `nvm use` 命令，导致有时终端自动关闭时命令还未执行完。

## 反馈和贡献

如果你发现任何问题或有任何建议，请随时提出问题或提交请求，我们将非常乐意听取你的反馈和贡献。

- 提交问题：[插件仓库的 Issues 页面](https://github.com/zqy233/vscode-nvmrc/issues)
- 提交请求：[插件仓库的 Pull Requests 页面](https://github.com/zqy233/vscode-nvmrc/pulls)

## 许可证

本插件采用 [MIT](LICENSE) 许可证。
