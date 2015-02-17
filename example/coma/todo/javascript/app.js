var container = require("vertx/container");

var config = {
  "web_root" : "./www"
  , "port" : 8888
  , "bridge" : true
  , "inbound_permitted" : [
      {"address" : "mindMaps.list"}
      , {"address" : "mindMaps.save"}
      , {"address" : "mindMaps.delete"}
  ]
};

container.deployModule("io.vertx~mod-web-server~2.0.0-final" ,config);
container.deployVerticle("./mindmaps.js");
