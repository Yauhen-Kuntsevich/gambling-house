const languageButton = document.querySelector(".language-button");

const mobileBurgerButton = document.querySelector(".mobile-burger-button");
const burgerLines = document.querySelectorAll(".burger-line");
const mobileCrossIcon = document.querySelector(".mobile-cross-icon");

const mobileHeaderMenu = document.querySelector(".mobile-header-menu");

const mainDiv = document.querySelector(".main");
const footerDiv = document.querySelector(".footer");

languageButton.addEventListener("click", () => {
  languageButton.innerHTML =
    languageButton.textContent === "EN"
      ? '<span class="icon"></span>RU'
      : '<span class="icon"></span>EN';
});

mobileBurgerButton.addEventListener("click", () => {
  if (burgerLines[0].style.display === "none") {
    burgerLines.forEach((line) => {
      line.style.display = "inline";
    });
    mobileCrossIcon.style.display = "none";
    mainDiv.style.display = "flex";
    footerDiv.style.display = "flex";
    mobileHeaderMenu.classList.toggle("menu-active");
  } else {
    burgerLines.forEach((line) => {
      line.style.display = "none";
    });
    mobileCrossIcon.style.display = "inline";
    mainDiv.style.display = "none";
    footerDiv.style.display = "none";
    mobileHeaderMenu.classList.toggle("menu-active");
  }
});
