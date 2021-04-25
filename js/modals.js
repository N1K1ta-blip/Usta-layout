const optionsContainer = document.querySelector(".options-container");
const optionsContainer2 = document.querySelector(".options-container2");
let select_count1 = 0;
let select_count2 = 0;
let select_count3 = 0;
let select_count4 = 0;
let select_count5 = 0;
const optionsList = document.querySelectorAll(".option");

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    let valueNumber = Number(o.getAttribute('data-value'))
    if (valueNumber == 1) {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    }
    if (valueNumber == 2) {
      selected2.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer2.classList.remove("active");
    }
  });
});


function ActiveSelect(e) {
  let value = e.getAttribute('data-value')
  if (value == 0) {
    if(select_count2 == 1 || select_count3 == 1){
      select_count2 = 0
      select_count3 = 0
      document.getElementsByClassName('additionally_block')[1].style.display = "none"
      document.getElementsByClassName('additionally_block')[2].style.display = "none"
    }
    if (select_count1 == 0) {
      document.getElementsByClassName('additionally_block')[0].style.display = "block"
      select_count1 ++
    }else{
      document.getElementsByClassName('additionally_block')[0].style.display = "none"
      select_count1 --
    }
  }
  if (value == 1) {
    if(select_count1 == 1 || select_count3 == 1){
      select_count1 = 0
      select_count3 = 0
      document.getElementsByClassName('additionally_block')[0].style.display = "none"
      document.getElementsByClassName('additionally_block')[1].style.display = "none"
    }
    if (select_count2 == 0) {
      document.getElementsByClassName('additionally_block')[0].style.display = "block"
      select_count2 ++
    }else{
      document.getElementsByClassName('additionally_block')[0].style.display = "none"
      select_count2 --
    }
  }
  if (value == 2) {
    if(select_count1 == 1 || select_count2 == 1){
      select_count1 = 0
      select_count2 = 0
      document.getElementsByClassName('additionally_block')[0].style.display = "none"
      document.getElementsByClassName('additionally_block')[1].style.display = "none"
    }
    if (select_count3 == 0) {
      document.getElementsByClassName('additionally_block')[1].style.display = "block"
      select_count3 ++
    }else{
      document.getElementsByClassName('additionally_block')[1].style.display = "none"
      select_count3 --
    }
  }
}
function OtherValue(e) {
  let value = e.getAttribute('data-value')

  if(value == 1){
    document.getElementById('current_value1').innerHTML = e.innerHTML
    document.getElementsByClassName('additionally_block')[0].style.display = "none"
    select_count2 = 0
  }
  if(value == 2){
    document.getElementById('current_value2').innerHTML = e.innerHTML
    document.getElementsByClassName('additionally_block')[1].style.display = "none"
    select_count3 = 0
  }
}
function Search_number(e) {
  let value = e.getAttribute('data-value')
  if(value == 0){
    if (select_count4 == 0) {
      document.getElementById('first_options').style.display = 'block'
      select_count4 ++
    }else{
      document.getElementById('first_options').style.display = 'none'
      select_count4 --
    }
  }
  if(value == 1){
    if (select_count5 == 0) {
      document.getElementById('second_options').style.display = 'block'
      select_count5 ++
    }else{
      document.getElementById('second_options').style.display = 'none'
      select_count5 --
    }
  }
}

function Request(e) {
  let buttons = document.querySelectorAll('.request')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active')
    buttons[i].classList.add('noactive')
  }
  e.classList.add('active')
}
function Pagination(e) {
  let pagin = document.querySelectorAll('.pagin');
  for (var i = 0; i < pagin.length; i++) {
    pagin[i].classList.remove('active')
  }
  e.classList.add('active')
}

$('.open-popup1').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup1').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup2').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup2').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup3').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup3').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup4').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup4').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup5').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup5').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup5_2').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup5_2').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup5_3').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup5_3').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup5_4').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup5_4').fadeIn(800);
   $('html').addClass('no-scroll');
});


$('.open-popup7').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup7').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup8').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup8').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.open-popup9').click(function(e) {
   e.preventDefault();
   $('.popup-bg').fadeIn(800);
   $('.popup9').fadeIn(800);
   $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
   $('.popup-bg').fadeOut(800);
   $('.popup1').fadeOut(800);
   $('.popup2').fadeOut(800);
   $('.popup3').fadeOut(800);
   $('.popup4').fadeOut(800);
   $('.popup5').fadeOut(800);
   $('.popup5_2').fadeOut(800);
   $('.popup5_3').fadeOut(800);
   $('.popup5_4').fadeOut(800);
   $('.popup7').fadeOut(800);
   $('.popup8').fadeOut(800);
   $('.popup9').fadeOut(800);
   $('html').removeClass('no-scroll');
});

$('.popup-bg').click(function() {
   $('.popup-bg').fadeOut(800);
   $('.popup1').fadeOut(800);
   $('.popup2').fadeOut(800);
   $('.popup3').fadeOut(800);
   $('.popup4').fadeOut(800);
   $('.popup5').fadeOut(800);
   $('.popup5_2').fadeOut(800);
   $('.popup5_3').fadeOut(800);
   $('.popup5_4').fadeOut(800);
   $('.popup7').fadeOut(800);
   $('.popup8').fadeOut(800);
   $('.popup9').fadeOut(800);
   $('html').removeClass('no-scroll');
});
