$(document).ready(function(){
    $("#menu>li:nth-child(2)").mouseover(function(){
        $('#menu>li:nth-child(2) .sub1').stop().slideDown(100)
    })
    $("#menu>li:nth-child(2)").mouseout(function(){
        $('#menu>li:nth-child(2) .sub1').stop().slideUp(100)
    })
    $('#menu>li:nth-child(3)').mouseover(function(){
        $('#menu>li:nth-child(3) .sub2').stop().slideDown(100)
    })
    $('#menu>li:nth-child(3)').mouseout(function(){
        $('#menu>li:nth-child(3) .sub2').stop().slideUp(100)
    })
    $('#menu>li:nth-child(4)').mouseover(function(){
        $('#menu>li:nth-child(4) .sub3').stop().slideDown(100)
    })
    $('#menu>li:nth-child(4)').mouseout(function(){
        $('#menu>li:nth-child(4) .sub3').stop().slideUp(100)
    })
    $('#menu>li:nth-child(5)').mouseover(function(){
        $('#menu>li:nth-child(5) .sub4').stop().slideDown(100)
    })
    $('#menu>li:nth-child(5)').mouseout(function(){
        $('#menu>li:nth-child(5) .sub4').stop().slideUp(100)
    })
    $('#menu>li:nth-child(6)').mouseover(function(){
        $('#menu>li:nth-child(6) .sub5').stop().slideDown(100)
    })
    $('#menu>li:nth-child(6)').mouseout(function(){
        $('#menu>li:nth-child(6) .sub5').stop().slideUp(100)
    })
})