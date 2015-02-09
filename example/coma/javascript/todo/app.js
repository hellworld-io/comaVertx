var container = require("vertx/container");

var config = {
  "web_root" : "./www"
  , "port" : 8888
};

container.deployModule("io.vertx~mod-web-server~2.0.0-final" ,config);
container.deployVerticle("./js/mindmaps.js");
