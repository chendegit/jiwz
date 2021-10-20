$(function () {
    $(".tab_top li").click(function () {
        // 链式编程操作
        $(this).addClass("current_").siblings().removeClass("current_");
        var index = $('.current_').index();
        
        $(".tab_x").eq(index).show().siblings().hide();
        // $(".tab").show().siblings().hide();
    })
})
$(function () {
    // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
    $(".tab_list li").click(function () {
        // 链式编程操作
        $(this).addClass("current").siblings().removeClass("current");
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        // console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".tab_con .item").eq(index).show().siblings().hide();
    })
})
$(function () {
    // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
    $(".tab_2 .tab_list li").click(function () {
        // 链式编程操作
        $(this).addClass("current").siblings().removeClass("current");
        // 2.点击的同时，得到当前li 的索引号
        var index = $(this).index();
        // console.log(index);
        // 3.让下部里面相应索引号的item显示，其余的item隐藏
        $(".tab_2 .tab_con .item").eq(index).show().siblings().hide();
    })
})


//box点击
$(function(){
    $('.box1').click(function(){
        window.open("user_report.html");
    })
})
$(function () {
    $('.goum').click(function () {
        window.open("shiyong.html");
    })
})








//倒计时
$(function () {
    var m = 59;
    var s = 59;
    setInterval(function () {
        if (s < 10) {
            //如果秒数少于10在前面加上0
            $('.s_rand').html( '申请剩余时间：13天5小时'+m+'分'+':0' + s + '秒');
        } else {
            $('.s_rand').html('申请剩余时间：13天5小时'+m+'分' + s + '秒');
        }
        s--;
        if (s < 0) {
            //如果秒数少于0就变成59秒
            s = 59;
            m--;
        }
    }, 1000)
})

var more = document.getElementsByClassName('more')[0];
var more_ = document.getElementsByClassName('more_')[0];
// var loading = document.getElementsByClassName('loading')[0];

function theAjax(elem, theUrl) {
    // loading.style.display = 'block';
    if (elem == undefined || elem == '') {
        elem = 'art';
    }
    var Ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    Ajax.open('get', theUrl, true);
    Ajax.send();
    Ajax.onreadystatechange = function () {
        if (Ajax.readyState == 4) {
            if (Ajax.status == 200) {
                // more.style.display = 'block';
                var res = JSON.parse(Ajax.responseText);
                // useres(res, elem);
            } else {
                console.log(Ajax.status);
            }
        }
    }
}
theAjax('art', 'http://192.168.1.29:3000/useing/public');




$('.totalnum').text('value[i][j].totalnum');