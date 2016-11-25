/**
 * Created by ZhangMeng on 2016/11/20.
 */
window.onload = function () {
    //页面首次加载=====================================================================
    function firstLoad() {
        $(".xnet").css("zIndex", 1).siblings().css("zIndex", 0);
        $(".xnet").addClass("show").siblings().removeClass("show");
        $(".btn_product").css("display", "none");
        $(".product_list .png").stop().css({top: "-45px", opacity: 0});
        $(".xnet .png").animate({top: 0, opacity: "1"}, 1000, function () {
            $(".xnet .btn_product").stop().fadeIn(300);
        });
    }
    firstLoad();

    //1.侧边导航栏显示和隐藏================================================================
    //鼠标经过 更多 显示更多导航
    $("#nav_more").mouseover(function () {
        $("#more_nav").addClass("show");
    });

    //鼠标经过侧边导航栏 保持显示
    $("#more_nav").mouseover(function () {
        $(this).addClass("show");
    });

    //鼠标离开侧边导航栏 隐藏
    $("#more_nav").mouseout(function () {
        $(this).removeClass("show");
    });

    //鼠标经过每个侧边导航栏li 对应显示小圆点
    $("#h_nav>li").mouseover(function () {
        var index = $(this).index();
        $("#h_bdot").css("left", "18px");
        //$("#h_bdot").stop(true).animate({top: index * 69 + 106+"px"}, 50);//jQuery动画
        $("#h_bdot").css("top", index * 69 + 106 + "px");//CSS3属性
    });

    //鼠标离开侧边导航栏 小圆点消失
    $("#h_nav").mouseout(function () {
        $("#h_bdot").css("left", "-9999px");
        $("#h_bdot").css("top", "106px");
    });

    //2.主体部分 背景图和产品盒子的切换==================================================
    var isPrime = true;//记录三个盒子点击状态
    var downTimer = null;//三个盒子点击定时器
    var index = 0;//当前页面索引
    var timer = null;//轮播图定时器id
    var netBtn = $("#product_btns a")[0];//迅雷下载
    var memberBtn = $("#product_btns a")[1];//会员
    var avBtn = $("#product_btns a")[2];//影音

    //给三个盒子添加判定（是否鼠标经过 是否被点击 是否是轮播图模拟的鼠标经过事件）
    $("#product_btns a").attr("isOnBtn", false);
    $("#product_btns a").attr("isClicked", false);
    $("#product_btns a").attr("isNextPlay", false);

    //当前产品盒子获取指示器方法
    function getCur(obj) {
        obj.siblings().removeClass("cur");
        obj.siblings().attr("isClicked", false);
        obj.addClass("cur");
        obj.attr("isClicked", true);
    }

    //设定轮播图定时器
    timer = setInterval(nextPlay, 3000);
    //背景图轮播方法
    function nextPlay() {
        index++;
        var sss = index % 3;
        switch (sss) {
            case 0:
                netBtn.isNextPlay = true;
                console.log(netBtn.isNextPlay);
                $("#product_btns a")[0].onmouseover();
                break;
            case 1:
                memberBtn.isNextPlay = true;
                console.log(memberBtn.isNextPlay);
                $("#product_btns a")[1].onmouseover();
                break;
            case 2:
                avBtn.isNextPlay = true;
                console.log(avBtn.isNextPlay);
                $("#product_btns a")[2].onmouseover();
                break;
        }
    }

    //2.1三个产品盒子鼠标经过事件
    //下载链接鼠标经过
    netBtn.onmouseover = function () {
        if (!netBtn.isNextPlay) {
            clearInterval(timer);
        }
        index = 0;
        clearTimeout(downTimer);
        this.isOnBtn = true;
        getCur($(this));
        //切换图片 先判定是否处于显示状态 如果已经处于显示状态 就不再执行动画
        if (!$(".xnet").hasClass("show")) {
            $(".xnet").css("zIndex", 1).siblings().css("zIndex", 0);
            $(".xnet").addClass("show").siblings().removeClass("show");
            $(".xnet").stop().fadeIn(600).siblings().stop().fadeOut(500);
            //将所有文字框先隐藏
            $(".btn_product").css("display", "none");
            //先将文字框位置向上移45px 透明度为0
            $(".product_list .png").stop().css({top: "-45px", opacity: 0});
            //动画效果 从上面缓缓移入 透明度逐渐变为1
            $(".xnet .png").animate({top: 0, opacity: "1"}, 1000, function () {
                //加回调函数 文字框淡入
                $(".xnet .btn_product").stop().fadeIn(300);
            });
        }
        //产品盒子下方指示器
        $("#ic_line").stop(true).animate({left: $(this).index() * 100 + "px"}, 200);
        if (avBtn.isClicked) {
            $("#xav_download").removeClass("show");
            avBtn.isClicked = false;
            isPrime = true;
        }
        if (isPrime) {
            //$("#product_btns").stop(true).animate({bottom:"90px"}, 300);//jQuery动画
            $("#product_btns").removeClass("down");//CSS3属性
        }
        if (netBtn.isNextPlay) {
            netBtn.isNextPlay = false;
        }
    };

    //会员鼠标经过
    memberBtn.onmouseover = function () {
        if (!memberBtn.isNextPlay) {
            clearInterval(timer);
        }
        index = 1;
        getCur($(this));
        //切换图片
        //先判定是否处于显示状态 如果已经处于显示状态 就不再执行动画
        if (!$(".member").hasClass("show")) {
            $(".member").css("zIndex", 1).siblings().css("zIndex", 0);
            $(".member").addClass("show").siblings().removeClass("show");
            $(".member").stop().fadeIn(600).siblings().stop().fadeOut(500);
            //将所有文字框先隐藏
            $(".btn_product").css("display", "none");
            //先将文字框位置向上移45px 透明度为0
            $(".product_list .png").stop().css({top: "-45px", opacity: 0});
            //动画效果 从上面缓缓移入 透明度逐渐变为1
            $(".member .png").animate({top: 0, opacity: "1"}, 1000, function () {
                //加回调函数 文字框淡入
                $(".member .btn_product").stop().fadeIn(300);
            });
        }
        //产品盒子下方指示器
        $("#ic_line").stop(true).animate({left: $(this).index() * 100 + "px"}, 200);
        $("#product_btns").removeClass("down");
        //$("#product_btns").animate({bottom:"90px"}, 300);
        $("#xnet_download").removeClass("show");
        $("#xav_download").removeClass("show");
        netBtn.isClicked = false;
        avBtn.isClicked = false;
        isPrime = true;
        if (memberBtn.isNextPlay) {
            memberBtn.isNextPlay = false;
        }
    };

    //影音鼠标经过
    avBtn.onmouseover = function () {
        if (!avBtn.isNextPlay) {
            clearInterval(timer);
        }
        index = 2;
        clearTimeout(downTimer);
        this.isOnBtn = true;
        getCur($(this));
        //切换图片
        //先判定是否处于显示状态 如果已经处于显示状态 就不再执行动画
        if (!$(".xav").hasClass("show")) {
            $(".xav").css("zIndex", 1).siblings().css("zIndex", 0);
            $(".xav").addClass("show").siblings().removeClass("show");
            $(".xav").stop().fadeIn(600).siblings().stop().fadeOut(500);
            //将所有文字框先隐藏
            $(".btn_product").css("display", "none");
            //先将文字框位置向上移45px 透明度为0
            $(".product_list .png").stop().css({top: "-45px", opacity: 0});
            //动画效果 从上面缓缓移入 透明度逐渐变为1
            $(".xav .png").animate({top: 0, opacity: "1"}, 1000, function () {
                //回调函数 文字框淡入
                $(".xav .btn_product").stop().fadeIn(300);
            });
        }
        $("#ic_line").stop(true).animate({left: $(this).index() * 100 + "px"}, 200);
        if (netBtn.isClicked) {
            $("#xnet_download").removeClass("show");
            netBtn.isClicked = false;
            isPrime = true;
        }
        if (isPrime) {
            $("#product_btns").removeClass("down");
            //$("#product_btns").animate({bottom:"90px"}, 300);
        }
        if (avBtn.isNextPlay) {
            avBtn.isNextPlay = false;
        }
    };

    //2.2三个产品盒子点击事件
    //下载链接点击
    netBtn.onclick = function () {
        if (isPrime) {
            clearTimeout(downTimer);
            hideFooter();
            $("#product_btns").addClass("down");
            //$("#product_btns").animate({bottom:"110px"}, 300);
            $("#xnet_download").addClass("show");
        } else {
            $("#product_btns").removeClass("down");
            //$("#product_btns").animate({bottom:"90px"}, 300);
            $("#xnet_download").removeClass("show");
        }
        this.isClicked = isPrime;
        isPrime = !isPrime;
    };
    //会员点击
    memberBtn.onclick = function () {

    };
    //影音点击
    avBtn.onclick = function () {
        if (isPrime) {
            clearTimeout(downTimer);
            hideFooter();
            $("#product_btns").addClass("down");
            //$("#product_btns").animate({bottom:"110px"}, 300);
            $("#xav_download").addClass("show");
        } else {
            $("#product_btns").removeClass("down");
            //$("#product_btns").animate({bottom:"90px"}, 300);
            $("#xav_download").removeClass("show");
        }
        this.isClicked = isPrime;
        isPrime = !isPrime;
    };

    //2.3 三个盒子鼠标离开事件
    $("#xnet_download").mouseover(function () {
        clearTimeout(downTimer);
    });

    //鼠标离开下载盒子 并且离开下载区 设定定时器 隐藏下载区
    $("#xnet_download").mouseout(function () {
        if (!netBtn.isOnBtn) {
            downTimer = setTimeout(function () {
                $("#product_btns").removeClass("down");
                //$("#product_btns").animate({bottom:"90px"}, 300);
                $("#xnet_download").removeClass("show");
                netBtn.isClicked = false;
                isPrime = true;
            }, 3500);
        }
    });

    //下载链接鼠标离开 触发下载区鼠标离开事件
    netBtn.onmouseout = function () {
        this.isOnBtn = false;
        $("#xnet_download").mouseout();
        timer = setInterval(nextPlay, 5000);
    };

    //会员鼠标离开
    memberBtn.onmouseout = function () {
        timer = setInterval(nextPlay, 3000);
    };
    $("#xav_download").mouseover(function () {
        clearTimeout(downTimer);
    });
    $("#xav_download").mouseout(function () {
        if (!avBtn.isOnBtn) {
            downTimer = setTimeout(function () {
                $("#product_btns").removeClass("down");
                //$("#product_btns").animate({bottom:"90px"}, 300);
                $("#xav_download").removeClass("show");
                avBtn.isClicked = false;
                isPrime = true;
            }, 3500);
        }
    });

    //影音鼠标离开
    avBtn.onmouseout = function () {
        this.isOnBtn = false;
        $("#xav_download").mouseout();
        timer = setInterval(nextPlay, 3000);
    };

    //3.底部部分 召唤和隐藏底部==========================================================
    var bottomTimer = null;//底部定时器id
    //鼠标滚轮事件 显示和隐藏底部
    document.onmousewheel = function (event) {
        var event = eventUtil.getEvent(event);
        var wheelDelta = event.wheelDelta;
        if (!netBtn.isClicked && !avBtn.isClicked) {
            if (wheelDelta > 0) {
                hideFooter();
            } else if (wheelDelta < 0) {
                showFooter();
            }
        }
    };

    //显示底部方法
    function showFooter() {
        clearTimeout(bottomTimer);
        $("#product_btns").addClass("show");
        //$("#product_btns").animate({bottom:"116px"}, 300);
        $("#footer").addClass("show");
        $("#rpt_bg").addClass("show");
        bottomTimer = setTimeout(hideFooter, 2000);
    }

    //隐藏底部方法
    function hideFooter() {
        $("#product_btns").removeClass("show");
        //$("#product_btns").animate({bottom:"90px"}, 300);
        $("#footer").removeClass("show");
        $("#rpt_bg").removeClass("show");
    }

    //底部下载项目的经过效果
    $(".download_box a").mouseover(function () {
        $(this).stop().animate({top: "-4px"}, 300);
    });

    $(".download_box a").mouseout(function () {
        $(this).stop().animate({top: 0}, 300);
    });
};