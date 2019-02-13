//--jquery入口函数

$(document).ready(function () {
    //id=btn1  绑定click事件
    $("#btn1").click(function () {
        $("div").show();
        
    });
    $("#btn2").click(function () {
        $("div").text("显示内容");
    });
    console.log("test");
});
