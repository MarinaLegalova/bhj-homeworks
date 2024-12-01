const tabs = document.getElementsByClassName('tab');
const content = document.getElementsByClassName('tab__content');



for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        for (let j = 0; tabs.length > j; j++) {
            if (tabs[j].classList.contains('tab_active')) {
                tabs[j].classList.remove('tab_active');
                content[j].classList.remove('tab__content_active');
            }             
        }
        tabs[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    });
}