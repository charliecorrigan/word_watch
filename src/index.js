$ = require('jquery')
const TopWord = require('./javascript/topWord')
const PastedText = require('./javascript/pastedText')

document.addEventListener("DOMContentLoaded", () => {
  let topWord = new TopWord()
  topWord.displayTopWord()
  let pastedText = new PastedText()
  pastedText.listen()
})

