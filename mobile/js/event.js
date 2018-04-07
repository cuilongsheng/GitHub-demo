var eventObj = {
    // 获取元素
    getElement: function(id) {
        return document.getElementById(id);
    },
    //获取事件
    getEvent: function(e) {
        return e ? e : window.event;
    },
    //获取事件类型
    getEventType: function(e) {
        return e.type;
    },
    //获取事件节点
    getEventNode: function(event) {
        return event.target || event.srcElement;;
    },
    // 添加事件处理程序
    addEventHandlar: function(element, type, handlar) {
        if (element.addEventListener) {
            element.addEventListener(type, handlar, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handlar);
        } else {
            element['on' + type] = handlar;
        }
    },
    // 删除事件处理程序
    removeEventHandlar: function(element, type, handlar) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handlar, false);
        } else if (element.attachEvent) {
            element.detachEvent('on' + type, handlar);
        } else {
            element['on' + type] = null;
        }
    },
    // 阻止事件冒泡
    stopBubble: function(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },
    //阻止浏览器默认事件
    preventDefault: function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },


}