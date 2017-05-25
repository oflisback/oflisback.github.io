!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory(require("React")):"function"==typeof define&&define.amd?define(["React"],factory):"object"==typeof exports?exports.Favicon=factory(require("React")):root.Favicon=factory(root.React)}(this,function(__WEBPACK_EXTERNAL_MODULE_2__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){function drawIcon(src,num,cb){var img=document.createElement("img");img.onload=function(){var canvas=document.createElement("canvas");canvas.width=img.width,canvas.height=img.height;var context=canvas.getContext("2d");context.clearRect(0,0,img.width,img.height),context.drawImage(img,0,0);var top=img.height-9,left=img.width-7-1,bottom=16,right=16,radius=2;context.fillStyle="#F03D25",context.strokeStyle="#F03D25",context.lineWidth=1,context.beginPath(),context.moveTo(left+radius,top),context.quadraticCurveTo(left,top,left,top+radius),context.lineTo(left,bottom-radius),context.quadraticCurveTo(left,bottom,left+radius,bottom),context.lineTo(right-radius,bottom),context.quadraticCurveTo(right,bottom,right,bottom-radius),context.lineTo(right,top+radius),context.quadraticCurveTo(right,top,right-radius,top),context.closePath(),context.fill(),context.font="bold 10px arial",context.fillStyle="#FFF",context.textAlign="right",context.textBaseline="top",context.fillText(num,15,6),cb(null,context.canvas.toDataURL())},img.src=src}var linkEl,React=__webpack_require__(2),Favicon=React.createClass({displayName:"Favicon",getDefaultProps:function(){return{alertCount:null,animated:!0,animationDelay:500}},getInitialState:function(){return{animationIndex:0,animationLoop:null,animationRunning:!1}},statics:{mountedInstances:[],getActiveInstance:function(){return Favicon.mountedInstances[Favicon.mountedInstances.length-1]},draw:function(){if("undefined"!=typeof document){if("undefined"==typeof linkEl){var head=document.getElementsByTagName("head")[0];linkEl=document.createElement("link"),linkEl.type="image/x-icon",linkEl.rel="icon";for(var links=head.getElementsByTagName("link"),i=links.length;--i>=0;/\bicon\b/i.test(links[i].getAttribute("rel"))&&head.removeChild(links[i]));head.appendChild(linkEl)}var currentUrl,activeInstance=Favicon.getActiveInstance();currentUrl=activeInstance.props.url instanceof Array?activeInstance.props.url[activeInstance.state.animationIndex]:activeInstance.props.url,activeInstance.props.alertCount?drawIcon(currentUrl,activeInstance.props.alertCount,function(err,url){linkEl.href=url}):linkEl.href=currentUrl}},update:function(){if("undefined"!=typeof document){var activeInstance=Favicon.getActiveInstance(),isAnimated=activeInstance.props.url instanceof Array&&activeInstance.props.animated,intervalId=null;if(clearInterval(activeInstance.state.animationLoop),isAnimated){var animateFavicon=function(){var nextAnimationIndex=(activeInstance.state.animationIndex+1)%activeInstance.props.url.length;Favicon.draw(),activeInstance.setState({animationIndex:nextAnimationIndex})};intervalId=setInterval(animateFavicon,activeInstance.props.animationDelay),animateFavicon()}else Favicon.draw();activeInstance.setState({animationLoop:intervalId})}}},componentWillMount:function(){Favicon.mountedInstances.push(this),Favicon.update()},componentDidUpdate:function(prevProps){(prevProps.url!==this.props.url||prevProps.animated!==this.props.animated||prevProps.alertCount!==this.props.alertCount)&&Favicon.update()},render:function(){return null}});module.exports=Favicon},function(module){module.exports=__WEBPACK_EXTERNAL_MODULE_2__}])});
//# sourceMappingURL=react-favicon.js