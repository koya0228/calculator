import * as vscode from 'vscode';
import { WebviewProvider } from "./WebviewProvider";

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			"example.webview",
			new WebviewProvider(context.extensionUri)
		)
	);
}

export function deactivate() {}
