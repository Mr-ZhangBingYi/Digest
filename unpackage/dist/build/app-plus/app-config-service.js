
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index","pages/index/index","pages/basics/Economics","pages/basics/Psychology","pages/basics/novel","pages/basics/Religion","pages/basics/button","pages/basics/design","pages/basics/tag","pages/basics/avatar","pages/basics/Poetry","pages/basics/shadow","pages/basics/MedicalScience","pages/component/AbsoluteMusic","pages/component/nav","pages/component/list","pages/component/card","pages/component/form","pages/component/timeline","pages/component/chat","pages/component/swiper","pages/component/modal","pages/component/steps","pages/plugin/indexes","pages/plugin/animation","pages/plugin/drawer","pages/plugin/verticalnav","pages/basics/note/value","pages/basics/note/rich","pages/basics/poetry/QingpingTune","pages/basics/novel/RegimentalCommander"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"书摘","navigationStyle":"custom","navigationBarTextStyle":"white"},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"书摘","compilerVersion":"3.6.4","entryPagePath":"pages/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index","meta":{"isQuit":true},"window":{}},{"path":"/pages/index/index","meta":{},"window":{}},{"path":"/pages/basics/Economics","meta":{},"window":{}},{"path":"/pages/basics/Psychology","meta":{},"window":{}},{"path":"/pages/basics/novel","meta":{},"window":{}},{"path":"/pages/basics/Religion","meta":{},"window":{}},{"path":"/pages/basics/button","meta":{},"window":{}},{"path":"/pages/basics/design","meta":{},"window":{}},{"path":"/pages/basics/tag","meta":{},"window":{}},{"path":"/pages/basics/avatar","meta":{},"window":{}},{"path":"/pages/basics/Poetry","meta":{},"window":{}},{"path":"/pages/basics/shadow","meta":{},"window":{}},{"path":"/pages/basics/MedicalScience","meta":{},"window":{}},{"path":"/pages/component/AbsoluteMusic","meta":{},"window":{}},{"path":"/pages/component/nav","meta":{},"window":{}},{"path":"/pages/component/list","meta":{},"window":{}},{"path":"/pages/component/card","meta":{},"window":{}},{"path":"/pages/component/form","meta":{},"window":{}},{"path":"/pages/component/timeline","meta":{},"window":{}},{"path":"/pages/component/chat","meta":{},"window":{}},{"path":"/pages/component/swiper","meta":{},"window":{}},{"path":"/pages/component/modal","meta":{},"window":{}},{"path":"/pages/component/steps","meta":{},"window":{}},{"path":"/pages/plugin/indexes","meta":{},"window":{}},{"path":"/pages/plugin/animation","meta":{},"window":{}},{"path":"/pages/plugin/drawer","meta":{},"window":{}},{"path":"/pages/plugin/verticalnav","meta":{},"window":{}},{"path":"/pages/basics/note/value","meta":{},"window":{}},{"path":"/pages/basics/note/rich","meta":{},"window":{}},{"path":"/pages/basics/poetry/QingpingTune","meta":{},"window":{}},{"path":"/pages/basics/novel/RegimentalCommander","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});