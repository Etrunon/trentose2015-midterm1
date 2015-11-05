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
  currentSentence

  createSentenceBlock: function(){
    this.currentSentence = $("#template").clone();

    this.currentSentence.css("display", "");
    this.currentSentence.children().html(data[this.nSentence].phrase_en);

    $(".sentences").append(this.currentSentence);

    this.nSentence ++;
 },

 verifySentence: function(){
   if($("#solutionBar").val() == data[this.nSentence]){
     alert("corretta");
     this.nSentence++;
     this.nCorrect++;

     this.currentSentence.remove();
     this.createSentenceBlock();
   }
 },

 sentenceCounter: function(){
   var tmpl = '<div class="finalTemplate"> ' +
     '<h3> You have solved <span id="tot-good">XXX</span> of <span id="tot">YYY</span></h3>' +
  ' </div>';

  tmpl = tmpl.replace("YYY", data.length);
  tmpl = tmpl.replace("XXX", this.nCorrect);

  $(".scores").append(tmpl);
},

}

$(document).ready(function(){
  SentenceHandler.createSentenceBlock();
  SentenceHandler.sentenceCounter();

  $(".btn opt-continue").on("click", SentenceHandler.verifySentence());
});
