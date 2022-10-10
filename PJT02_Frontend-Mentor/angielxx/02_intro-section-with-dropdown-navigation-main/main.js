////////////////////////// start: desktop ///////////////////////////////

const features = document.querySelector('#features')
const company = document.querySelector('#company')
const featuresToggle = document.getElementById('toggle-feature')
const companyToggle = document.getElementById('toggle-company')

// function hideCompanyToggle(event) {
//     companyToggle.classList.toggle('hidden')
// }

function showCompanyToggle(event) {
    companyToggle.classList.toggle('hidden')
}

// function hideFeaturesToggle(event) {
//     featuresToggle.classList.remove('hidden')
// }

function showFeaturesToggle(event) {
    featuresToggle.classList.toggle('hidden')
}
// show
features.addEventListener('click', showFeaturesToggle)
company.addEventListener('click', showCompanyToggle)


////////////////////////// end: desktop ///////////////////////////////


////////////////////////// start: mobile ///////////////////////////////
// mobile
const menuBtn = document.querySelector('.header_menu-icon')
const menu = document.querySelector('.header__menu')
const closeBtn = document.querySelector('.header__menu__closeBtn')

function hideMenu(event) {
    menu.style.right = '-100%';
    menu.style = 'box-shadow: none;'
}
function showMenu(event) {
    menu.style = 'box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5); right: 0%;'
}

// mobile menu
menuBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', hideMenu)

////////////////////////// end: mobile ///////////////////////////////