const buttonText = document.getElementById("toggle-animation");
const movingBox = document.getElementById("moving-box");

let isAnimating = false;
let intervalId;

function startAnimation() {
  isAnimating = true;
  buttonText.innerHTML = "Pause Animation";

  let leftPosition = 0;
  let direction = 1;

  intervalId = setInterval(() => {
    leftPosition += direction * 7;
    movingBox.style.left = `${leftPosition}px`;

    if (leftPosition >= 300 || leftPosition <= 0) {
      direction *= -1;
    }
  }, 20);
}

function stopAnimation() {
  isAnimating = false;
  buttonText.innerHTML = "Start Animation";

  clearInterval(intervalId);
  movingBox.style.left = 0;
}

buttonText.addEventListener("click", function (event) {
  if (isAnimating) {
    stopAnimation();
  } else {
    startAnimation();
  }
});
