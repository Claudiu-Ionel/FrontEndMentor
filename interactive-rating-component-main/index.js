// submit phase
/* 
  .top-image {
  width: 144px;
  height: 96px
    img {
    url(./images/illustration-thank-you.svg)
    }
  }

  new div - text inside "You selected ${var} out of 5"

 .main-header - text inside "Thank you!"

 .info - text inside "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
*/

// html elements
const ratingComponentWrapper = document.querySelector(".rating-component-wrapper");
const imageWrapper = document.querySelector(".image-wrapper");
const image = document.querySelector(".image");
const mainHeader = document.querySelector(".main-header");
const info = document.querySelector(".info");
const ratingButtons = document.querySelector(".rating-buttons");
const submitButton = document.querySelector(".submit-button");
const userRating = document.querySelector(".user-rating");
const radioInputs = document.querySelectorAll(`input[type="radio"]`);

//variables
let rating = 1;


//events
submitButton.addEventListener("click", submitAction)
radioInputs.forEach((radio) => {
  radio.addEventListener("click", (e) => selectRating(e))
})
//functions

function submitAction() {
  imageWrapper.classList.toggle("submit-phase");
  submitButton.classList.toggle("display-none");
  ratingButtons.classList.toggle("display-none");
  userRating.classList.toggle("display-none");
  ratingComponentWrapper.classList.toggle("align-center")
  userRating.textContent = `You selected ${rating} out of 5`;
  mainHeader.textContent = "Thank you!"
  info.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
  image.src = "./images/illustration-thank-you.svg";

}

function selectRating(e) {
  rating = e.target.value;
}
