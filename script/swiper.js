var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  loop: true,
  autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 5000,   // 시간 설정
    disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

swiper.autoplay.stop();
swiper.autoplay.start();

var count = 0;
// play & stop
const playButton = document.querySelector('.control-btn')
playButton.addEventListener('click', function () {
  count++;
  console.log(count)
  if (count % 2 == 1) {
    swiper.autoplay.stop();
    playButton.style.backgroundImage = 'url("/img/pause-solid.svg")';

  } else if (count % 2 == 0) {
    swiper.autoplay.start();
    playButton.style.backgroundImage = 'url("/img/play.png")';
  }

})

var subSwiper = new Swiper(".subSwiper", {
  slidesPerView: '3',
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 화면의 넓이가 320px 이상일 때
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // 화면의 넓이가 640px 이상일 때
    640: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

// instar Swiper
var subSwiper = new Swiper(".instarSwiper", {
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



