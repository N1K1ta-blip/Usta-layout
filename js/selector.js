const selected = document.querySelector(".selected");
const selected2 = document.querySelector(".selected2");
const optionsContainer = document.querySelector(".options-container");
const optionsContainer2 = document.querySelector(".options-container2");
let select_count1 = 0;
let select_count2 = 0;
let select_count3 = 0;
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});
selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

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
      document.getElementsByClassName('additionally_block')[2].style.display = "none"
    }
    if (select_count2 == 0) {
      document.getElementsByClassName('additionally_block')[1].style.display = "block"
      select_count2 ++
    }else{
      document.getElementsByClassName('additionally_block')[1].style.display = "none"
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
      document.getElementsByClassName('additionally_block')[2].style.display = "block"
      select_count3 ++
    }else{
      document.getElementsByClassName('additionally_block')[2].style.display = "none"
      select_count3 --
    }
  }
}
function OtherValue(e) {
  let value = e.getAttribute('data-value')
  if(value == 0){
    document.getElementById('current_value').innerHTML = e.innerHTML
    document.getElementsByClassName('additionally_block')[0].style.display = "none"
    select_count1 = 0
  }
  if(value == 1){
    document.getElementById('current_value1').innerHTML = e.innerHTML
    document.getElementsByClassName('additionally_block')[1].style.display = "none"
    select_count2 = 0
  }
  if(value == 2){
    document.getElementById('current_value2').innerHTML = e.innerHTML
    document.getElementsByClassName('additionally_block')[2].style.display = "none"
    select_count3 = 0
  }
}
