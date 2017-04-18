function swapLetters(string){
  var swappedWord = ""; 
    function eachLetterSwapped(letter){
      var startChar = 97;
      var endChar = 122; 
      var swappedString = letter.toLowerCase();
      var charValueDifference = startChar - swappedString.charCodeAt();
      var swapCharValue;

        if(charValueDifference < 0){
          swapCharValue = endChar + charValueDifference;
          } else {
          swapCharValue = endChar - charValueDifference;
        }
      swappedWord += String.fromCharCode(swapCharValue);
    }

  for(var i = 0; i < string.length; i++){
    eachLetterSwapped(string[i]); 
  }
  
  return swappedWord
}