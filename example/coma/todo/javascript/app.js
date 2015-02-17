var container = require("vertx/container");

var config = {
  "web_root" : "./www"
  , "port" : 8888
  , "bridge" : true                             //SockJs를 위한 bridge 사용
  , "inbound_permitted" : [                     //이벤트 목록 생성
      {"address" : "mindMaps.list"}
      , {"address" : "mindMaps.save"}
      , {"address" : "mindMaps.delete"}
  ]
};

//vertx web server module deploy
container.deployModule("io.vertx~mod-web-server~2.0.0-final" ,config);

//verticle deploy
container.deployVerticle("./mindmaps.js");
