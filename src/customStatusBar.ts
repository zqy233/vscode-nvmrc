import { window, ThemeColor, StatusBarItem, StatusBarAlignment } from "vscode";
let statusBar: StatusBarItem | undefined;
let timeout: NodeJS.Timeout;

export enum Status {
  error = "error",
}
export function customStatusBar(text: string, type?: Status, time = 4000) {
  if (statusBar) {
    statusBar.dispose();
  }
  if (timeout) {
    clearTimeout(timeout);
  }
  statusBar = window.createStatusBarItem(StatusBarAlignment.Left);
  statusBar.color = "#ffffff";

  if (type === Status.error) {
    statusBar.backgroundColor = new ThemeColor("statusBarItem.errorBackground");
  }
  if (!type) {
    statusBar.backgroundColor = new ThemeColor(
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
}
