//
//  ViewController.swift
//  FLL RePLAY Scorer
//
//  Created by Sanjay Seshan on 7/23/20.
//  Copyright © 2020 Sanjay Seshan. All rights reserved.
//

import UIKit
import WebKit

// Wrap the WKWebView webview to allow IB use

class MyWebView : WKWebView {
    required init?(coder: NSCoder) {
        let configuration = WKWebViewConfiguration()
        let controller = WKUserContentController()
        configuration.userContentController = controller;
        configuration.mediaTypesRequiringUserActionForPlayback = [];
        super.init(frame: CGRect.zero, configuration: configuration)
    }
}


class ViewController: UIViewController, WKUIDelegate {
//    @IBOutlet weak var webView: MyWebView!
    var webView: WKWebView!
    
    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }
    
    
    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping (Bool) -> Void) {
        
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .actionSheet)
        
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { (action) in
            completionHandler(true)
        }))
        
        alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
            completionHandler(false)
        }))
        
        present(alertController, animated: true, completion: nil)
    }
    
    
    func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping (String?) -> Void) {
        
        let alertController = UIAlertController(title: "Alert:", message: prompt, preferredStyle: .actionSheet)
        
        alertController.addTextField { (textField) in
            textField.text = defaultText
        }
        
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { (action) in
            if let text = alertController.textFields?.first?.text {
                completionHandler(text)
            } else {
                completionHandler(defaultText)
            }
        }))
        
        alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
            completionHandler(nil)
        }))
        
        present(alertController, animated: true, completion: nil)
    }

    
    override func viewDidLoad() {
        super.viewDidLoad()

        
        webView.customUserAgent = "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/98176"
        webView.navigationDelegate = self;
        if let filePath = Bundle.main.path(forResource:"index", ofType:"html", inDirectory: "public") {
            do {
                let html = try String(contentsOfFile: filePath, encoding: .utf8)
                webView.loadHTMLString(html, baseURL: Bundle.main.resourceURL?.appendingPathComponent("public"))
            } catch {
                print("Error loading html")
            }
        }
    }
    
    // let MyWebView.UIDelegate = self;
    
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let ac = UIAlertController(title: "Alert: ", message: message, preferredStyle: .alert)
        ac.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
        present(ac, animated: true)
        completionHandler()
    }
    
    
    func webView(webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        
        let alertController = UIAlertController(title: message,
                                                message: nil,
                                                preferredStyle: .alert)
        
        alertController.addAction(UIAlertAction(title: "OK", style: .cancel) {
            _ in completionHandler()}
        )
        
        self.present(alertController, animated: true, completion: nil)
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func callJavascriptTapped(_ sender: UIButton) {
        let script = "testJS()"
        webView.evaluateJavaScript(script) { (result: Any?, error: Error?) in
            if let error = error {
                print("evaluateJavaScript error: \(error.localizedDescription)")
            } else {
                print("evaluateJavaScript result: \(result ?? "")")
            }
        }
    }
    
}




extension ViewController : WKNavigationDelegate {
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("didFinish navigation:");
    }
}

