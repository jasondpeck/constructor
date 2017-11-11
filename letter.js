var letter = function(let) {
  this.char = let;
  this.appear = false;
  this.letterGen = function() {

    return !(this.appear) ? " _ " : this.char;
  };
};

module.exports = letter;