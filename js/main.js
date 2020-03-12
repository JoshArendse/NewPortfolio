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
        $('.text, .close').toggleClass('show-text');
        $('#page1, .overlay').toggleClass('active');
        $('#page2, #page3').toggleClass('steekhomweg');
    })
});

$(document).ready(function(){
  $('#page2').click(function(){
      $('.projects').toggleClass('block');
      $('.text, .close').toggleClass('show-text');
      $('#page2, .overlay').toggleClass('active');
      $('#page1, #page3').toggleClass('steekhomweg');
  })
});

$(document).ready(function(){
  $('#page3').click(function(){
      $('.projects').toggleClass('block');
      $('.text, .close').toggleClass('show-text');
      $('#page3, .overlay').toggleClass('active');
      $('#page2, #page1').toggleClass('steekhomweg');
  })
});


