var tap="tap",touchstart="touchstart",touchmove="touchmove",touchend="touchend",containWidth=window.screen.width;if(void 0==window.orientation){var userAgent=window.navigator.userAgent;userAgent.indexOf("iPhone")<0&&userAgent.indexOf("Android")<0&&(containWidth=480,$(window).width()<containWidth&&(containWidth=$(window).width()-20),tap="click",touchstart="mousedown",touchmove="mousemove",touchend="mouseup")}else 90!=window.orientation&&-90!=window.orientation||(containWidth=window.screen.availHeight);$(window).width()<containWidth&&(containWidth=$(window).width()),$(".j-link").on(tap,function(){var t=$(this).data("href");if(t){if("#"==t)return!1;location.href=t}});var sugar={};sugar.singleScreen=function(t){var e=$(window).height();$(".fn-contain").height(e),t&&t.height(e),setTimeout(function(){var e=$(window).height();$(".fn-contain").height(e),t&&t.height(e)},100)},function(){var t=function(t,e,o){this.obj="object"==typeof t?t:$("#"+t),this.callback=e||{},this.swipeX=!1,this.swipeY=!1,o&&(o.swipeX&&(this.swipeX=!0),o.swipeY&&(this.swipeY=!0)),this.obj.length&&this.init()};t.prototype={init:function(){this.touchState=null,this.touchstartX=0,this.touchstartY=0,this.moveX=0,this.moveY=0,this.touchendX=0,this.touchendY=0,this.tapReady=!1,this.swipeState=null,this.touchstartFn(),this.touchmoveFn(),this.touchendFn()},touchstartFn:function(){var t=this;this.obj.on(touchstart,function(e){"end"!=t.touchState&&(t.tapReady=!0,t.swipeState=null,t.moveX=0,t.touchstartX=t.touchendX=e.pageX||e.targetTouches[0].pageX,t.moveY=0,t.touchstartY=t.touchendY=e.pageY||e.targetTouches[0].pageY,t.touchState="start",t.callback.start&&t.callback.start({startX:t.touchstartX,startY:t.touchstartY}))})},touchmoveFn:function(){var t=this;this.obj.on(touchmove,function(e){if("start"==t.touchState||"move"==t.touchState){if(t.tapReady=!1,t.touchendX=e.pageX||e.targetTouches[0].pageX,t.moveX=t.touchendX-t.touchstartX,t.touchendY=e.pageY||e.targetTouches[0].pageY,t.moveY=t.touchendY-t.touchstartY,t.touchState="move",!t.swipeState){var o=Math.abs(t.moveX),n=Math.abs(t.moveY);(o>10||n>10)&&(t.swipeState=o>n?"x":"y")}if(t.swipeState&&t.callback.move&&t.callback.move({startX:t.touchstartX,startY:t.touchstartY,moveX:t.moveX,moveY:t.moveY,endX:t.touchendX,endY:t.touchendY,swipeState:t.swipeState}),t.swipeX&&"x"==t.swipeState)return!1;if(t.swipeY&&"y"==t.swipeState)return!1;if(t.swipeX&&t.swipeY)return!1}})},touchendFn:function(){function t(t){"start"!=e.touchState&&"move"!=e.touchState||(e.touchendX=t.pageX||t.changedTouches[0].pageX,e.moveX=e.touchendX-e.touchstartX,e.touchendY=t.pageY||t.changedTouches[0].pageY,e.moveY=e.touchendY-e.touchstartY,e.callback.end?(e.touchState="end",e.callback.end({startX:e.touchstartX,startY:e.touchstartY,moveX:e.moveX,moveY:e.moveY,endX:e.touchendX,endY:e.touchendY,tap:e.tapReady,swipeState:e.swipeState,finish:function(){e.touchState=null}})):e.touchState=null)}var e=this;this.obj.on(touchend,function(e){t(e)}),"mouseup"==touchend&&this.obj.on("mouseleave",function(e){t(e)})}},sugar.swipe=t}();