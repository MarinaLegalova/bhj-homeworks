let reveal = document.querySelectorAll(".reveal");

const isInViewport = function (element) {
	const viewportHeight = window.innerHeight;
	const elementTop = element.getBoundingClientRect().top;
	const elementHeight = element.getBoundingClientRect().height;

    if (elementTop < viewportHeight && elementTop > -elementHeight) {
        return true;
    } else {
        return false;
    }
}

function checkReveals() {
    [...reveal].forEach(element => {
          if (isInViewport(element)) {
              if (!element.classList.contains("reveal_active")) {
                  element.classList.add("reveal_active");
              }
          } else {
              if (element.classList.contains("reveal_active")) {
                  element.classList.remove("reveal_active");
              }
          }
      });
  }
  
  window.addEventListener("scroll", checkReveals, false);
  
  checkReveals();