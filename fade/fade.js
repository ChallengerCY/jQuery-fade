/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#b1").on("click",function(){
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    })
    $("#b2").on("click",function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    })
    $("#b3").on("click",function(){
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    })
    $("#b4").on("click",function(){
        $("#div1").fadeTo(1000,0);
        $("#div2").fadeTo(1000,0.5);
        $("#div3").fadeTo(1000,1);
    })
})
