// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var length = cardNumber.length
  var output;
  if (cardNumber.length == 14 && (cardNumber.slice(0,2) == '38' || cardNumber.slice(0,2) == '39') ){
    output = "Diner's Club";
  } else if (cardNumber.length == 15 && (cardNumber.slice(0,2) == '34' || cardNumber.slice(0,2) == '37') ) {
    output = "American Express";
  } else if ( ['4903', '4905', '4911', '4936', '6333', '6759'].includes(cardNumber.slice(0,4)) && [16, 18, 19].includes(length) ){
      output = "Switch";
    } else if ( ['564182', '633110'].includes(cardNumber.slice(0,6)) && [16, 18, 19].includes(length)  ){
       output = "Switch";
    } else if ((cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19) && cardNumber.slice(0,1) == 4) {
    output = "Visa";
    } else if (cardNumber.length = 16 && (cardNumber.slice(0,2) == '51' || cardNumber.slice(0,2) == '51' || cardNumber.slice(0,2) == '52' || cardNumber.slice(0,2) == '53' || cardNumber.slice(0,2) == '54' || cardNumber.slice(0,2) == '55')) {
    output = "MasterCard";
  } else if ( (cardNumber.slice(0,2) == '65' && (length == 16 || length == 19)) || (cardNumber.slice(0,4) == '6011' && (length == 16 || length == 19)) || ((cardNumber.slice(0,3) >= '644' || cardNumber.slice(0,3) == '649') &&  (length == 16 || length == 19)) ){
    output = "Discover";
  } else if ( ['5018', '5020', '5038', '6304'].includes(cardNumber.slice(0,4)) && (length >= 12 || length <=19)  ){
    output = "Maestro";
  } else if (
       ( (cardNumber.slice(0,6) >= 622126 && cardNumber.slice(0,6) <= 622925) && (length >= 16 && length <= 19) )
    || ( (cardNumber.slice(0,3) >= 624 && cardNumber.slice(0,3) <= 626) && (length >= 16 && length <= 19) )
    || ( (cardNumber.slice(0,4) >= 6282 && cardNumber.slice(0,4) <= 6288) && (length >= 16 && length <= 19) )
    ){
      output = "China UnionPay"
     }


// var switchPrefix = ['4903', '4905', '4911', '4936', '6333', '6759']
// var switchPrefix6 = ['564182', '633110']
// var switchLength = ['16', '18', '19']
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.



  return output;
};


// console.log(detectNetwork('12345678901234'))

