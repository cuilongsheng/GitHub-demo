$(function() {
        $('.form-check-input').on('change', function() {
            if ($(this).prop('checked')) {
                $(this).siblings().css({
                    'color': 'rgb(173, 39, 30)'
                });
                $(this).parent().siblings().find('label').css({
                    'color': '#000'
                });
            }
        });
        var ok1, ok2, ok3, ok4 = false;
        if ($('input[name="first"]').val() != "") {
            ok1 = true;
        }
        if ($('input[name="second"]').val() != "") {
            ok2 = true;
        }
        if ($('input[name="third"]').val() != "") {
            ok3 = true;
        }
        if ($('input[name="fourth"]').val() != "") {
            ok4 = true;
        }
        $('#submit').on('click', function() {
            if (ok1 && ok2 && ok3 && ok4) {
                alert("提交成功");
            } else {
                return false;
            }
        });
    })
    // ul+li分页
var zz = getzz()
var pageno = 1; //当前页
var pagesize = 8; //每页多少条信息
if (zz.length % pagesize == 0) {
    var pageall = zz.length / pagesize;
} else {
    var pageall = parseInt(zz.length / pagesize) + 1;
} //一共多少页
change(1);

function getzz() {
    var a = $("#all li");
    var zz = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
        zz[i] = a[i].innerHTML;
    } //div的字符串数组付给zz
    return zz;
}

function change(e) {
    pageno = e;
    if (e < 1) {
        e = 1;
        pageno = 1; //就等于第1页 ， 当前页为1
    }
    if (e > pageall) { //如果输入页大于最大页
        e = pageall;
        pageno = pageall; //输入页和当前页都=最大页
    }
    $("#all").html(""); //全部清空
    var html = "";
    for (var i = 0; i < pagesize; i++) {
        html += '<li>' + zz[(e - 1) * pagesize + i] + '</li>'; //创建一页的li列表
        if (zz[(e - 1) * pagesize + i + 1] == null) break; //超出最后的范围跳出
    }
    $("#all").html(html); //给ul列表写入html
    var ye = "";
    for (var j = 1; j <= pageall; j++) {
        if (e == j) {
            ye = ye + "<span><a href='#' onClick='change(" + j + ")' style='color:blue'>" + j + "</a></span> "
        } else {
            ye = ye + "<a href='#' onClick='change(" + j + ")'>" + j + "</a> "
        }
    }
    var pageContent = "";

    // pageContent += '第<span id=\"a2\">' + pageno + '</span>/';
    // pageContent += '<span id="a1">' + pageall + '</span>页';
    pageContent += `<li><a href="#" onClick="change(0)">&laquo;</a></li>`;
    pageContent += '<li><a href="#" onClick="change(--pageno)">上一页</a></li>';
    pageContent += '<li><span id="a3">' + ye + '</span></li>';
    pageContent += '<li><a href="#" onClick="change(++pageno)">下一页</a></li>';
    pageContent += `<li><a href="#" onClick="change(pageall)">&raquo;</a></li>`;
    $("#page").html(pageContent);


}