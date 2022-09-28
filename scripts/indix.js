const slider = document.getElementById("slider");
const foregroundImage = document.querySelector(".foreground-img");

slider.addEventListener("input", (e) => {
  const sliderValue = e.target.value;

  foregroundImage.style.width = `${sliderValue}%`;
});
