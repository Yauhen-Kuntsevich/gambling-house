const languageButton = document.querySelector(".language-button");

languageButton.addEventListener("click", () => {
  languageButton.innerHTML =
    languageButton.textContent === "EN"
      ? '<span class="icon"></span>RU'
      : '<span class="icon"></span>EN';
});
