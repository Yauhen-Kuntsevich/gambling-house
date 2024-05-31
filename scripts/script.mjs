import manageToggleMenu from './manage-toggle-menu.mjs';
import changeLanguage from './change-language.mjs';

const languageButton = document.querySelector('.language-button');
const mobileBurgerButton = document.querySelector('.mobile-burger-button');

languageButton?.addEventListener('click', changeLanguage);

mobileBurgerButton?.addEventListener('click', manageToggleMenu);
