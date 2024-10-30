const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let click = 0;

function counterClicks() {
    clicker__counter.textContent++;
    cookie.width = 300;
    setTimeout(() => {cookie.width = 200;}, 100);
}
cookie.onclick = counterClicks;