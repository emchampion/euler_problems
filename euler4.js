//euler4.js
function largestPal(digits) {
  var num = [] //stores all palindromes
  for (var i = 999; i > 900; i--){
    for (var x = 999; x > 900; x--){
      var multi = (i * x);
      if (palCheck(multi)){ //sends number to palCheck
        num.push(i * x //pushes number to array
      }
    }
  }
  return Math.max.apply(Math, num); //checks array for largest palindrome stored
}

function palCheck(str) { //checks if number is a plindrome
  return str.toString() == str.toString().split('').reverse().join('');
}

console.log(largestPal());
