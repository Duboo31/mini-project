// const menu = document.querySelector('.menu');
// let curMenu;

// // active 클레스 추가, curMenu 변경 함수
// const activate = (elem) => {
//   elem.classList.add('menu-active');
//   curMenu = elem;
// }

// // active 클레스 삭제 함수
// const inactivate = (elem) => {
//   elem.classList.remove('menu-active');
// }

// // 메뉴 클릭 이벤트 핸들러
// const clickHandler = (event) => {
//   if(curMenu) {
//     inactivate(curMenu);
//   }
//   activate(event.target)
// }

// menu.addEventListener('click', clickHandler);

const tabMenu = document.querySelector('.tab-menu');

const tabClickHandler = (e) => {
  console.log(e.target);
}

tabMenu.addEventListener('click', tabClickHandler);