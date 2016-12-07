window.onload = function banner() {
	// 1.自动轮播
	// 获取轮播图的大盒子
	var banner = document.querySelector(".travel_banner");
	//获取图片的宽度，即轮播图大盒子的宽度
	var width = banner.offsetWidth;
	//图片盒子
	/*图片盒子*/
	var imageBox = banner.querySelector('ul:first-child');
	/*点盒子*/
	var pointBox = banner.querySelector('ul:last-child');
	/*所有的点*/
	var points = pointBox.querySelectorAll('li');

	// 公用方法
	// 添加过去
	var addTransition = function(){
		imageBox.style.webkitTransition = "all .2s";/*兼容*/
		imageBox.style.transition = "all .2s";
	}
	/*删除过度*/
	var removeTransition = function(){
		imageBox.style.webkitTransition = "none";/*兼容*/
		imageBox.style.transition = "mone";
	}
	/*设置定位*/
	var setTranslateX = function(x){
		imageBox.style.webkitTransform = "translateX("+x+"px)";
		imageBox.style.transform = "translateX("+x+"px)";
	}

	//当前默认的索引
	var index = 1;
	//轮播定时器
	var timer = setInterval(function() {
		index++;
		imageBox.style.webkitTransition = "all .2s";
		imageBox.style.transition = "all .2s";
		/*给imageBox加上过度*/
		addTransition();
		/*给imageBox设置当前的位置 */
		setTranslateX(-index*width);
	},3000);
	//无缝滚动和滑动
	//谷歌并不兼容transitionEnd，要加前缀
	transition.End(imageBox,function() {
		if (index >= 9) {
			index = 1;
			removeTransition();
			setTranslateX(-index * width);
		} else if (index <= 0) {
			index = 8;
			setTranslateX(-index * width);
		}
		//设置点的样式
		setPoint();
	});
	// 2.圆点随着图片轮播做改变，对应当前图片的位置
	var setPoint = function() {
		// 去除当前样式
		for (var i = 0; i < points.length; i++) {
			points[i].className = " ";
		}
		// 索引值0-9，又需要判断索引在0或者9的时候的情况，动画结束时index已经重置
		// 没必要再次重置，重置后的index 1-8
		points[index - 1].className = "now";
	};
	// 3.图片盒子能滑动
	// 开始的时候X坐标
	var startX = 0;
	// 移动的时候的X的坐标
	var moveX = 0;
	//每次滑动的时候移动的距离
	var distanceX = 0;
	//判断是否滑动过
	var isMove = false;
	//绑定事件
	imageBox.addEventListener("touchstart", function(e) {
		clearInterval(timer);
		startX = e.touches[0].clientX;
	});
	imageBox.addEventListener("touchmove", function(e) {
		isMove = true;
		moveX = e.touches[0].clientX;
		//滑动的距离
		distanceX = moveX - startX;
		//在滑动的时候不断给图片盒子做定位，来达到滑动的效果
		//定位的位置是当前的图片的定位 加上移动的距离
		// 清除0.2s的过渡
		removeTransition();
		setTranslateX(-index * width + distanceX);
	});
	imageBox.addEventListener("touchend", function(e) {
	// 为了保证严谨，需要同时判断是否滑动过
	if (Math.abs(distanceX) > (width / 3) && isMove) {
		//5.滑动超过一定距离的时候，图片做相应的滚动，左或右
		if (distanceX > 0) {
			//向右滑,上一张
			index--;
		} else {
			//向左滑，下一张
			index++;
		}
		addTransition();
		setTranslateX(-index * width);
	} else {
		// 4.滑动的时候不超过一定距离（1/3）的时候，吸附回去
		addTransition();
		setTranslateX(-index * width);
	}

		startX = 0;
		moveX = 0;
		distanceX = 0;
		clearInterval(timer);
		timer = setInterval(function() {
			index++;
			imageBox.style.webkitTransition = "all .2s";
			imageBox.style.transition = "all .2s";
			/*给imageBox加上过度*/
			addTransition();
			/*给imageBox设置当前的位置 */
			setTranslateX(-index*width);
		},3000);
	});
	
};

// 倒计时
// 
function countDown() {
	//1.得到需要倒计时的事件，这是后台给的，这里设置为5个小时
	// 倒计时的时间
	var time = 5 * 60 * 60;
	// 获取dom
	var sktime = document.querySelector(".sk_time");
	// 所有的span
	var spans = sktime.querySelectorAll("span");
	// 定时器
	var timer = setInterval(function() {
		time--;
		if (time < 0) {
			clearInterval(timer);
			return false;
		}
		// 格式化时间  得到 时 分 秒
		var h = Math.floor(time / 3600);
		var m = Math.floor(timer % 3600) / 60;
		var s = time % 60;
		/*渲染*/
		spans[0].innerHTML = Math.floor(h/10);
		spans[1].innerHTML = h%10;

		spans[3].innerHTML = Math.floor(m/10);
		spans[4].innerHTML = m%10;

		spans[6].innerHTML = Math.floor(s/10);
		spans[7].innerHTML = s%10;
	})
	//2.每隔一秒来计算当前的时间格式
	//3.渲染在页面中
	
}