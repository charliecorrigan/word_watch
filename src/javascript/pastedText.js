const baseUrl = 'https://wordwatch-api.herokuapp.com'

class PastedText {
  constructor(){}

  listen(){
    $('.text-submission button').on('click', ()=>{
      let submission = $('.text-submission textarea').val().split(" ");
      this.postWords(submission)
    })
  }

  postWords(words){
    words.forEach(singleWord => {
      let wordParams = { word: { value: singleWord } }
      $.post(baseUrl + '/api/v1/words', wordParams)
      .then(function(result){
        debugger;
      })
      .catch(this.handleError);
    })
  };

  handleError(error) {
    console.error(error);
  };
}

module.exports = PastedText