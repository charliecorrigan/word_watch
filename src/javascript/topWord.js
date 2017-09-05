const baseUrl = 'https://wordwatch-api.herokuapp.com'
class TopWord {
  constructor(){}

  fetchTopWord(){
    return $.getJSON(baseUrl + '/api/v1/top_word')
  }

  displayTopWord(){
    this.fetchTopWord().then(data => {
      let word = Object.keys(data.word)[0];
      let frequency = data.word[word]
      $('.top-word h3').append(word + " (" + frequency + ")");
    })
  }
}
module.exports = TopWord