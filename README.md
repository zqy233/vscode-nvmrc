# vscode-nvmrc-terminal [中文](https://github.com/zqy233/vscode-nvmrc-terminal/blob/master/README-CN.md)

`vscode-nvmrc-terminal` is a Visual Studio Code extension that allows you to automatically switch Node.js versions by invoking the `nvm use` command when opening or switching terminals. It is convenient when working with multiple projects that require different Node.js versions.

## Features

- Automatically detects the Node.js version to use by reading the `.nvmrc` file in the project's root directory when opening or switching terminals.
- Supports specifying the Node.js version using full version numbers, major version numbers or version aliases in the `.nvmrc` file.

## Installation

1. Open Visual Studio Code，Click on the Extensions icon in the sidebar (or press `Ctrl+Shift+X`)，Search for `vscode-nvmrc-terminal` and click Install.
2. Restart Visual Studio Code.

## Usage

1. Open a project in Visual Studio Code.
2. Open the integrated terminal (use the shortcut `Ctrl+`` or click on "View" > "Terminal" > "New Terminal" in the menu bar).
3. The extension will automatically detect terminal opening or switching and execute the corresponding `nvm use` command to switch the Node.js version.
4. If a `.nvmrc` file exists in the project's root directory, the extension will read it and switch to the version specified in the file.
5. If there are multiple projects in the workspace, the extension will use the `.nvmrc` file in the root directory of the first project.
6. If the `.nvmrc` file does not exist or is invalid, the extension will not perform any action.

Make sure you have Node Version Manager (NVM) installed and properly configured on your system.

## Configuration

The extension does not require any additional configuration. It runs automatically and executes the `nvm use` command based on the `.nvmrc` file in the project's root directory.

## Notes

- The extension relies on a correctly installed and configured NVM environment. Make sure you have NVM properly installed on your system and have the required Node.js versions set up.
- If you encounter any issues when opening or switching terminals, make sure there is a valid `.nvmrc` file in the project's root directory and the Node.js version is properly configured.

## Feedback and Contributions

If you encounter any issues or have any suggestions, please feel free to raise an issue or submit a pull request. We welcome your feedback and contributions.

- Submitting issues: [Issues page of the extension repository](https://github.com/zqy233/vscode-nvmrc-terminal/issues)
- Submitting pull requests: [Pull Requests page of the extension repository](https://github.com/zqy233/vscode-nvmrc-terminal/pulls)

## License

This extension is licensed under the [MIT License](LICENSE).
