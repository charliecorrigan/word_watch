const baseUrl = 'https://wordwatch-api.herokuapp.com'

let submission;

class PastedText {
  constructor(){
    words: [];
  }

  listen(){
    $('.text-submission button').on('click', ()=>{
      this.words = $('.text-submission textarea').val().split(" ");
      this.postWords(this.words)
      this.displayWords()
    })
  }

  postWords(words){
    words.forEach((singleWord) => {
      let wordParams = { word: { value: singleWord } }
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
    let wordFrequency = {}
    this.words.forEach(word => {
      if (wordFrequency[word]) {
        wordFrequency[word] += 1
      } else {
        wordFrequency[word] = 1
      }
    })
    for (var key in wordFrequency) {
      $('.word-count').append('<span style="font-size: ' + wordFrequency[key] + 'em">' + key + "\xa0" + '</span>')
    }
  }
}

module.exports = PastedText