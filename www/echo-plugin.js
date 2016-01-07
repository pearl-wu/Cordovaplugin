'use strict';  
  
var exec = require('cordova/exec');  
  
var EchoPlugin = {  
  
  echo: function(sendMsg, onSuccess, onFail) {  
    return exec(onSuccess, onFail, 'EchoPlugin', 'echo', [sendMsg]);  
  }  
  
};  
  
module.exports = EchoPlugin;  
