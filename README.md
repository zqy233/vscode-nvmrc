# [中文](https://github.com/zqy233/vscode-nvmrc/blob/main/README-CN.md) vscode-nvmrc

`vscode-nvmrc` is a Visual Studio Code extension that automatically switches Node.js version when a Visual Studio Code window is focused. This is useful when you need to switch between different Node.js versions across multiple Visual Studio Code instances.

## Features

- If a `.nvmrc` file exists in the project root directory, the extension will read the file and switch the Node.js version based on the specified version number when a Visual Studio Code window is focused.

- For Example:

  ```
  v16.16.0
  ```

- The extension will create a terminal to run `nvm use`, and the terminal will automatically close after a few seconds. You can configure whether to auto-close and how many seconds to wait before closing in the settings.

- The extension will record the switched Node.js version. If the version does not change afterwards, `nvm use` will not be run again.

- If a valid `.nvmrc` file is not found, the default Node.js version specified in the extension settings will be used. If that is also unavailable, no action will be taken.

## Configuration

You can configure the following options in the Visual Studio Code `settings.json` file (or find the extension in the settings to configure):

```json
{
  "vscode-nvmrc.defaultNodeVersion": "18.17.1",
  "vscode-nvmrc.autoCloseNvmTerminal": true,
  "vscode-nvmrc.delayBeforeCloseNvmTerminal": 5
}
```

- **`defaultNodeVersion`**: (Optional) The default Node.js version to use when the `.nvmrc` file is missing.
- **`autoCloseNvmTerminal`**: Whether to automatically close the terminal after executing the `nvm use` command.
- **`delayBeforeCloseNvmTerminal`**: Delay time before automatically closing the terminal (in seconds), used to ensure the command finishes executing.

## Notes

- Please ensure that NVM is correctly installed on your system and that the required Node.js versions are configured.
- If there are multiple projects in the workspace, the `.nvmrc` file in the root directory of the first project will be used.
- If you are using Windows 11 and a User Account Control (UAC) prompt appears when the extension executes `nvm use`, it is recommended to set UAC to "Never notify". Otherwise, please disable the auto-close terminal option in the extension settings. This is because the UAC prompt will pause the `nvm use` command, which may cause the command to not finish before the terminal is automatically closed.

## Feedback and Contributions

If you encounter any issues or have any suggestions, please feel free to raise an issue or submit a pull request. We are more than happy to listen to your feedback and contributions.

- Submit an Issue: [Issues page in the extension's repository](https://github.com/zqy233/vscode-nvmrc/issues)
- Submit a Pull Request: [Pull Requests page in the extension's repository](https://github.com/zqy233/vscode-nvmrc/pulls)

## License

This extension is licensed under the [MIT License](LICENSE).
