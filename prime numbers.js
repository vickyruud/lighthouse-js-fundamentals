function isPrime(integer){
  for (let x =2; x < integer; x++ ){
    if(integer % x === 0){
      console.log(integer + " is divisible by "+ x);
      return false;
    }
  }
return true
}
console.log(isPrime(47));