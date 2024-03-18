# [中文](https://github.com/zqy233/vscode-nvmrc/blob/main/README-CN.md) vscode-nvmrc

`vscode-nvmrc` is a Visual Studio Code extension that automatically switch Node.js version when a Visual Studio Code window is focused. This is useful when you need to switch between different Node.js versions across multiple Visual Studio Code instances.

## Features

- If a `.nvmrc` file exists in the project root directory, the extension will read the file and switch the Node.js version based on the specified version number when a Visual Studio Code window is focused.
- For Example:

  ```
  v16.16.0
  ```

## Usage

1. When switching between multiple Visual Studio Code instances, the extension will automatically execute `nvm use` command.
2. If the `.nvmrc` file does not exist or is invalid, the extension will not work.
3. This extension creates a terminal to run nvm use, and it will automatically close the terminal after a few seconds. You can configure whether to automatically close and how many seconds to automatically close in the settings.

## Notes

- Make sure that a valid `.nvmrc` file exists in your project root directory.
- If there are multiple projects in the workspace, the `.nvmrc` file in the first project's root directory will be used.
- Ensure that NVM is correctly installed on your system and configured with the required Node.js versions.

## Feedback and Contributions

If you encounter any issues or have any suggestions, please feel free to raise an issue or submit a pull request. We are more than happy to listen to your feedback and contributions.

- Submit an Issue: [Issues page in the extension's repository](https://github.com/zqy233/vscode-nvmrc/issues)
- Submit a Pull Request: [Pull Requests page in the extension's repository](https://github.com/zqy233/vscode-nvmrc/pulls)

## License

This extension is licensed under the [MIT License](LICENSE).
