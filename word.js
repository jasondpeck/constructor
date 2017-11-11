var letter = require('./letter.js');

var word = function(Word){
  this.word = Word;
  this.lets = [];
  this.found = false;

  this.addLetters = function() {
    for(var i = 0; i < this.word.length; i++) {
      this.lets.push(new letter(this.word[i]));
    }
  };


  this.wordUp = function() {
    this.found = this.lets.every(function(thisLet) {
      return thisLet.appear;
  });

    return this.found;
  };

  this.verifyLetter = function(yourGuess) {
    var Return = 0;

    for(var i = 0; i < this.lets.length; i++) {
      if (this.lets[i].char == yourGuess){
        this.lets[i].appear = true;
        Return++;
      }
    }

    return Return;
  };

  this.wordGen = function() {
    var str = '';

    for(var i=0; i < this.lets.length; i++){
      str += this.lets[i].letterGen();
    }

    return str;
  };
}

module.exports = word;