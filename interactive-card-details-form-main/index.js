"use strict";
//DOM Elements

//wrappers
const form_section_wrapper = document.querySelector(".form-section-wrapper");
const submit_message_wrapper = document.querySelector(".submit-message-wrapper");

//Card View

const card__number = document.querySelector(".card-number");
const card__ownerName = document.querySelector(".card-owner");
const card__month = document.querySelector(".month");
const card__year = document.querySelector(".year");
const card__cvc = document.querySelector(".card-cvc");

// User Inputs
const input__cardholderName = document.getElementById("input-cardholder-name");
const input__cardholderError = document.getElementById("input-cardholder-error");
const input__cardNumber = document.getElementById("input-card-number");
const input__cardNumberError = document.getElementById("input-card-number-error");
const input__month = document.getElementById("input-month");
const input__monthError = document.getElementById("month-error");
const input__year = document.getElementById("input-year");
const input__yearError = document.getElementById("year-error");
const input__cvc = document.getElementById("input-cvc");
const input__cvcError = document.getElementById("cvc-error");
const inputs = document.querySelectorAll(".form-control")
// form
const form = document.getElementById("card-data-form");
// buttons
const submit_button = document.getElementsByClassName("submit-button");


// Regex
const AllRegex = {
  cardholder: new RegExp(/[^\a-zA-Z\s]/),
  cardNumber: new RegExp(/([^\d ])/),
}

// user data
const data = {
  cardHolder: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  cvc: "",
}


// Event listeners
input__cardholderName.addEventListener("input", (e) => inputHandler({ e: e, view: card__ownerName, errorElement: input__cardholderError, regex: AllRegex.cardholder, errorText: "Wrong format, only letters", initialText: "Jane Appleseed", inputFormatter: false, dataToSave: "cardHolder" }))
input__cardNumber.addEventListener("input", (e) => inputHandler({ e: e, view: card__number, errorElement: input__cardNumberError, regex: AllRegex.cardNumber, errorText: "Wrong format, only numbers", initialText: "1356 5667 9934 8670", inputFormatter: true, dataToSave: "cardNumber" }))
input__month.addEventListener("input", (e) => inputHandler({ e: e, view: card__month, errorElement: input__monthError, regex: AllRegex.cardNumber, errorText: "Wrong format, only numbers", initialText: "00", inputFormatter: true, dataToSave: "cardMonth" }))
input__year.addEventListener("input", (e) => inputHandler({ e: e, view: card__year, errorElement: input__monthError, regex: AllRegex.cardNumber, errorText: "Wrong format, only numbers", initialText: "00", inputFormatter: true, dataToSave: "cardYear" }))
input__cvc.addEventListener("input", (e) => inputHandler({ e: e, view: card__cvc, errorElement: input__cvcError, regex: AllRegex.cardNumber, errorText: "Wrong format, only numbers", initialText: "", inputFormatter: true, dataToSave: "cvc" }))


form.addEventListener("submit", (e) => submitHandler(e))




card__number.textContent = `1461 8859 8842 3332`;


function inputHandler({ e, view, errorElement, regex, errorText, initialText, inputFormatter, dataToSave }) {

  e.target.removeAttribute("error-format");
  errorElement.textContent = "";

  let inputValue = e.target.value;

  if (inputFormatter) {
    e.target.value = cardNumberFormatter(e.target.value)
  }
  if (regex.test(inputValue)) {
    e.target.setAttribute("error-format", true)
    errorElement.textContent = `${errorText}`
  }
  if (!regex.test(inputValue)) {
    e.target.removeAttribute("error-format")
    view.textContent = inputValue;
    errorElement.textContent = ""
    data[dataToSave] = e.target.value;
  }
  if (!view.textContent) {
    view.textContent = initialText;
  }
}

function monthInputHandler() {

}


function cardNumberFormatter(string) {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
  const onlyNumbers = string.replace(/[^\d]/g, '');

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join(' ')
  )
}


const submitHandler = (e) => {
  e.preventDefault();

  let errors = [...inputs].every((input) => {
    !input.hasAttribute("error-format");
  })
  console.log(errors);
  if (!errors) {
    e.target.style.display = "none";
    submit_message_wrapper.style.display = "flex";
  } else {
    return;
  }

}
