/**
 * Created by jf on 2016/7/29.
 */

function getEvent(event) {
    return event || window.event;
}
function getPageX(event) {
    return event.pageX || event.clientX + document.documentElement.scrollLeft;
}
function getPageY(event) {
    return event.pageY || event.clientY + document.documentElement.scrollTop;
}
function stopPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
function getTarget(event) {
    return event.target || event.srcElement;
}


var eventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },
    getPageY: function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    }
};