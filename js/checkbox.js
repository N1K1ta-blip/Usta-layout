let page_type = document.getElementById('type_page').getAttribute('data-value');
let first_input;
let second_input;
let count = 0;
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

  }else{
    // if (e.checked == true) {
    //   for (var i = 0; i < labels.length; i++) {
    //     if (labels[i].getAttribute('for') == e.getAttribute('id')) {
    //       labels[i].style.color = "#525A68"
    //       count ++;
    //     }
    //   }
    // }
    // if (e.checked == false) {
    //   for (var i = 0; i < labels.length; i++) {
    //     if (labels[i].getAttribute('for') == e.getAttribute('id')) {
    //       labels[i].style.color = "#BEC0C2"
    //       count --;
    //     }
    //   }
    // }
  }
}
