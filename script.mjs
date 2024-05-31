import manageToggleMenu from './scripts/manage-toggle-menu.mjs';
import changeLanguage from './scripts/change-language.mjs';

const languageButton = document.querySelector('.language-button');
const mobileBurgerButton = document.querySelector('.mobile-burger-button');

languageButton.addEventListener('click', changeLanguage);

mobileBurgerButton.addEventListener('click', manageToggleMenu);
