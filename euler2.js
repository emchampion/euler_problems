//Second Euler problem https://projecteuler.net/problem=2
var firstNum = 1;
var secNum = 2;
var newNum = 0;

var fibonArray = [];
var sum = 0;

while(newNum < 4000000){
  newNum = firstNum + secNum;
  firstNum = secNum;
  secNum = newNum
  fibonArray.push(newNum);
}

for(var i in fibonArray) {
  if(fibonArray[i]%2===0) {
    sum +=fibonArray[i];
  }
}

console.log(sum);
