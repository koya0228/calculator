import * as vscode from "vscode";

export class WebviewProvider implements vscode.WebviewViewProvider {
  constructor(private extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    webviewView.webview.options = {
      enableScripts: true,
    };

    const styleUri = webviewView.webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "public", "css", "index.css")
    );

    const scriptUri = webviewView.webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "public", "js", "index.js")
    );

    webviewView.webview.html = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="${styleUri}">
        <title>WebView Example</title>
      </head>
      <body>
        <h1 id="txt">Hello World!</h1>
        <button id="btn">push</button>
        <script src="${scriptUri}" />
      </body>
      </html>
    `;
  }
}
