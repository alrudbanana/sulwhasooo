$(function(){
    const gnb = $('.gnb')// gnb메뉴 
    const gnb_menu_list = $('.d1_over')
    const gnb_menu_item_list = $('.d1_over > .nav-d2-box')
    
    const sub_menu = $('.d1_over > .nav-d2-box > .nav-d2')
    const bg = document.querySelector('.bg');

    

    gnb_menu_list.mouseenter(function(){
        $(this).children('.nav-d2-box').stop().slideDown();
        bg.style.height = gnb_menu_item_list.outerHeight(true) + 'px';
        console.log(gnb_menu_item_list.height())
    })

    gnb_menu_list.mouseleave(function(){
        $(this).children('.nav-d2-box').stop().slideUp();
        bg.style.height = 0;
    });

})


