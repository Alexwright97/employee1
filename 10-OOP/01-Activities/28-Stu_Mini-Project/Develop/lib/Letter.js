// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Letter {
  constructor(char) {
    // If a character is not a number or a letter, make it visible right away
    // Save the underlying character
    // TODO
  }

  // Returns either an underscore or the underlying character depending on `this.visible`
  //    because we call this function toString, when we call `this.letters.join` in
  //    Word.js, JavaScript automatically uses the value we return here
  toString() {
    // TODO
  }

  getSolution() {
    // TODO
  }

  // Accepts a user's guess
  guess(charGuess) {
    // TODO
  }
}

module.exports = Letter;
