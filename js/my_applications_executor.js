function Category(e) {
  let categorys = document.querySelectorAll('.sorting_button');
  for (var i = 0; i < categorys.length; i++) {
    categorys[i].classList.remove('active')
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
