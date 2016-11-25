/**
 * Created by Administrator on 2016/11/4.
 */

/**
 * 获取对象内部文本
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

/**
 * 设置对象内部文本
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

/**
 * 获取当前元素的第一个子元素
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var ele = element.firstChild;
        while (ele && 1 !== ele.nodeType) {
            ele = ele.nextSibling;
        }
        return ele;
    }
}

/**
 * 获取当前元素的最后一个子元素
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var ele = element.lastChild;
        while (ele && 1 !== ele.nodeType) {
            ele = ele.previousSibling;
        }
        return ele;
    }
}

/**
 * 封装 通过类名获取内部元素对象的兼容方法
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    } else {
        var filterArr = [];
        var elements = element.getElementsByTagName("*");
        for (var i = 0; i < elements.length; i++) {
            var nameArr = elements[i].className.split(" ");
            for (var j = 0; j < nameArr.length; j++) {
                if (nameArr[j] === className) {
                    filterArr.push(elements[i]);
                    break;
                }
            }
        }
        return filterArr;
    }
}

/**
 * 封装 获取任意对象任意的计算后样式属性的方法
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

/**
 * 封装client() 获取可视区宽高 处理兼容问题
 * .width 获取页面可视区页面宽度
 * .height 获取页面可视区页面高度
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}


/**
 * 通过id获取页面元素
 * @param id
 * @returns {Element}
 */
function getObject(id){
    return document.getElementById(id);
}

/**
 * 增加类名
 * @param obj
 * @param className
 */
function addClassName(obj, className){
    if (obj.className.indexOf(className) === -1) {
        obj.className = obj.className+ " "+className;
    }
}

/**
 * 移除最后一个类名
 * @param obj
 * @param oldStr
 */
function removeClassName(obj, oldStr) {
    if (obj.className.indexOf(oldStr) !== -1) {
        var arr = obj.className.split(" ");
        arr.pop();
        obj.className = arr.join(" ");
    }
}










