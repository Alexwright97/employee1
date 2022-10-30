const Letter = require("./Letter");

// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
class Word {
  constructor(word) {
    // word.split - splits word into array of letters
    // .map - instantiate a new `Letter` for each character and return an array
    // referred to with the instance variable, `letters`
    // TODO
  }

  getSolution() {
    // iterate over each letter and return the solution for each 
    // to form an array of solved letters
    // create a string from the array of solved letters

    // TODO
  }

  // setting `toString()` as a method lets us concatenate it like we would a string!
  toString() {
    // TODO // see Letter.prototype.toString in Letter.js
  }

  guessLetter(char) {
    // Check to see if any of the letters in the array match the user's guess and updates `foundLetter`
    // TODO

    // return whether we found a letter
    // TODO
  }

  // Returns true if all letters in the word have been guessed
  guessedCorrectly() {
    // Hint: arrays' `every` method returns true if the callback function returns true for every element in the array
    // TODO
  }
}

module.exports = Word;