const countDown = function() {
    const timer = document.getElementById("timer");
    timer.textContent --;
    if (timer.textContent <= 0) {
        clearInterval(id);
        alert("Вы победили в конкурсе!");
    }
};
 
const id = setInterval(countDown, 400);