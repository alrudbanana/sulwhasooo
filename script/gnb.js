$(function(){
    const gnb_d1 = $('.d1_over');
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

    const hammenu = $('.ham-menu');
    const sidemobilenav = $('.sidenav');
    const wrap = $('.wrap');
    const closeBtn = $('.close-btn');
    const plus = $('.nav-d1.over .plus');
    console.log(plus)
    const contentOver = $('.nav-d2-box')
    function showNav(){
        var count = 0;
        count ++;
        if(count % 2 == 0){
            sidemobilenav.hide();
            wrap.fadeIn();
        }else if(count % 2 == 1){
            sidemobilenav.fadeIn();
            wrap.fadeOut();
        }
    }

    function contentShow(){

    }
    hammenu.on('click',showNav);
    closeBtn.on('click',function(){
        sidemobilenav.hide();
        wrap.fadeIn();
    })

    plus.click(function(){
        $(this).parent().next().toggleClass('active')
    })

    //헤더에 마우스 올라가면 로고 이미지 변경 
    const header = $('header')
    const logImg = $('.logo .pc')
    const logoImgUrl = 'img/sulwhasoo_orange_logo.png'
    const WhitelogoImgUrl = 'img/sulwhasoo_white_logo.png'
    header.mouseenter(function(){
        logImg.attr('src', logoImgUrl)
    })
    header.mouseleave(function(){
        logImg.attr('src', WhitelogoImgUrl)
    })
})


