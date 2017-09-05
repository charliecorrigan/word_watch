const baseUrl = 'https://wordwatch-api.herokuapp.com'
class TopWord {
  constructor(){}

  fetchTopWord(){
    return $.getJSON(baseUrl + '/api/v1/top_word')
  }

  displayTopWord(){
    this.fetchTopWord().then(data => {
      for (property in data.word) {
        console.log(property)
    }
      debugger;
    })
  }
}
module.exports = TopWord