const popupContainer = document.querySelector(".popup-container");
const eMailInput = document.querySelector("#eMailInput");
const passwordInput = document.querySelector("#passwordInput");
const loginButton = document.querySelector("#login");
const signInButton = document.querySelector("#signIn");
const registerButton = document.querySelector(`#register`);
const popupLogin = document.querySelector("#popupLogin");
const popupSignUp = document.querySelector("#popupSignUp");
const loginSignUpButton = document.querySelector("#loginSignUp");
const sliderItemLeft = document.querySelector("#sliderItemLeft");
const sliderItemCenter = document.querySelector("#sliderItemCenter");
const sliderItemRight = document.querySelector("#sliderItemRight");
const slider = document.querySelector(".slider-container");
const circles = document.getElementsByClassName("circle");

loginButton.addEventListener("click", () => {
  popupContainer.classList.remove("closed");
});

popupContainer.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.classList.add("closed");
  }
});

signInButton.addEventListener("click", () => {
  alert(`E-mail: ${eMailInput.value}, password: ${passwordInput.value}`);
});

registerButton.addEventListener("click", () => {
  popupLogin.classList.add("closed");
  popupSignUp.classList.remove("closed");
});

loginSignUpButton.addEventListener("click", () => {
  popupLogin.classList.remove("closed");
  popupSignUp.classList.add("closed");
});

sliderItemRight.addEventListener("click", () => {
  slider.style.left = "-1080px";
  circles[2].classList.add("active");
  circles[1].classList.remove("active");
});

sliderItemCenter.addEventListener("click", () => {
  slider.style.left = "-540px";
  const activeCircle = document.querySelector(".active");
  activeCircle.classList.remove("active");
  circles[1].classList.add("active");
});

sliderItemLeft.addEventListener("click", () => {
  slider.style.left = 0;
  circles[0].classList.add("active");
  circles[1].classList.remove("active");
});
