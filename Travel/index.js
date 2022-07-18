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
const sliderBlock = document.querySelector(".slider");
const circles = document.getElementsByClassName("circle");
const burgerButton = document.querySelector(".burger");
const burgerContainer = document.querySelector(".burger-container");
const burgerWrapper = document.querySelector(".burger-wrapper");
const crossButton = document.querySelector(".cross");
const burgerMenu = document.querySelector(".burger-menu");

const sliderArrows = document.getElementsByClassName("slider-arrow");
const sliderArrowRight = sliderArrows[1];
const sliderArrowLeft = sliderArrows[0];

document.addEventListener("DOMContentLoaded", () => {
  const screenWidth = window.screen.width;

  if (screenWidth <= 1000) {
    sliderArrowRight.classList.add("arrow-active");
    circles[0].classList.add("active");

    //for Mobile
    sliderArrowRight.addEventListener("click", () => {
      const sliderPosition = slider.style.left;
      const sliderItemWidth = sliderItemCenter.clientWidth;
      console.log(sliderItemWidth);
      const newPosition = +sliderPosition.replace("px", "") - sliderItemWidth;

      slider.style.left = `${newPosition}px`;

      if (sliderPosition === `-${sliderItemWidth}px`) {
        sliderArrowRight.classList.remove("arrow-active");

        circles[2].classList.add("active");
        circles[1].classList.remove("active");
      } else {
        circles[1].classList.add("active");
        circles[0].classList.remove("active");
      }

      if (!sliderArrowLeft.classList.contains("arrow-active")) {
        sliderArrowLeft.classList.add("arrow-active");
      }
    });

    sliderArrowLeft.addEventListener("click", () => {
      const sliderPosition = slider.style.left;
      const sliderItemWidth = sliderItemCenter.clientWidth;

      const newPosition = +sliderPosition.replace("px", "") + sliderItemWidth;

      slider.style.left = `${newPosition}px`;

      if (sliderPosition === `-${sliderItemWidth}px`) {
        sliderArrowLeft.classList.remove("arrow-active");

        circles[0].classList.add("active");
        circles[1].classList.remove("active");
      } else {
        circles[1].classList.add("active");
        circles[2].classList.remove("active");
      }

      if (!sliderArrowRight.classList.contains("arrow-active")) {
        sliderArrowRight.classList.add("arrow-active");
      }
    });
  } else {
    circles[1].classList.add("active");

    const sliderWidth = sliderBlock.clientWidth;

    const newPosition = 800 - (sliderWidth - 800 - 60 * 2) / 2;
    slider.style.left = `-${newPosition}px`;

    //for desktop
    sliderItemRight.addEventListener("click", () => {
      const newPosition = 800 * 3 + 120 - sliderWidth;

      slider.style.left = `-${newPosition}px`;
      circles[2].classList.add("active");
      circles[1].classList.remove("active");
    });

    sliderItemCenter.addEventListener("click", () => {
      const newPosition = 800 - (sliderWidth - 800 - 60 * 2) / 2;

      slider.style.left = `-${newPosition}px`;
      const activeCircle = document.querySelector(".active");
      activeCircle.classList.remove("active");
      circles[1].classList.add("active");
    });

    sliderItemLeft.addEventListener("click", () => {
      slider.style.left = 0;
      circles[0].classList.add("active");
      circles[1].classList.remove("active");
    });
  }
});

const hideMenu = () => {
  burgerContainer.classList.add("hidden");
  setTimeout(() => {
    burgerContainer.classList.add("closed");
  }, 70);
};

const showMenu = () => {
  burgerContainer.classList.remove("closed");
  setTimeout(() => {
    burgerContainer.classList.remove("hidden");
  }, 70);
};
burgerMenu.addEventListener("click", () => {
  hideMenu();
});

crossButton.addEventListener("click", () => {
  hideMenu();
});

burgerButton.addEventListener("click", () => {
  showMenu();
});

burgerContainer.addEventListener("click", (event) => {
  if (event.target !== burgerWrapper) {
    hideMenu();
  }
});

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
