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






