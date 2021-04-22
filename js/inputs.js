let count = 0;
let type = 0;
let count2 = 0;
let type2 = 0;

function Input(e) {
  let label = document.querySelectorAll('label')
  let show_button = document.getElementById('show_button')
  let input_new_password_1 = document.getElementById('input_new_password_1')
  for (var i = 0; i < label.length; i++) {
    if(e.id == label[i].getAttribute('data-value')){
      label[i].classList.add('show')
    }
  }
  show_button.classList.add('active')
  input_new_password_1.classList.add('active')
  count ++;
}
function Input2(e) {
  let label = document.querySelectorAll('label')
  let show_button2 = document.getElementById('show_button2')
  let input_new_password_2 = document.getElementById('input_new_password_2')
  for (var i = 0; i < label.length; i++) {
    if(e.id == label[i].getAttribute('data-value')){
      label[i].classList.add('show')
    }
  }
  show_button2.classList.add('active')
  input_new_password_2.classList.add('active')
  count ++;
}
function Input3(e) {
  let label = document.querySelectorAll('label')
  let input_new_password_1 = document.getElementById('input_new_password_1')
  for (var i = 0; i < label.length; i++) {
    if(e.id == label[i].getAttribute('data-value')){
      label[i].classList.add('show')
    }
  }
  input_new_password_1.classList.add('active')
  count ++;
}
function Input4(e) {
  let label = document.querySelectorAll('label')
  let input_new_password_2 = document.getElementById('input_new_password_2')
  for (var i = 0; i < label.length; i++) {
    if(e.id == label[i].getAttribute('data-value')){
      label[i].classList.add('show')
    }
  }
  input_new_password_2.classList.add('active')
  count ++;
}

function Type2(){
  let input_new_password = document.getElementById('input_new_password_2')
  if (type2 == 0) {
    input_new_password.type = 'text'
    type2 ++
    return
  }
  if (type2 == 1) {
    input_new_password.type = 'password'
    type2 --
  }
}
function Type(){
  let input_new_password = document.getElementById('input_new_password_1')
  if (type2 == 0) {
    input_new_password.type = 'text'
    type2 ++
    return
  }
  if (type2 == 1) {
    input_new_password.type = 'password'
    type2 --
  }
}

function Hid_input(e){
  if (e.getAttribute('data-value') != 'create_3') {
    let label = document.querySelectorAll('label')
    let input = document.querySelectorAll('input')
    let show_button = document.getElementById('show_button')
    let input_new_password_1 = document.getElementById('input_new_password_1')
    let show_button2 = document.getElementById('show_button2')
    let input_new_password_2 = document.getElementById('input_new_password_2')
    count ++;

    if (count > 2) {
      for (var i = 0; i < label.length; i++) {
        if (input[i].value == '') {
          label[i].classList.remove('show')
        }
      }
      if (input_new_password_1.value == '') {
        show_button.classList.remove('active')
        input_new_password_1.classList.remove('active')
        count = 0;
      }
      if (input_new_password_2.value == '') {
        show_button2.classList.remove('active')
        input_new_password_2.classList.remove('active')
        count = 0;
      }
    }
  }
  if (e.getAttribute('data-value') == 'create_3') {
    let label = document.querySelectorAll('label')
    let input = document.querySelectorAll('input')
    // let input_new_password_1 = document.getElementById('input_new_password_1')
    let input_new_password_2 = document.getElementById('input_new_password_2')
    count ++;

    if (count > 2) {
      for (var i = 0; i < label.length; i++) {
        if (input[i].value == '') {
          label[i].classList.remove('show')
        }
      }
      if (input_new_password_1.value == '') {
        input_new_password_1.classList.remove('active')
        count = 0;
      }
      if (input_new_password_2.value == '') {
        input_new_password_2.classList.remove('active')
        count = 0;
      }
    }
  }
  // if (count2 > 2) {
  //   for (var i = 0; i < label.length; i++) {
  //     if (input[i].value == '') {
  //       label[i].classList.remove('show')
  //       count2 = 0;
  //     }
  //   }
  //   if (input_new_password_1.value == '') {
  //     show_button2.classList.remove('active')
  //     input_new_password_2.classList.remove('active')
  //   }
  // }
}
