var myHeading = document.querySelector('h1');
myHeading.innerHTML = "HelloWorld";
// alert('hello!');

console.log(parseInt("12a35"));
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    console.log("判断正确");
} else {
    console.log("判断错误");
}

function multiply(a, b) {
    return result = a * b;
}
console.log(multiply(3, 4));
console.log(multiply(5, 8));

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/2.jpg') {
        console.log(1);
        myImage.setAttribute('src', 'images/3.jpg');
    } else {
        console.log(2);
        myImage.setAttribute('src', "images/2.jpg");

    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please inter your name!');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'MDN is cool,' + myName;
}
myButton.onclick = function() {
    setUserName();
}
var a = 1;
if (!a < 0) {
    console.log('yes');
} else {
    console.log('no');
}

var button2 = document.querySelector('.testboolean');
button2.onclick = function() {
    testBoolean();
}

function testBoolean() {
    var str = prompt('请输入一个字符串');
    if (str.length > 3) {
        alert('输入正确');
        return true;
    } else {
        alert(`您输入的字符串${str}长度不够,请重新输入`);
        testBoolean();
    }
}

var testIf = document.querySelector('.testIf');
testIf.onclick = function() {
    var string = prompt(`请输入语句!`);
    if (string.length == 11) {
        alert('输入正确');
    } else {
        alert('请输入11位');
    }
}

var testSwitch = document.querySelector('.testSwitchCase');
testSwitch.onclick = function() {
    mySwitch();
}

function mySwitch() {
    var str = prompt('输入一个数字!(1-10)');
    console.log(typeof(str));
    switch (str) {
        case '1':
            console.log(1);
            break;
        case '2':
            console.log(2);
            break;
        case '3':
            console.log(3);
            break;
        case '4':
            console.log(4);
            break;
        case '5':
            console.log(5);
            break;
        case '6':
            console.log(6);
            break;
        case '7':
            console.log(7);
            break;
        case '8':
            console.log(8);
            break;
        case '9':
            console.log(9);
            break;
        case '10':
            console.log(10);
            break;
    }
    console.log('已经跳出语句');
}

// function UserException(message) {
//     this.message = message;
//     this.name = "UserException";
// }

// UserException.prototype.toString = function() {
//     return `${this.name}:"${this.message}"`;
// }
// throw new UserException('value too high');

function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
        throw (new Error('The message'));
    } else {
        doSomethingToGetAJavascriptError();
    }
}
try {
    doSomethingErrorProne();
} catch (e) {
    console.log(e.name); // logs 'Error'
    console.log(e.message); // logs 'The message' or a JavaScript error message)
}

// 测试for循环,todolist
var btn = document.getElementById('myBtn');
btn.onclick = function() {
    addList();
}

function addList() {
    var val = document.getElementById('myInput').value;

    var ul = document.getElementById('ulTest');
    var li = `<li>${val}</li>`;

    ul.insertAdjacentHTML('afterend', li);
}

var b = false;
var c = 1;
var a = b || c;
console.log(a);
// var lists = ['北京', '上海', '南京', '广州', '深圳', '郑州'];
function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}
var btn2 = document.getElementById('btn');
btn2.addEventListener('click', function() {
    alert('选择的数量是:' + howMany(document.selectForm.musicTypes));
});

var a = ['one', 'two', 'three'];
a.foo = "hello World!";

for (let j of a) {
    for (let i of a) {
        console.log(j + ":" + i);
    }
}

function changeName(theObject) {
    return theObject.name = "Toyota"
}

var myCar = {
    name: 'Honda',
    model: 'Accord',
    year: 1998
}
var x, y;
x = myCar.name;
changeName(myCar);
y = myCar.name;
console.log(x);
console.log(y);

var aa = 1;

function changeValue(a) {
    a = 2;
}

changeValue(aa);
console.log(aa);
console.log("-----------------------------------------------------------------------------------------------------");

function factorial(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
var a, b, c, d, e;
a = factorial(1);
b = factorial(2);
c = factorial(3);
d = factorial(4);
e = factorial(5);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("-----------------------------------------------------------------------------------------------------");
var num1 = 20,
    num2 = 3,
    name = "cuilongsheng";

function multiply() {
    return num1 * num2;
}

var m = multiply();
console.log(m);

function getScore(num1, num2) {
    function add() {
        return name + " scored: " + (num1 + num2);
    }
    return add();
}
var g = getScore(89, 90);
console.log(g);

var x = 0;
while (x < 10) { // "x < 10" 是循环条件
    // do stuff
    x++;
    console.log(x);
}
console.log("-----------------------------------------------------------------------------------------------------");

function loop(x) {
    if (x >= 10) // "x >= 10" 是退出条件（等同于 "!(x < 10)"）
        return;
    // 做些什么
    loop(x + 1); // 递归调用
    console.log("loop= " + x);
}
loop(0);

function loop2(x) {
    if (x < 0) // "x >= 10" 是退出条件（等同于 "!(x < 10)"）
        return;
    console.log("loop2= " + x);
    // 做些什么
    loop2(x - 1); // 递归调用
    console.log("loop2= " + x);
}
loop2(10);
console.log("-----------------------------------------------------------------------------------------------------");
var myNode = document.querySelector('button');

function walkTree(node) {
    if (node == null) {
        return;
    }
    for (var i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
        console.log(node);
    }
}
var w = walkTree(myNode);

function foo(i) {
    if (i < 0) {
        return foo;
    }
    console.log("begin: " + i);
    foo(i - 1);
    console.log('end:' + i);
}
foo(3);


function fun(n) {
    if ((n == 0) || (n == 1)) {
        return 1;
    } else {
        var a = (n * fun(n - 1));
        console.log(a);
        return a;
    }
}
// fun(3);
var fu = fun(3);
console.log("fun = " + fu);

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3);
b = addSquares(3, 4);
c = addSquares(5, 5);

console.log(a);
console.log(b);
console.log(c);

function outSide(x) {
    function inSide(y) {
        console.log(x);
        console.log(y);
        return x + y;
    }
    return inSide;
}
var fn_inside = outSide(3);
console.log(fn_inside);
console.log("-----------------------------------------------------------------------------------------------------");
result = fn_inside(5);
console.log(result);
var result2 = outSide(5)(3);
console.log(result2);

console.log("-----------------------------------------------------------------------------------------------------");

function a() {
    var x = 5;

    function b(x) {
        return 2 * x;
    }
    return b;
}
// console.log(a()(10));
//Number对象
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
console.log(biggestNum);
console.log(smallestNum);
console.log(infiniteNum);
console.log(negInfiniteNum);
console.log(notANum);
var a = "A";
console.log(Number.parseInt(a));
var b = "12";
console.log(Number.parseInt(b));
//Match对象

console.log(Math.PI);
console.log(Math.sin(1.56));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5, 12, 6, 8));
var arr = [1, 3, 4, 5, 7, 9, 10, 2, 56];

console.log(Math.random());

// Data
var now = new Date();
console.log(now);
var ti = new Date("2000/12/18 00:00:00");
console.log(ti);



// var nowDate = `${date}  ${nowTime}`;
// console.log(nowDate);

Date.prototype.format = function(date) {
    var year = date.getFullYear();
    var day = date.getDate();
    // console.log(day);
    var month = date.getMonth() + 1;
    // console.log(month);
    var date = `今天是: ${year}年${month}月${day}日`;
    // console.log(date);
    var hour = date.getHours();
    var second = date.getMinutes();
    var time = date.getSeconds();
    var dateTime = `${hour}:${second}:${time}`;
    // console.log(dateTime);
    return dateTime;
}

var Xmas95 = new Date("December 25, 1995 13:30:00");
console.log(Xmas95);
var Xmas96 = new Date(1995, 11, 25, 9, 30, 0);
console.log(Xmas96);
var tody = new Date();
console.log(tody);
var m = tody.getDay();
console.log(m);
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
console.log(IPOdate);

var s1 = "2+2";
var s2 = new String("2+2");
console.log(s1);
console.log(typeof(s1));
console.log(s2);
console.log(typeof(s2));
//字符串
var str = "Hello World!";
console.log(str.length); //12
console.log(str.charAt(2)); //l
console.log(str.charCodeAt()); //72
console.log(str.codePointAt()); //72
console.log(str.indexOf('ll')); //2
console.log(str.lastIndexOf('l')); //9
console.log(str.startsWith('Hell')); //true
console.log(str.endsWith('!')); //true
console.log(str.includes("Wor")); //true
var str2 = " 您好!";
var newStr = str.concat(str2);
console.log(newStr); //Hello World! 您好!
console.log(String.fromCharCode('65')); //A
console.log(String.fromCodePoint('65')); //A
console.log(str.split('')); //["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]
console.log(str.split(' '));
var str3 = 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split';
var arr3 = str3.split('/');
console.log(arr3);
var str4 = 'http://mall.icbc.com.cn/searchproducts/pv.jhtml?searchType=DISPLAYCATEGORY&displayCatId=000000000010348';
var arr4 = str4.split('?');
var str5 = arr4[1];
console.log(str5);
console.log("-----------------------------------------------------------------------------------------------------");
var arr5 = str5.split('&');
console.log(arr5);

var str6 = "new String";
console.log('截取字符串:');
console.log(str6.slice(0, 3));
console.log(str6.substring(0, 3));
console.log(str6.substr(0, 3));

var str7 = "Apples are round, and apples are juicy.";
var re = /apples/gi;
var newStr2 = str7.replace(re, "oranges");
console.log(newStr2);

var str8 = "   foo  ";
console.log(str8.trim());
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
}

var str9 = "an A";
var str10 = "And";
var reg1 = /^n/;
var reg2 = /A$/;
var reg3 = /^n?$/;
console.log(str9.search(reg1));
console.log(str9.search(reg2));
console.log(str9.search(reg3));
var reg4 = /a(?=b)/;
var str11 = "abcd";
console.log(str11.search(reg4));
var reg5 = /(?:foo){1,2}/;
var str12 = "00000foooooooofoooo";
console.log(str12.search(reg5));
console.log("-----------------------------------------------------------------------------------------------------");
var str13 = "000崔龙生,国信追溯";
var reg6 = /崔龙生,(?=国信追溯)/;
console.log(str13.search(reg6));
console.log(reg6.exec(str13));
console.log(str13.match(reg6));
console.log("-----------------------------------------------------------------------------------------------------");
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log(myArray);
console.log(myRe);
console.log("-----------------------------------------------------------------------------------------------------");
var arr6 = new Array(2);
console.log(arr6[0]);
for (var i in arr6) {
    console.log(arr6[i]);
}
var arr7 = [1, 2, 3];
for (var i in arr7) {
    console.log(arr7[i]);
}

var arr8 = new Array(1, 2, 3);
for (var i in arr8) {
    console.log(arr8[i]);
}
var arr9 = [];
arr9[0] = 1;
arr9[1] = 2;

// 数组方法
var array1 = [1, 2, 3, 4, 5, 6],
    array2 = ['a', 'b', 'c', 'd', 'e'];
var array3 = array1.concat(array2);
console.log(array3);
console.log(array1.join());
console.log(array1.push(7));
console.log(array1.pop());
console.log(array1.shift());
console.log(array1.unshift(1));
console.log(array1.slice(2, 4));
console.log(array1.reverse());
console.log(array1.sort());
console.log(array1.indexOf(0));
console.log(array1.lastIndexOf(3));

// 按照首字母进行排序
var myName = new Array('cui', 'long', 'sheng', 'ab', 'ac', 'de');
console.log(myName.sort());
var sortName = function(a, b) {
    if (a[0] > b[0]) {
        return 1;
    } else if (a[0] = b[0]) {
        return 0;
    } else {
        return -1;
    }
}
var myName2 = myName.sort(sortName);
console.log(myName2);
console.log(myName.indexOf('long'));
console.log(myName[myName.indexOf('long')]);

function printArguments() {
    Array.forEach(arguments, function(item) {
        console.log(item);
    });
    Array.forEach("a string", function(chr) {
        console.log(chr);
    });
}
var numbers = [1, 2, 3, 4];
var doubled = numbers.map(ele => { //遍历每一个元素,返回的是新数组
    return ele * 2;
});
console.log(doubled);
var doubled2 = [];
numbers.forEach(e => { //遍历每一个元素,在callback中执行
    var newEle = e * 2;
    doubled2.push(newEle);
    // console.log(newEle);
});
console.log(doubled2);
var a2 = numbers.filter(e => { //过滤,只返回符合条件的元素组成的新数组
    if (e % 2 == 0) {
        return e;
    } else {
        return null;
    }
});
console.log(a2);
var a3 = numbers.every(e => { //判断是否所有元素都符合条件,否则返回false
    if (e % 2 == 0) {
        return e;
    } else {
        return null;
    }
});
console.log(a3);
var a4 = numbers.some(e => { //有一项符合条件就返回true
    if (e % 2 == 0) {
        return e;
    } else {
        return null;
    }
});
console.log(a4);
var a5 = numbers.reduce((e1, e2) => {
    return e1 * e2;
});
console.log(numbers);
console.log(a5);
var a6 = numbers.reduceRight((e1, e2) => { //从最后一个元素开始的
    return e1 * e2;
});
console.log(a6);

console.log("-----------------------------------------------------------------------------------------------------");
// 练习数组的方法
// 1, 对一个数组进行排序
var firstArr = [1, 4, 6, 8, 19, 21, 10, 12];
var secondArr = [1, a, 3, b, 8];
console.log(firstArr.sort(function(a, b) {
    return a - b;
}));
console.log(secondArr.sort(function(a, b) {
    return a - b;
}));

// 2, 对数组倒叙排序
var thirdArr = firstArr.sort(function(a, b) {
    return a - b;
})
console.log(thirdArr.reverse());
// 3, 合并两个数组并排序
var forthArr = firstArr.concat(secondArr);
var fifthArr = forthArr.sort((a, b) => {
    return a - b;
});
console.log(fifthArr);
console.log("-----------------------------------------------------------------------------------------------------");
// 4, 将字符串反向 'abc123' => '321cba
var firstStr = 'abc123';

// 5,打平嵌套数组 [1, [2, [3], 4], 5] => [1, 2, 3, 4, 5]
var sixArr = [1, [2, [3], 4], 5];
var sixStr = sixArr.join();
var sevenArr = sixStr.split(',');
console.log("-----------------------------------------------------------------------------------------------------");
var myArr10 = sevenArr.map(e => {
    return parseInt(e);
});
console.log(myArr10);
// 6,寻找两个有序数组最小相同元素
var arr11 = [1, 2, 5, 9, 10];
var arr12 = [3, 4, 6, 9, 10];

function getLittle(a, b) {
    var tenArr = a.concat(b);
    console.log(tenArr);
    var elevenArr = tenArr.sort(function(x, y) {
        return x - y;
    });
    console.log(elevenArr);
    var twelveArr = [];
    for (let i = 0; i < elevenArr.length; i++) {
        if (elevenArr[i + 1] == elevenArr[i]) {
            twelveArr.push(elevenArr[i]);
        }
    }
    return twelveArr[0]
}
console.log(getLittle(arr11, arr12));

// 7, 有序二维数组寻找某元素坐标
// const data = [
//         [1, 2, 5, 9, 10],
//         [12, 22, 35, 49, 51],
//         [61, 62, 75, 79, 81]
//     ]
// 1 排序
// 1.1 冒泡
// 1.2 选择
// 1.3 插入
// 1.4 希尔
// 1.5 快速
// 2 查找
// 2.1 线性查找
// 2.2 二分查找
// 2.2 .1 迭代
// 2.2 .2 递归
// 3 求最值
// 3.1 求最大值
// 3.2 求最小值
// 3.3 求次最大值
// 3.4 求次最小值
// 4 归并
// 4.1 有序归并
// 4.2 无序归并
// 5 去重


//Map
var sayings = new Map();
sayings.set('dog', 'woof');
console.log(sayings);
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
console.log(sayings.size);
console.log(sayings.has('dog'));
console.log(sayings.get('dog'));
console.log(sayings.get('cat'));
console.log(sayings.get('elephant'));
console.log(sayings);
sayings.delete('dog');
console.log(sayings.has('dog'));
sayings.clear();
console.log(sayings.size);

// Set
var mySet = new Set();
mySet.add(1);
console.log(mySet);
mySet.add("some text");
mySet.add("foo");
console.log(mySet);
console.log(mySet.has(1));
for (item of mySet) {
    console.log(item);
}
Array.from(mySet);
// [...mySet2];
// var mySet2 = new Set([1, 2, 3, 4]);
console.log(Array.from(mySet));
console.log([...mySet]);
var arr13 = [1, 1, 3, 3, 3, 4, 5, 6, 7, 7, 7, 7];
var arr14 = new Set(arr13);
console.log(arr14);
console.log([...arr14]);
// 数组去重
function delDouble(arr) {
    var newArr11 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArr11.push(arr[i]);
        }
    }
    return newArr11;
}
console.log('arr13去重后的结果为:');
console.log(delDouble(arr13));
console.log('求最大值和最小值: ');
var arr17 = delDouble(arr13);
var arr18 = arr17.sort(function(a, b) {
    return a - b;
});
var max = arr18[arr18.length - 1];
var min = arr18[0];
console.log('最大值:');
console.log(max);
console.log('最小值:');
console.log(min);
console.log("-----------------------------------------------------------------------------------------------------");
var dropArr = [1, 2, 3, 4, 5];
console.log(dropArr);
// var arr16 = dropArr.slice(2, 4);
// console.log(arr16);
var arr15 = dropArr.splice(1, 3, 'abc');
console.log(arr15);
console.log(dropArr);
console.log("-----------------------------------------------------------------------------------------------------");
// 对象
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);
var myCat = {
    'name': '小白',
    'age': 2,
    'color': 'white'
}
console.log(myCat);
// var myDog = Object.create();
// myDog.name = '大白';
// myDog.age = 2;
// myDog.color = 'white';
// console.log(myDog);
var myObj = new Object(),
    str = "my String",
    rand = Math.random(),
    obj = new Object();
console.log(myObj.type);
myObj[str] = 1;
console.log(myObj);
myObj.rand = 2;
myObj.obj = {};
console.log(myObj);

function showProps(obj, objName) {
    var result = "";
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + '.' + i + '=' + obj[i] + '\n';
        }
    }
    console.log(result);
    return result;
}
showProps(myCar, 'myCar');
console.log("-----------------------------------------------------------------------------------------------------");
// 枚举一个对象上的属性
// 1,for...in
// 2,Object.keys(obj);
// 3,Object.getOwnPropertyNames(o);
console.log('for...in');
var Person = {
    'name': '崔龙生',
    'age': 30,
    'sex': 'man'
};

function getProperty(obj) {
    for (let prop in obj) {
        // console.log(obj);
        console.log(`${prop}:${obj[prop]}`);
    }
}
getProperty(Person);
console.log('Object.keys(obj)');

function getAttr(obj) {
    let arr = Object.keys(obj);
    for (let o of arr) {
        console.log(`${o}:${obj[o]}`);
    }

    return arr;
}
getAttr(Person);
console.log('Object.getOwnPropertyNames(o)');

function getAttrs(obj) {
    let arr = Object.getOwnPropertyNames(obj);
    for (let o of arr) {
        console.log(`${o}:${obj[o]}`);
    }

    return arr;
}
getAttrs(Person);