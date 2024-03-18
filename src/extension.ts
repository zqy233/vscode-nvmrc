import { ExtensionContext, window, workspace } from "vscode";
import { readFile } from "fs";
import { resolve } from "path";
import { customStatusBar, Status } from "./customStatusBar";

function nvmuse(url: string, context: ExtensionContext) {
  readFile(url, { encoding: "utf8" }, (err, data) => {
    if (err) {
      return customStatusBar(".nvmrc file not found.", Status.error);
    }
    const nvmrcData = context.globalState.get(".nvmrc");
    if (nvmrcData === data.replace("v", "")) {
      return;
    }
    context.globalState.update(".nvmrc", data);
    const terminal = window.createTerminal("run 'nvm use' (vscode-nvmrc)");
    terminal.sendText("nvm use " + data);
    terminal.show();
    const config = workspace.getConfiguration("vscode-nvmrc");
    const autoCloseNvmTerminal = config.get("autoCloseNvmTerminal") as boolean;
    if (autoCloseNvmTerminal) {
      const delayBeforeCloseNvmTerminal = config.get(
        "delayBeforeCloseNvmTerminal"
      ) as number;
      customStatusBar(
        `The terminal running 'nvm use' will close in ${delayBeforeCloseNvmTerminal} seconds. `
      );
      setTimeout(() => {
        terminal.dispose();
      }, delayBeforeCloseNvmTerminal * 1000);
    }
  });
}

function resolveRootPathAndNvmuse(context: ExtensionContext) {
  const workspaceFolders = workspace.workspaceFolders;
  if (workspaceFolders && workspaceFolders.length) {
    const rootPath = workspaceFolders[0].uri.fsPath;
    if (rootPath) {
      const url = resolve(rootPath, ".nvmrc");
      nvmuse(url, context);
    }
  }
}

export function activate(context: ExtensionContext) {
  resolveRootPathAndNvmuse(context);
  const disposable = window.onDidChangeWindowState((e) => {
    if (e.focused) {
      resolveRootPathAndNvmuse(context);
    }
  });
  context.subscriptions.push(disposable);
}

export function deactivate() {}
