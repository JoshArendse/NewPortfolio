// change theme color

let switches = document.querySelectorAll('#theme-switch span');
let root = document.querySelector(':root');

switches.forEach((color) => {
    color.addEventListener('click', (e) => {
        root.style.setProperty('--theme', e.target.style.background);
    })
});

// theme control

let popup = document.querySelector('#pop-up');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
    popup.style.display = 'block';
})

window.addEventListener('click', function(c){

  if (c.target == popup) {
    popup.style.display = 'none';
  }

})

// page concept

$(document).ready(function(){
    $('#page1').click(function(){
        $('.projects').toggleClass('block');
        $('#page1').toggleClass('active');
        $('#page2').toggleClass('steekhomweg');
        $('#page3').toggleClass('steekhomweg');
    })
});

$(document).ready(function(){
  $('#page2').click(function(){
      $('.projects').toggleClass('block');
      $('#page2').toggleClass('active');
      $('#page1').toggleClass('steekhomweg');
      $('#page3').toggleClass('steekhomweg');
  })
});

$(document).ready(function(){
  $('#page3').click(function(){
      $('.projects').toggleClass('block');
      $('#page3').toggleClass('active');
      $('#page2').toggleClass('steekhomweg');
      $('#page1').toggleClass('steekhomweg');
  })
});