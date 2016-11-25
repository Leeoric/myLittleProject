/**
 * Created by Administrator on 2016/11/22.
 */

//-----------------------页面1点击事件B--------------------
//点击切换
$("#top1").on("click", function () {
    clearInterval(timer6);
    if ($(".light1, .light2,.light3,.light4,.light5,.lightbox,.page3plan").is(":animated")) {
        $(".light1, .light2,.light3,.light4").stop(true, true).css("left", "2999px");
        $(".light5").stop(true, true).css({"left": "-580px", "opacity" : "0"});
        $(".lightbox").stop(true, true).css({"left": "-576px", "top": "401px"});
        $(".page3plan").stop(true, true).css({"width": "1px","height": "1px"})
    }
    //点击top1时，page1显示，其他的兄弟元素section隐藏
    $("#page1").show().siblings("section").hide();
    //背景图片所在的div，淡入显示
    $("#bgimg").fadeIn(500).show();
    //切换到此页面时，page3的星球尺寸需要归0
    planScale = 0;
    //按钮高亮
    $("#top1").addClass("active").siblings("span").removeClass("active");
    pageIndex = 0;
    timer6 = setInterval(loopPlay, 5000);
});
//-----------------------页面1点击事件E--------------------

//-----------------------页面2点击事件B--------------------
// $("#top2").on("click", function () {
//         clearInterval(timer6);
//     if ($(".light1, .light2,.light3,.light4,.light5,.lightbox,.page3plan").is(":animated")) {
//         $(".light1, .light2,.light3,.light4").stop(true, true).css("left", "2999px");
//         $(".light5").stop(true, true).css({"left": "-580px", "opacity" : "0"});
//         $(".lightbox").stop(true, true).css({"left": "-576px", "top": "401px"});
//         $(".page3plan").stop(true, true).css({"width": "1px","height": "1px"})
//     }
//     //点击top2时，page2显示，其他的兄弟元素section以及bgimg隐藏
//     $("#page2").show().siblings("section").hide();
//     //切换到此页面时，page3的星球尺寸需要归0
//     planScale = 0;
//     //点击事件开始时，自动开始轮播时从当前页面开始
//     $("#top2").addClass("active").siblings("span").removeClass("active");
//         pageIndex = 1;
//     timer6 = setInterval(loopPlay, 5000);
// });
//-----------------------页面2点击事件E--------------------

//-----------------------页面3点击事件B--------------------
//timer1是page3星球图放大的定时器，声明为全局变量方便在函数外面取消定时器
var timer1 = null;
//planScale是page3的星球放大初始值，声明为全局变量以方便在其他地方重新设置
var planScale = 0;

$("#top3").on("click", function () {
    clearInterval(timer6);
    if ($(".light1, .light2,.light3,.light4,.light5,.lightbox,.page3plan").is(":animated")) {
        $(".light1, .light2,.light3,.light4").stop(true, true).css("left", "2999px");
        $(".light5").stop(true, true).css({"left": "-580px", "opacity" : "0"});
        $(".lightbox").stop(true, true).css({"left": "-576px", "top": "401px"});
        $(".page3plan").stop(true, true).css({"width": "1px","height": "1px"})
    }
    //点击top3时，page3显示，其他的兄弟元素section以及bgimg隐藏
    $("#page3").show().siblings("section").hide();
    $(".page3plan").animate({
        "width": "1300px",
        "height": "1300px"
    },10000);
    $("#page3text").show();
    $("#top3").addClass("active").siblings("span").removeClass("active");
    pageIndex = 1;
    timer6 = setInterval(loopPlay, 5000);
});
//-----------------------页面3点击事件E--------------------

//-----------------------页面4点击事件B--------------------
//点击top4的时候，在page3的基础上，飞过流星，显示文字4，隐藏文字3
//flag是判断动画是否执行完毕的标记，只有它的值是true时，才会再次执行动画，避免重复调用的问题
$("#top4").on("click", function () {
    clearInterval(timer6);
    if ($(".light1, .light2,.light3,.light4,.light5,.lightbox").is(":animated")) {
        $(".light1, .light2,.light3,.light4").stop(true, true).css("left", "2999px");
        $(".light5").stop(true, true).css({"left": "-580px", "opacity" : "0"});
        $(".lightbox").stop(true, true).css({"left": "-576px", "top": "401px"});
    }
    //加上siblings.hide是因为从其他页面跳转的话，需要隐藏其他页面
    $("#page4, #page4text").show().siblings(".page1, .page2").hide();
    $("#page3").show();
    $("#page3text").hide();
    $(".page3plan").animate({
        "width": "1300px",
        "height": "1300px"
    },10000);
    //流星从右方飞入，减速向左约100px，再向左侧飞出
    if (!$(".light1, .light2,.light3,.light4,.light5,.lightbox").is(":animated")) {
        $(".light1").animate({left: "550px"}, 1800, function () {
            $(".light5").animate({opacity: 1}, 300)
                .animate({opacity: 0}, 100)
                .animate({left: '-=100px'}, 750)
                .animate({opacity: 1}, 300)
                .animate({opacity: 0}, 100)
                .animate({left: '+=100px'}, 0)
        })
            .animate({left: '-=100px'}, 1500)
            .animate({left: '-1999px'}, 1000)
            .animate({left: '2999px'}, 0);

        $(".light2").animate({left: "740px"}, 1800)
            .animate({left: '-=100px'}, 1500)
            .animate({left: '-1999px'}, 1000)
            .animate({left: '2999px'}, 0);

        $(".light3").animate({left: "460px"}, 1800)
            .animate({left: '-=100px'}, 1500)
            .animate({left: '-1999px'}, 1000)
            .animate({left: '2999px'}, 0);

        $(".light4").animate({left: "320px"}, 1800)
            .animate({left: '-=100px'}, 1500)
            .animate({left: '-1999px'}, 1000, function () {
                $(".lightbox").animate({left: '+=1200px', top: '-=1000px'}, 800)
                $(".lightbox").animate({left: '-=1200px', top: '+=1000px'}, 0);
            })
            .animate({left: '2999px'}, 0);
    }

    $("#top4").addClass("active").siblings("span").removeClass("active");
    pageIndex = 2;
    timer6 = setInterval(loopPlay, 5000);
});
//-----------------------页面4点击事件E--------------------

//timer6是自动轮播定时器
var timer6 = null;
//轮播序号
var pageIndex = 0;

//当定时器没执行时，设置第一个按钮样式
$("#top1").addClass("active").siblings("span").removeClass("active");
//timer6为轮播定时器，每5000毫秒执行一次
//基于一般电脑CPU的计算能力，设置为5000，PAGE4的流星动画可以执行完
timer6 = setInterval(loopPlay, 5000);
function loopPlay() {
    pageIndex++;
    // var num = pageIndex % 4;
    var num = pageIndex % 3;
    switch (num) {
        case 0:
            // console.log("函数中：top4");
            $("#top1").click();
            break;
        case 1:
            // console.log("函数中：top1");
            // $("#top2").click();
            // break;
            // console.log("函数中：top2");
            $("#top3").click();
            break;
        case 2:
            // console.log("函数中top3");
            $("#top4").click();
            break;
        // case 3:
            // console.log("函数中top3");
            // $("#top4").click();
            // break;
    }
    // console.log("即将执行点击:"+ (zhangMeng + 1));
}
// setInterval(function () {
//     console.log("实时pageIndex： " + pageIndex);
// }, 15);