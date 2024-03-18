# vscode-nvmrc [中文](https://github.com/zqy233/vscode-nvmrc/blob/main/README-CN.md)

`vscode-nvmrc` is a Visual Studio Code extension that allows you to automatically switch Node.js versions by invoking the `nvm use` command when a Visual Studio Code window is focused. This is useful when you need to switch between different Node.js versions across multiple Visual Studio Code instances.

## Features

- Automatically detects and switches Node.js versions based on the `.nvmrc` file in the project root when a Visual Studio Code window is focused.
- Supports specifying Node.js versions in the `.nvmrc` file using full version numbers or major version numbers. For Example:

  ```
  v16.16.0
  ```

## Usage

1. When switching between multiple Visual Studio Code instances, the extension will automatically execute the corresponding `nvm use` command to switch the Node.js version.
2. If a `.nvmrc` file exists in the project root directory, the extension will read the file and switch the Node.js version based on the specified version number.
3. If there are multiple projects in the workspace, the `.nvmrc` file in the first project's root directory will be used.
4. If the `.nvmrc` file does not exist or is invalid, the extension will not perform any actions.
5. The extension does not require any additional configuration.

## Notes

- Ensure that NVM is correctly installed on your system and configured with the required Node.js versions.
- Make sure that a valid `.nvmrc` file exists in your project.

## Feedback and Contributions

If you encounter any issues or have any suggestions, please feel free to raise an issue or submit a pull request. We are more than happy to listen to your feedback and contributions.

- Submit an Issue: [Issues page in the extension's repository](https://github.com/zqy233/vscode-nvmrc/issues)
- Submit a Pull Request: [Pull Requests page in the extension's repository](https://github.com/zqy233/vscode-nvmrc/pulls)

## License

This extension is licensed under the [MIT License](LICENSE).
