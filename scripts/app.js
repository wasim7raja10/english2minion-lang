const translateBtn = document.querySelector("button");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const url = "https://api.funtranslations.com/translate/minion.json"

const getTranslationURL = input => `${url}?text=${input}`

const errorHandler = (error) => {
    console.log(error);
    alert("oops, try again tomorrow")
}

const clickHandler = () => {
    const text = input.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(text))
        .then(response => response.json())
        .then(json => {
            output.innerText = json.contents.translated;
        })
        .catch(errorHandler)
};

translateBtn.addEventListener("click", clickHandler)