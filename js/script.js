const anchors = document.querySelectorAll('.header__item[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    });
}

const iconMenu = document.querySelector('.burger');
if (iconMenu){
    const menuBody = document.querySelector('.header__inner');
    const burgerBody = document.querySelector('body');
    const burgerContainer = document.querySelector('.header');
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        burgerBody.classList.toggle('_active');
        burgerContainer.classList.toggle('_active');
    });
    anchors.forEach(element => {
        element.addEventListener('click', function(e) {
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            burgerBody.classList.remove('_active');
            burgerContainer.classList.remove('_active');
        });
    });
}
let cnt = 0
const overBtn = document.querySelector('.important__btn');
const overHidden = document.querySelector('.important__suptitle');
overBtn.addEventListener('click', function(e) {
    overHidden.classList.toggle('_active');
    if(cnt == 0){
        overBtn.textContent = 'Скрыть'
        cnt += 1
    } else{
        overBtn.textContent = 'Подробнее'
        cnt -= 1
    }

})