// languageSelect
const selectLanguageIcon = document.querySelector('.select-icon');
const selectLanguageList = document.querySelector('.select-lang-list');

var count = 0;

function languageSelect() {
    if (count % 2 == 0) {
        selectLanguageList.classList.remove('is-active')
        selectLanguageIcon.className = 'fa-solid fa-angle-down select-icon'
    }else{
        selectLanguageList.classList.add('is-active')
        selectLanguageIcon.className = 'fa-solid fa-angle-up select-icon'
    }
    count++;
}

selectLanguageIcon.addEventListener('click', languageSelect)

// seach
const headerLink = document.querySelector('.header-link')
const searchShop = document.querySelector('.search-shop')
const buyItem = document.querySelector('.buy')





