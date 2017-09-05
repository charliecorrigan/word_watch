class PastedText {
  constructor(){}

  listen(){
    $('.text-submission button').on('click', ()=>{
      let submission = $('.text-submission textarea').val()
      debugger;
    })
  }
}

module.exports = PastedText