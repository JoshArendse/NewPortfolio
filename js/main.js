// change them color
let switches = document.querySelectorAll('.theme-switch span');
let root = document.querySelector(':root');

switches.forEach((color) => {
    color.addEventListener('click', (e) => {
        root.style.setProperty('--theme', e.target.style.background);
    })
});