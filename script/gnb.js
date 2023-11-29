$(function(){
    const gnb = $('.gnb')// gnb메뉴 
    const gnb_menu_list = $('.d1_over')
    
    const sub_menu = $('.d1_over > .nav-d2-box')
    const bg = document.querySelector('.bg');

    console.log(sub_menu)

    gnb_menu_list.mouseenter(function(){
        $(this).children('.nav-d2-box').stop().slideDown();
        
    })

    gnb_menu_list.mouseleave(function(){
        $(this).children('.nav-d2-box').stop().slideUp();
    });

})


