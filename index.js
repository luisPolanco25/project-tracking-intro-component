
const img = document.querySelector('img');

img.addEventListener('click', () => {
    img.style.transition = '1s ease-in' 
    img.src = './images/icon-close.svg';
})