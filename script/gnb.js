$(function(){
    const gnb_d1 = $('.d1_over');
    const navD2Box = $('.nav-d2-box');
    const bg = $('.bg');

    gnb_d1.mouseenter(function(){
        $(this).children('.nav-d2-box').stop().fadeIn(300)
        $(this).children('.nav-d2-box').css({'visibility':'visible'});
        let navD2BoxHeight = $(this).children('.nav-d2-box').outerHeight(true);
        bg.css({'height':navD2BoxHeight ,'border-top':'1px solid #ccc'})
        
    });

    gnb_d1.mouseleave(function(){
        $(this).children('.nav-d2-box').css({'visibility':'hidden'});
        bg.css('height', 0)
    });

})


