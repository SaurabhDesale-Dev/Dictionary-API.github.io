const meaningInput = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const word = document.querySelector(".word");
const meaning = document.querySelector(".meaning-one");
const partsOfSpeech = document.querySelector(".part-of-speech-text");

const getData = () => {
  let wordVal = meaningInput.value;
  wordVal.toLowerCase();
  const fetchUrl = () => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordVal}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let meaningDataOne = data[0].meanings[0].definitions[0].definition;
        let partsOfSpeech = data[0].meanings[0].partOfSpeech;
        word.innerHTML = `Word is ${wordVal}`;
        meaning.innerHTML = `${meaningDataOne}`;
        console.log(data);
      })
      .catch((err) => {
        word.innerHTML = `Word is ${wordVal}`;
        meaning.innerHTML = `SORRY there is no such meaning for ${wordVal} please type a valid word`;
      });
  };
  fetchUrl();
};

button.addEventListener("click", getData);
