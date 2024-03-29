// change theme color

let switches = document.querySelectorAll('#theme-switch span');
let root = document.querySelector('body');

let i = 0;

while(i < switches.length){

  color = switches[i];
  color.addEventListener('click', function(c){
    root.style.setProperty('--theme', c.target.style.backgroundColor);
  })
  
  i++;

}

// theme control

let popup = document.querySelector('#pop-up');
let button = document.querySelector('#button');
let screen = document.querySelector('body');

button.addEventListener('click', function(){
    popup.style.display = 'block';
    screen.style.overflowY = 'hidden';
})

window.addEventListener('click', function(c){

  if (c.target == popup) {
    popup.style.display = 'none';
    screen.style.overflowY = 'initial';
  }

})

// page concept
$(document).ready(function(){
  $('#page1').click(function(){
      $('.projects').toggleClass('block');
      $('.text, .close').toggleClass('show-text');
      $('#page1, .overlay').toggleClass('active');
      $('#page2, #page3, #page4').toggleClass('steekhomweg');
  })

  $('#page2').click(function(){
    $('.projects').toggleClass('block');
    $('.text, .close').toggleClass('show-text');
    $('#page2, .overlay').toggleClass('active');
    $('#page1, #page3, #page4').toggleClass('steekhomweg');
  })

  $('#page3').click(function(){
    $('.projects').toggleClass('block');
    $('.text, .close').toggleClass('show-text');
    $('#page3, .overlay').toggleClass('active');
    $('#page2, #page1, #page4').toggleClass('steekhomweg');
  })

  $('#page4').click(function(){
    $('.projects').toggleClass('block');
    $('.text, .close').toggleClass('show-text');
    $('#page4, .overlay').toggleClass('active');
    $('#page2, #page1, #page3').toggleClass('steekhomweg');
  })
});



