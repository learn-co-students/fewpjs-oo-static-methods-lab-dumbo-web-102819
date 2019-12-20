class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
  }
  
  static sanitize(str) {
    return str.replace(/[^-',A-Za-z0-9 ]/gm, "")
  }
  
  static titleize(str) {
    let articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let phrase = str.split(' ');
    let firstWord = phrase[0];
    let firstLetter = firstWord.charAt(0).toUpperCase();

    firstWord = firstWord.replace(firstWord.charAt(0), firstLetter);
    phrase = phrase.splice(1, phrase.length - 1);
    
    let newPhrase = phrase.map(word => {
      if (articles.indexOf(word) < 0) {
        let firstLetter = word.charAt(0);
        let capitalized = word.replace(firstLetter, firstLetter.toUpperCase())
        return capitalized;
      } else {
        return word
      }
    });
    
    newPhrase.unshift(firstWord);
    return newPhrase.join(" ");
  }
  
}