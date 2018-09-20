$(document).ready(function () {
    $("li").hover(function () {
        $(this).children("div").show();//让对应的二级菜单显示
        $(this).toggleClass("orange");
    },function () {
        $(this).children("div").hide();//让对应的二级菜单隐藏
        $(this).toggleClass("orange");
    })
})