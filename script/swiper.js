var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop : true,
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
        delay : 5000,   // 시간 설정
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

swiper.autoplay.stop();
swiper.autoplay.start();

var count = 0;
// play & stop
document.querySelector('.control-btn').addEventListener('click',function(){
    count++;
    console.log(count)
    if(count % 2 == 1){
        swiper.autoplay.stop();
    }else{
        swiper.autoplay.start();
    }
    
})