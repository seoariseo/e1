$(function(){


$(".main > li").hover(function(){
    $(this).find(".sub").stop().slideDown();
}, function(){
    $(".sub").stop().slideUp();
})//hover



// $(".main > li").mouseover(function(){
    
//     $(this).find(".sub").stop().slideDown();
// })//mouseover

// $(".main > li").mouseout(function(){
//     $(".sub").stop().slideUp();
    
// })//mouseout


//이미지슬라이드

// var n = 0; // 0(left : 0) 1(left : -100%) 2(left: -200%)

// setInterval(function(){
//     n = (n+1) % 3;

//     // if(n == 2){
//     //     n=0;
//     // }else{
//     //     n++;
//     // }
//     console.log(n);

//     $(".left_move").animate({left : n * (-100) + "%"}, 500)

// }, 2000)

setInterval(function(){
    $(".left_move").animate({left : "-100%"},500, function(){
        $(".left_move").append($(".left_move li").eq(0));
        $(".left_move").css({left : "0"});
    })/* animate */
    
},2000)/* setInterval */


$(".p_click").click(function(){
    $(".popup, .modal").show();
})//p_click click

$(".close").click(function(){
    $(".popup, .modal").hide();
})//close click

})//jq
