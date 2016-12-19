// /**
//  * Created by Administrator on 2016/12/9.
//  */
function loopsPlay(bannerClassName) {
    var banner = document.querySelector(bannerClassName);
    var imgBox = banner.querySelector("ul:first-child");
    var pointsBox = banner.querySelector("ul:last-child");
    var points = pointsBox.querySelectorAll("li");
    var index = 1;
    var width = banner.offsetWidth;
    var addTransition = function () {
        imgBox.style.webkitTransition = "all .2s";
        imgBox.style.transition = "all .2s";
    };
    var removeTransition = function () {
        imgBox.style.webkitTransition = "none";
        imgBox.style.transition = "none";
    };
    var setTranslateX = function (x) {
        imgBox.style.webkitTransform = "translateX(" + x + "px)";
        imgBox.style.transform = "translateX(" + x + "px)";
    };
    var transitionEnd = function (dom, callback) {
        if (dom && typeof dom === "object") {
            dom.addEventListener("webkitTransitionEnd", function () {
                callback && callback();
            });
            dom.addEventListener("transitionEnd", function () {
                callback && callback();
            });
        }
    };

    function loopsAnimate() {
        index++;
        addTransition();
        setTranslateX(-index * width);
    }
    var timer = setInterval(loopsAnimate, 1000);
    transitionEnd(imgBox, function () {
        if (index >= 5) {
            index = 1;
            removeTransition();
            setTranslateX(-index * width);
        } else if (index <= 0) {
            index = 4;
            removeTransition();
            setTranslateX(-index * width);
        }
        setPoint();
    });
    var setPoint = function () {
        for (var i = 0; i < points.length; i++) {
            points[i].className = "";
        }
        points[index - 1].className = "now";
    };

    var startX = 0;
    var moveX = 0;
    var distance = 0;
    var isMove = false;
    imgBox.addEventListener("touchstart", function (e) {
        clearInterval(timer);
        startX = e.touches[0].clientX;
        console.log(startX);
    });
    imgBox.addEventListener("touchmove", function (e) {
        console.log("move");
        isMove = true;
        moveX = e.touches[0].clientX;
        distance = moveX - startX;
        removeTransition();
        setTranslateX(-index * width + distance);
    });
    window.addEventListener("touchend", function () {
        console.log(distance);
        if (Math.abs(distance) > (width / 3) && isMove) {
            if (distance > 0) {
                index--;
            } else {
                index++;
            }
            addTransition();
            setTranslateX(-index * width);
        } else {
            addTransition();
            setTranslateX(-index * width);
        }
        startX = 0;
        moveX = 0;
        distance = 0;
        isMove = false;
        // clearInterval(timer);
        timer = setInterval(loopsAnimate, 1000);
    });
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(loopsPlay(".banner"));





