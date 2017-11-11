// variables for requiring prompt package and word.js file
var prompt = require('prompt');
var word = require('./word.js');

prompt.start();

// variables for the list of words that are randomly chosen from, the actual word that is randomly chosen (guessThis),
// and guesses left (starts at 10)
var hangman = {
  wordlist : ["giraffe", "hippopotamus", "orangutan", "armadillo", "hellbender", "axolotl"],
  guessThis : null,
  guessesLeft : 10,

//function to start the game which resets the guessesLeft to 10, then generates a random word from wordlist,
//puts " _ " in place of the actual letter, the this.prompt 
  startGame: function (wrd){
    this.resetguessesLeft();
    this.guessThis = new word(this.wordlist[Math.floor(Math.random()* this.wordlist.length)]);
    this.guessThis.addLetters();
    this.prompt();
  },

  resetguessesLeft: function(){
    this.guessesLeft = 10;
  },
  prompt: function(){
    var self = this;

    prompt.get(['yourGuess'], function(err, result) {

//if the user guesses a correct letter it puts it into the blank space, decrements the guessesLeft variable if guess is wrong
  var userGuesses = self.guessThis.verifyLetter(result.yourGuess);

      if (userGuesses == 0){
        console.log('Incorrect letter guessed!');
        self.guessesLeft--;
      }
      else {
        console.log('Correct guess!');

      if(self.guessThis.wordUp()){
        console.log('You Win!!!!!');
          return;
        }
      }

      console.log('Guesses left: ', self.guessesLeft);
      console.log(self.guessThis.wordGen());

      if ((self.guessesLeft > 0) && (self.guessThis.found == false)){
        self.prompt();
      }
        else if(self.guessesLeft == 0){
          console.log('You lose! The word was', self.guessThis.word);
        }
        else{
          console.log(self.guessThis.wordGen());
        }
      });
    }
  };

hangman.startGame();