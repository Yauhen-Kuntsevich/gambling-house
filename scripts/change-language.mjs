const changeLanguage = () => {
  const languageButton = document.querySelector('.language-button');
  const currentLanguage = languageButton.getAttribute('data-language');

  if (currentLanguage === 'EN') {
    languageButton.setAttribute('data-language', 'RU');
    languageButton.innerHTML = '<span class="icon"></span>RU';
  } else {
    languageButton.setAttribute('data-language', 'EN');
    languageButton.innerHTML = '<span class="icon"></span>EN';
  }
};

export default changeLanguage;
