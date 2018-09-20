$(document).ready(function(){
    //写在这里直接加载，写在选择器触发事件中，必须通过事件去执行
    $("#nav li span").mousemove(function () {
        $(this).css("background-color","#c81623");
        var index=$("#nav li span").index(this);
        alert(index);
        ("#nav li:eq("+index+") span~p").show();
    })
    }
)