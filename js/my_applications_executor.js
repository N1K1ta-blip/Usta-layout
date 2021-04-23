function Category(e) {
  let categorys = document.querySelectorAll('.sorting_button');
  for (var i = 0; i < categorys.length; i++) {
    categorys[i].classList.remove('active')
  }
  e.classList.add('active')
}

function Search(e) {
  let value = Number(e.getAttribute('data-value'))
  e.innerHTML = "Перейти в рабочую область"
  e.classList.remove('search')
  e.classList.add('top')
  document.getElementsByClassName('application_info')[value].style.border = '1px dashed #6CD196'
}

function Pagination(e) {
  let pagin = document.querySelectorAll('.pagin');
  for (var i = 0; i < pagin.length; i++) {
    pagin[i].classList.remove('active')
  }
  e.classList.add('active')
}

let message = document.getElementById('message');
let message_icon = document.getElementById('message_icon');
message.onmouseover = light_message;
message.onmouseout = dark_message
function light_message() {
  message_icon.src = "./img/icons/light_email.svg"
}
function dark_message() {
  message_icon.src = "./img/icons/dark_email.svg"
}
