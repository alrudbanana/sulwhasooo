const container = document.querySelector('#top-search')
const searchIcon = document.querySelector('.search-icon')
const closeBox = document.querySelector('.close')

function searchSelect() {
    if (count % 2 == 0) {
        container.classList.remove('is-active')
    }else{
        container.classList.add('is-active')
    }
    count++;
}

searchIcon.addEventListener('click', searchSelect)
closeBox.addEventListener('click',searchSelect)

const gnb = document.querySelector('.gnb-menu'); // gnb메뉴 
const gnb_menu_list = document.querySelectorAll('.d1_over');

const sub_menus = document.querySelectorAll('.d1_over > .nav-d2-box');
// const sub_menu_list = document.querySelectorAll('.nav-d2-box>ul>li');
const bg = document.querySelector('.bg');



//0번일땐 0번의 submenu만 보여야함
for(let i = 0; i < gnb_menu_list.length; i++){
    gnb_menu_list[i].addEventListener('mouseenter',function(){
        const idx = Array.from(gnb_menu_list).indexOf(this);
        const sub_menu = sub_menus[idx];
        sub_menu.classList.add('show');
        bg.style.height = sub_menu.clientHeight + 'px';
        console.log(sub_menu.clientHeight);
        gnb.classList.add('is-active');
    })


    gnb_menu_list[i].addEventListener('mouseout', function () {
        // 마우스가 벗어날 때 모든 nav-d2-box에서 'show' 클래스를 제거
        sub_menus.forEach((box) => box.classList.remove('show'));
    });

}
//기존에는 보이지 않다가 마우스가 위치에 index에 해당하는 것들이 bg에 옮겨서 보임. 
//이때 bg는 width 정해짐 
