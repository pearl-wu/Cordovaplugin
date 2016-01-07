'use strict';

var exec = require("coedova/exec")

var EchoPlugin = {
  echo: function(sendMsg, onSuccess, onFail){
    return exec(onSuccess, onFail, 'EchoPlugin', 'echo', [sendMsg]);
  }
};

module.exports = EchoPlugin;
