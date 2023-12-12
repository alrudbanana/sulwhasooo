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

    const hammenu = $('.hammenu');
    const sidemobilenav = $('.sidenav');
    const wrap = $('.wrap');
    const hideSideMenu = $('.sideclose');
    const trigger = $('#trigger');
    
    function showNav(){
        var count = 0;
        count ++;
        if(count % 2 == 0){
            sidemobilenav.hide();
            wrap.fadeIn();
        }else if(count %2 == 1){
            sidemobilenav.fadeIn();
            wrap.hide();
        }
    }
    hammenu.on('click',showNav);
    hideSideMenu.on('click',function(){
        sidemobilenav.hide();
        wrap.fadeIn();
        trigger.prop('checked',false);
    })
})


