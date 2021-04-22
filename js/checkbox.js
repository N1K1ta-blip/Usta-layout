let page_type = document.getElementById('type_page').getAttribute('data-value');
let first_input;
let second_input;
let count = 0;
let radio = [0,0,0,0];
function Check(e) {
  let labels = document.querySelectorAll('label')
  if (page_type == 'create_application') {
    if (count < 2) {
      if (e.checked == true) {
        for (var i = 0; i < labels.length; i++) {
          if (labels[i].getAttribute('for') == e.getAttribute('id')) {
            if (count == 0) {
              first_input = e.getAttribute('id')
            }
            if (count == 1) {
              second_input = e.getAttribute('id')
            }
            labels[i].style.color = "#525A68"
            count ++;
          }
        }
      }
    }else{
      e.checked = false
    }
      if (e.checked == false) {
        for (var i = 0; i < labels.length; i++) {
          if (labels[i].getAttribute('for') == e.getAttribute('id')) {
            labels[i].style.color = "#BEC0C2"
            if (e.getAttribute('id') == second_input || e.getAttribute('id') == first_input) {
              count --;
            }
          }
        }
      }

  }
  if (page_type == 'radio'){
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.color = "#BEC0C2"
        for (var j = 1; j < radio.length; j++) {
          labels[radio[j]].style.color = "#525A68"
          console.log(radio[j]);
        }
    }
    if (e.checked == true) {
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute('for') == e.getAttribute('id')) {
          labels[i].style.color = "#525A68"
          radio[0]=i;
        }
      }
    }
  }
}

function Check2(e) {
  let labels = document.querySelectorAll('label')
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.color = "#BEC0C2"
        for (var j = 0; j < radio.length; j++) {
          labels[radio[j]].style.color = "#525A68"
          console.log(radio[j]);
        }

    }
    if (e.checked == true) {
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute('for') == e.getAttribute('id')) {
          labels[i].style.color = "#525A68"
          radio[1]=i;
        }
      }
    }
}
function Check3(e) {
  let labels = document.querySelectorAll('label')
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.color = "#BEC0C2"
        for (var j = 0; j < radio.length; j++) {
          labels[radio[j]].style.color = "#525A68"
          console.log(radio[j]);
        }
    }
    if (e.checked == true) {
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute('for') == e.getAttribute('id')) {
          labels[i].style.color = "#525A68"
          radio[2]=i;
        }
      }
    }
}
function Check4(e) {
  let labels = document.querySelectorAll('label')
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.color = "#BEC0C2"
        for (var j = 0; j < radio.length; j++) {
          labels[radio[j]].style.color = "#525A68"
          console.log(radio[j]);
        }
    }
    if (e.checked == true) {
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute('for') == e.getAttribute('id')) {
          labels[i].style.color = "#525A68"
          radio[3]=i;
        }
      }
    }
}
function Check5(e) {
  let labels = document.querySelectorAll('label')
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.color = "#BEC0C2"
        for (var j = 0; j < radio.length; j++) {
          labels[radio[j]].style.color = "#525A68"
          console.log(radio[j]);
        }
    }
    if (e.checked == true) {
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute('for') == e.getAttribute('id')) {
          labels[i].style.color = "#525A68"
          radio[4]=i;
        }
      }
    }
}
