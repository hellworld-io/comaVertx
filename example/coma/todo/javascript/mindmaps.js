//var console = require("vertx/console");
//console.log("mindmaps.js deployed");

//Vertx eventBus
var eventBus = require("vertx/event_bus");
var mindMaps = {};

/*
* mindMap 조회 이벤트
* arguments
*    이벤트 명 : mindMaps.list
*    function(args,callbackFuncname) args: 전달 parameter
*/
eventBus.registerHandler("mindMaps.list", function(args,responder){
    responder({"mindMaps": Object.keys(mindMaps).map(function(key){
      return mindMaps[key];
    })});
});


/*
* mindMap 저장 이벤트
* arguments
*    이벤트 명 : mindMaps.save
*    function(mindMap,callbackFuncname) mindMap: mindMap 객체
*/
eventBus.registerHandler("mindMaps.save", function(mindMap,responder){
  if(!mindMap._id){
    mindMap._id = Math.random();
  }

  mindMaps[mindMap._id] = mindMap;
  responder(mindMap);
});

/*
* mindMap 삭제 이벤트
* arguments
*    이벤트 명 : mindMaps.delete
*    function(args,callbackFuncname) args: 전달 parameter
*/
eventBus.registerHandler("mindMaps.delete",function(args,responder){
  delete mindMaps[args.id];
  responder({});
});
