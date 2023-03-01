// DOM elements


const adviceID = document.querySelector(".advice-id")
const quoteContent = document.querySelector(".quote-content")
const quoteButton = document.querySelector(".random-quote-button")

let timeout = false;

async function getRandomQuote() {
  try {
    /* make the button disabled so that the user does not spam it until the data fetching is finished */
    quoteButton.setAttribute('disabled', 'disabled');
    //api call
    const apiResponse = await fetch("https://api.adviceslip.com/advice");
    const apiData = await apiResponse.json();
    const { id, advice } = apiData.slip;
    /* set data to the title and content of the advice component */
    adviceID.textContent = id;
    quoteContent.textContent = `“${advice}”`;
    const timeout = setTimeout(() => {
      quoteButton.removeAttribute('disabled')
      clearInterval(timeout)
    }, 1000);
  } catch (err) {
    console.log(err);
  }
}
/* on document load fetch random advice from api then attach click event listener to the button */
document.addEventListener("DOMContentLoaded", () => {
  getRandomQuote()
  quoteButton.addEventListener("click", getRandomQuote)
})


