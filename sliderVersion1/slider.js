let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (event) => {
  pressed = true;
  startx = event.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseenter', () => {
  slider.style.cursor = 'grab';
})