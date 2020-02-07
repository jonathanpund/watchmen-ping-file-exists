const fs = require('fs');

function PingService(){}

exports = module.exports = PingService;

PingService.prototype.ping = function(service, callback){
  const path = service.url;

  callback(fs.existsSync(path) ? null : "File " + path + " doesn't exist.", '', '', 0);
};

PingService.prototype.getDefaultOptions = function(){
  return {}; // there is not need for UI config options for this ping service
};
