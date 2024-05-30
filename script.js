const languageButton = document.querySelector(".language-button");

const mobileBurgerButton = document.querySelector(".mobile-burger-button");
const burgerLines = document.querySelectorAll(".burger-line");
const mobileCrossIcon = document.querySelector(".mobile-cross-icon");

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
  } else {
    burgerLines.forEach((line) => {
      line.style.display = "none";
    });
    mobileCrossIcon.style.display = "inline";
  }
});
