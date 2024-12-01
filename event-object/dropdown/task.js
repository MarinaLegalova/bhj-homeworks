const dropValue = document.getElementsByClassName('dropdown__value');
const dropList = document.getElementsByClassName('dropdown__list');
const dropItem = document.getElementsByClassName("dropdown__item");
const dropLinks = Array.from(document.querySelectorAll('dropdown__link'));


dropValue[0].addEventListener('click', function() {
    if (dropList[0].classList.contains('dropdown__list_active')) {
        dropList[0].classList.remove('dropdown__list_active');
    } else {
        dropList[0].classList.add('dropdown__list_active');
    }
});

for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].addEventListener('click', function() {
        event.preventDefault();
        dropValue[0].textContent = dropItem[i].textContent;
        dropList[0].classList.remove('dropdown__list_active');
    });
}