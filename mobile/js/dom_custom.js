function showMes() {
    alert('Hello World!');
}

function showMessage() {
    alert("hello 崔龙生!");
}

function showValue() {
    alert(this.value);
}

function showNode(e) {

    eventObj.preventDefault(e);
    eventObj.stopBubble(e);
    alert(e.target.id);

}
// 事件处理程序 ,某一个元素,使用何种时间处理程序,触发了什么函数
var btn3 = document.getElementById('btn3');
btn3.onclick = function() {
    alert(this.value);
};
btn3.onclick = null;
var btn4 = document.getElementById('btn4');
btn4.addEventListener('click', showValue, false);
// btn4.removeEventListener('click', showValue, false);

var btn5 = document.getElementById('btn5');
eventObj.addEventHandlar(btn5, 'click', showValue);

var btn6 = document.getElementById('btn6');
eventObj.addEventHandlar(btn6, 'click', showNode);
var box = document.getElementById('box');
eventObj.addEventHandlar(box, 'click', showMes);

var btn7 = document.getElementById('btn7');
eventObj.addEventHandlar(btn7, 'click', showMessage);

var btn8 = eventObj.getElement('btn8');
eventObj.addEventHandlar(btn8, 'click', showValue);
eventObj.getEvent('click');