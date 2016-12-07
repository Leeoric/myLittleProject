// 公用JS文件
//定义一个对象，承载封装的事件
var transition = {
	End : function(dom,callback){
		/* 需要绑定事件的dom  绑定之后  当触发了 事件的时候  执行 callback */
		if(dom && typeof  dom == 'object'){
			dom.addEventListener('webkitTransitionEnd',function(){
				/*if(callback){
					callback();
				}*/
				callback && callback();
			});
			dom.addEventListener('transitionEnd',function(){
				callback && callback();
			});
		}
	}
};