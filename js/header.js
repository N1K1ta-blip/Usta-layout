let count_dropdown = 0;
let screenWidth = window.screen.width
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

document.getElementById('header_selector').onclick = function(){
  if(count_dropdown == 0){
    document.getElementById('dropdown1').classList.add('is-active');
    document.getElementById('header_arrow').src = './img/icons/active_arrow.svg'
    count_dropdown ++;
  }else{
    document.getElementById('dropdown1').classList.remove('is-active');
    document.getElementById('header_arrow').src = './img/icons/noactive_arrow.svg'
    count_dropdown --;
  }
}

if (screenWidth < 1088) {
  let second_half_header = ' '
  second_half_header += `<div class="horizontal_line"></div>`
  second_half_header += `<div class="navbar-end">`
  second_half_header += `<a class="navbar-item category">Мои заявки</a>`
  second_half_header += `<a class="navbar-item category">Профиль</a>`
  second_half_header += `<a class="navbar-item category">Личные сообщения</a>`
  second_half_header += `<a class="navbar-item category">Пополнить баланс</a>`
  second_half_header += `<a class="button search">Найти работу</a>`
  second_half_header += `<a class="button top">Поднять в топу</a>`
  second_half_header += `</div>`
  document.getElementById('second_half_header').innerHTML  = second_half_header
}
