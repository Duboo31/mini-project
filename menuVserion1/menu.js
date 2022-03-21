const openBt = document.querySelector('.button');
const menuInner = document.querySelector('.menu-inner');
const menuContainer = document.querySelector('.menu-container');
const menuItems = document.querySelectorAll('.menu-item');

const openMenu = () => {
  menuInner.classList.add('show');
}

const closeMenu = (event) => {
  if(event.target !== menuInner && event.target !== openBt && event.target !== menuContainer) {
    menuInner.classList.remove('show');
  }
}

openBt.addEventListener('click', openMenu);
window.addEventListener('click', closeMenu);

menuItems.forEach(item => {
  item.addEventListener('click', openMenu)
})
