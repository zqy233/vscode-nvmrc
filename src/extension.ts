import { ExtensionContext, window, workspace } from "vscode";
import { readFile } from "fs";
import { resolve } from "path";
import { customStatusBar, Status } from "./customStatusBar";

function runNvmUseCommand(version: string) {
  const terminal = window.createTerminal("run 'nvm use' (vscode-nvmrc)");
  terminal.sendText("nvm use " + version);
  terminal.show(true);
  const config = workspace.getConfiguration("vscode-nvmrc");
  const autoClose = config.get("autoCloseNvmTerminal") as boolean;
  const delay = config.get("delayBeforeCloseNvmTerminal") as number;
  if (autoClose) {
    customStatusBar(`The terminal running 'nvm use' will close in ${delay} seconds.`);
    setTimeout(() => terminal.dispose(), delay * 1000);
  }
}

function nvmuse(url: string, context: ExtensionContext) {
  readFile(url, { encoding: "utf8" }, (err, data) => {
    const config = workspace.getConfiguration("vscode-nvmrc");
    const previousRaw = context.globalState.get(".nvmrc") as string | undefined;
    const previousVersion = previousRaw?.replace(/[vV]/g, "");
    let currentRaw: string | undefined;
    let currentVersion: string | undefined;

    if (err) {
      currentRaw = config.get("defaultNodeVersion") as string | undefined;
      if (!currentRaw) {
        customStatusBar(".nvmrc file not found and no default version is configured.", Status.error);
        return;
      }
    } else {
      currentRaw = data.trim();
    }
    currentVersion = currentRaw.replace(/[vV]/g, "");
    if (previousVersion === currentVersion) {
      return;
    }
    context.globalState.update(".nvmrc", currentRaw);
    if (err) {
      customStatusBar(".nvmrc not found, using default version: " + currentRaw);
    }
    runNvmUseCommand(currentRaw);
  });
}

function resolveRootPathAndNvmuse(context: ExtensionContext) {
  const workspaceFolders = workspace.workspaceFolders;
  if (workspaceFolders?.length) {
    const rootPath = workspaceFolders[0].uri.fsPath;
    const url = resolve(rootPath, ".nvmrc");
    nvmuse(url, context);
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
