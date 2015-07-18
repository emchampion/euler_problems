function findPrime(input){
    var prime = 0;
    var x = input;
    var div = 2;

    while (x > 1){
        while (x % div === 0){
            prime = x;
            x = x / div;
        }
        div++;
    }
    return prime;
};

var input = 600851475143;
var result = findPrime(input);
console.log(result);
