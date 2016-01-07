import Foundation

@objc(EchoPlugin) class EchoPlugin : CDVPugin {
    func echo (command: CDVInvokedUrlCommand){
      var message = command.arguments[0] as! String
      message = message.uppercaseString
      var pluginResult = CDVPlugin(status: CDVCommandStatus_OK, messageAsSting: message)
      commandDelegate.sendPluginResult(pluginResult, callbackId:command.callbackId)
    }

}
