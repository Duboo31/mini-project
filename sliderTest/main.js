// var ul = document.querySelector("ul");
// var width = document.querySelector("li").offsetWidth;
// var totalWidth = width * 5;

// ul.style.width = totalWidth + "px"; // 이미지 크기만큼 width 증가

// var moveLeftAntimation = ul.animate([
//   { transform: 'translateX(0px)' }, 
//   { transform: 'translateX(0px)', offset: 0.75}, 
//   { transform: `translateX(-${width}px)` }
// ], { 
//   duration: 2000,
// }); 


// moveLeftAntimation.onfinish = function() {
//   var removeItem = ul.removeChild(ul.firstElementChild);
//   ul.appendChild(removeItem); 
//   moveLeftAntimation.play();  
// }