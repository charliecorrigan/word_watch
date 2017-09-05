const baseUrl = 'https://wordwatch-api.herokuapp.com'

let submission;

class PastedText {
  constructor(){
    words: [];
  }

  listen(){
    this.listenForClick()
    this.listenForEnter()
  }

  listenForClick(){
    $('.text-submission button').on('click', ()=>{
      this.postAndDisplayWords();
    })
  }

  listenForEnter(){
    $('.text-submission textarea').keypress(key => {
      if (key.keyCode == '13') {
        this.postAndDisplayWords();
      }
    })
  }

  postAndDisplayWords(){
    this.words = $('.text-submission textarea').val().split(" ");
    this.postWords(this.words)
    this.displayWords()
  }

  postWords(words){
    words.forEach((singleWord) => {
      let wordParams = { word: { value: singleWord.toLowerCase() } }
      $.post(baseUrl + '/api/v1/words', wordParams)
      .then(function(result){
        console.log(result)
      })
      .catch(this.handleError);
    })
  };

  handleError(error) {
    console.error(error);
  };

  displayWords() {
    let wordFrequency = this.countWords()
    for (var key in wordFrequency) {
      $('.word-count').append(this.styledHtml(key, wordFrequency))
    }
  }

  styledHtml(key, wordFrequency){
    return '<span style="font-size: ' + wordFrequency[key] + 'em">' + key + "\xa0" + '</span>'
  }

  countWords(){
    let wordFrequency = {}
    this.words.forEach(word => {
      let lowercaseWord = word.toLowerCase()
      if (wordFrequency[lowercaseWord]) {
        wordFrequency[lowercaseWord] += 1
      } else {
        wordFrequency[lowercaseWord] = 1
      }
    })
  return wordFrequency
  }
}

module.exports = PastedText