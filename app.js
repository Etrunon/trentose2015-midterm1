/* your code should go in this file */

/*
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */
var SentenceHandler = {

  nSentence: 0,
  nCorrect: 0,

  createSentenceBlock: function(){
    var tmpl = $("#template").clone();

    tmpl.css("display", "");
    tmpl.children().html(data[this.nSentence].phrase_en);

    $(".sentences").append(tmpl);

    this.nSentence ++;
 },

 verifySentence: function(){

   console.log($("#solutionBar").val());
 },

 sentenceCounter: function(){
   var tmpl = '<div class="finalTemplate"> '
     '<h3> You have solved <span id="tot-good">XXX</span> of <span id="tot">YYY</span></h3>'
  ' </div>';

  tmpl.replace("YYY", data.size);
  tmpl.replace("XXX", nCorrect);

  $(".scores").append(tmpl);
 }

}

$(document).ready(function(){
  SentenceHandler.createSentenceBlock();
  SentenceHandler.sentenceCounter();

  $(".btn opt-continue").on("click", SentenceHandler.verifySentence());
});
