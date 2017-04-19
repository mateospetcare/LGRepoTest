//Reset Function
function reset() {
  document.querySelector('input').value = '';
  document.querySelector('#textDisplay').textContent = '';
}

//Function reverses the input string
//function robert(string) {
  //todo
//  return string;
//}

//Function shuffles the input string
function james(str){
// declare some variables

var shuffledStr; // where the final output lives.
var strArray = str.toLowerCase().split(''); // changing initial string to an array
var randomIndex; // variable to store the random index generated each time.
var a = strArray.length; // storing the length of the array

// this loop generates a random number and turns it into the index of strArray
// so that we can cycle through and shuffle.
for (var i = a - 1; i > 0; i--) {
  var randomIndex = Math.floor(Math.random() * (i + 1));
  var temp = strArray[i];
  strArray[i] = strArray[randomIndex];
  strArray[randomIndex] = temp;
};

  // join the results
  shuffledStr = strArray.join("");
  return shuffledStr;
}

//swaps a->z, b->y and so on.
function mateo(string) {
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
