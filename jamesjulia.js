let x = 1;
while (x <= 100) {
  if (x % 3 === 0 && x % 5 !== 0){
    console.log("Roman");
  }
  else if( x % 3 !== 0 && x % 5 === 0){
    console.log("Pulse");
  }
  else if(x % 3 === 0 && x % 5 == 0){
    console.log("Roman Pulse");
  }
  else{
    console.log(x);
  }
  x += 1;
}