const form = document.querySelector("form");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const url = "https://api.funtranslations.com/translate/minion.json";

const getTranslationURL = (input) => `${url}?text=${input}`;

const errorHandler = (error) => {
  console.log(error);
  alert("oops, try again tomorrow");
};

const submitHandler = (event) => {
  event.preventDefault();
  output.innerText = "";
  const text = input.value;
  if (text.trim() === "") {
    input.classList.add("invalid");
    return;
  } else input.classList.remove("invalid");

  fetch(getTranslationURL(text))
    .then((response) => response.json())
    .then((json) => {
      output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
};

form.addEventListener("submit", submitHandler);
