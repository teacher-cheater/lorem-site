// document.addEventListener("DOMContentLoaded", function () {
const burger = document.querySelector(".header__burger");
const list = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("_open-burger");
  list.classList.toggle("_open-burger");
});

const rangeInput = document.getElementById("user-range");
const rangeValue = document.querySelector(".form-order__range-value");

rangeInput.addEventListener("input", function () {
  rangeValue.textContent = `${this.value}%`;
});

rangeInput.dispatchEvent(new Event("input"));

document.querySelectorAll(".dropdown").forEach(dropDownWrapper => {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown-items__btn");
  const dropDownList = dropDownWrapper.querySelector(".dropdown-items__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown-items__item"
  );
  //const dropDownInput = dropDownWrapper.querySelector('.dropdown-items__input');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener("click", function (e) {
    e.preventDefault();
    dropDownList.classList.toggle("dropdown-items__list--visible");
    this.classList.toggle("dropdown-items__btn--active");
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(listItem => {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownList.classList.remove("dropdown-items__list--visible");
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener("click", e => {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown-items__btn--active");
      dropDownList.classList.remove("dropdown-items__list--visible");
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener("keydown", e => {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown-items__btn--active");
      dropDownList.classList.remove("dropdown-items__list--visible");
    }
  });
});
// });
