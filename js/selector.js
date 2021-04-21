const selected = document.querySelector(".selected");
const selected2 = document.querySelector(".selected2");
const optionsContainer = document.querySelector(".options-container");
const optionsContainer2 = document.querySelector(".options-container2");

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
