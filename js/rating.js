function Rating(e) {
  let value = Number(e.getAttribute('data-value'));
  let star = document.querySelectorAll('.star_icon');
  for (var i = 0; i <= 4; i++) {
    star[i].style.backgroundImage = "url('./img/modal_rating/grey_star.svg')"
  }
  for (var i = 0; i <= value; i++) {
    star[i].style.backgroundImage = "url('./img/modal_rating/gold_star.svg')"
  }
  document.getElementById('rating_number').innerHTML = value+1+'.0'
}

function Rating2(e) {
  let value = Number(e.getAttribute('data-value'));
  let star = document.querySelectorAll('.star_icon2');
  for (var i = 0; i <= 4; i++) {
    star[i].style.backgroundImage = "url('./img/modal_rating/grey_star.svg')"
  }
  for (var i = 0; i <= value; i++) {
    star[i].style.backgroundImage = "url('./img/modal_rating/gold_star.svg')"
  }
  document.getElementById('rating_number2').innerHTML = value+1+'.0'
}
