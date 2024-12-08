const rotator = document.getElementsByClassName("rotator");
 
[...rotator].forEach(rotator => {
    const rotatorList = rotator.getElementsByClassName("rotator__case");
 
    const tick = index => {
    [...rotatorList].forEach(element => {
            element.classList.remove("rotator__case_active");
        });
 
        index = rotatorList[index].nextElementSibling ? index + 1 : 0;
 
        let speed = rotatorList[index].getAttribute("data-speed");
        rotatorList[index].classList.add("rotator__case_active");
 
        setTimeout(tick, speed, index);
    };
 
    setTimeout(tick, 0, 0);
});