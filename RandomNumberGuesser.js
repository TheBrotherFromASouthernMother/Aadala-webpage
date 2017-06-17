var upperlimit = 10000;
var randomNumber = getRandomNumber(upperlimit);

var guess; 
var attempts = 0;




function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}


while (guess !== randomNumber) {
  guess = getRandomNumber (upperlimit)
  attempts ++; 




}


document.write("<p>The random number is equal to: " + randomNumber + "</p>");
document.write("<p>It took the comuter " + attempts + " attempts to guess the random number</p>");
