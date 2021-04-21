function Check(e) {
  let labels = document.querySelectorAll('label')
  if (e.checked == true) {
    for (var i = 0; i < labels.length; i++) {
      if (labels[i].getAttribute('for') == e.getAttribute('id')) {
        labels[i].style.color = "#525A68"
      }
    }
  }
  if (e.checked == false) {
    for (var i = 0; i < labels.length; i++) {
      if (labels[i].getAttribute('for') == e.getAttribute('id')) {
        labels[i].style.color = "#BEC0C2"
      }
    }
  }
}
