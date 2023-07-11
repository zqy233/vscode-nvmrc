import * as vscode from "vscode";
import { exec } from "child_process";
import { readFile } from "fs";
import { resolve } from "path";

let statusBar: vscode.StatusBarItem | undefined;
let timeout: NodeJS.Timeout;

enum Status {
  error = "error",
}
function customStatusBar(text: string, type?: Status, time = 4000) {
  if (statusBar) {
    statusBar.dispose();
  }
  if (timeout) {
    clearTimeout(timeout);
  }
  statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  statusBar.color = "#ffffff";

  if (type === Status.error) {
    statusBar.backgroundColor = new vscode.ThemeColor(
      "statusBarItem.errorBackground"
    );
  }
  if (!type) {
    statusBar.backgroundColor = new vscode.ThemeColor(
      "statusBarItem.warningBackground"
    );
  }
  statusBar.text = "vscode-nvmrc: " + text;
  statusBar.show();
  timeout = setTimeout(() => {
    if (statusBar) {
      statusBar.dispose();
    }
  }, time);
  return;
}

function execute(cmd: string) {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      customStatusBar(`${error}`, Status.error);
    } else {
      if (stderr) {
        customStatusBar(stderr, Status.error);
      } else {
        customStatusBar(stdout);
      }
    }
  });
}

function nvmuse(url: string, context: vscode.ExtensionContext) {
  readFile(url, { encoding: "utf8" }, (err, data) => {
    if (err) {
      customStatusBar(".nvmrc file not found.", Status.error);
      return;
    }
    const nvmrcData = context.globalState.get(".nvmrc");
    if (nvmrcData === data) {
      return;
    }
    context.globalState.update(".nvmrc", data);
    execute("nvm use " + data);
  });
}

function resolveRootPathAndNvmuse(context: vscode.ExtensionContext) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (workspaceFolders && workspaceFolders.length > 0) {
    const rootPath = workspaceFolders[0].uri.fsPath;
    if (rootPath) {
      const url = resolve(rootPath, ".nvmrc");
      nvmuse(url, context);
    }
  }
}

export function activate(context: vscode.ExtensionContext) {
  resolveRootPathAndNvmuse(context);
  const disposable = vscode.window.onDidChangeWindowState((e) => {
    if (e.focused) {
      resolveRootPathAndNvmuse(context);
    }
  });
  context.subscriptions.push(disposable);
}

export function deactivate() {}
