const manageToggleMenu = () => {
  const burgerLines = document.querySelectorAll('.burger-line');
  const mobileCrossIcon = document.querySelector('.mobile-cross-icon');
  const mobileHeaderMenu = document.querySelector('.mobile-header-menu');
  const mainDiv = document.querySelector('.main');
  const footerDiv = document.querySelector('.footer');

  const isMenuActive = mobileHeaderMenu.classList.toggle('menu-active');

  burgerLines.forEach((line) => {
    line.classList.toggle('hidden', isMenuActive);
  });
  mobileCrossIcon.classList.toggle('visible', isMenuActive);

  mainDiv.classList.toggle('hidden', isMenuActive);
  footerDiv.classList.toggle('hidden', isMenuActive);
};

export default manageToggleMenu;
