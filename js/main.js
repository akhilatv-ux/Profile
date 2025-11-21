var mob = document.querySelector(".mobTogg")
var menu = document.querySelector(".mainmenu")
  mob.addEventListener('click', function(){
  mob.classList.toggle('show');
  menu.classList.toggle('show')
})


if (progress > 0.3 && progress < 0.6) {
  circle.innerHTML = "<span class='wave'>Hi!</span>";
} else {
  circle.innerHTML = "<span class='wave'>👋</span>";
}






// Scroll animation for service boxes
const serviceBoxes = document.querySelectorAll('.rect, .rect2, .rect3');

function revealService() {
  const screenHeight = window.innerHeight * 0.85;

  serviceBoxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < screenHeight) {
      box.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealService);
revealService();












