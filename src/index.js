$ = require('jquery');
const TopWord = require('./javascript/topWord');

document.addEventListener("DOMContentLoaded", () => {
  let topWord = new TopWord()
  topWord.displayTopWord();
})

