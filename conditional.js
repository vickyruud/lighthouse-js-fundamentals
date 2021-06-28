const raining = false;
const cold = false;
let temperature = 45;

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (cold){
  console.log("Make sure you pick out a scarf!");


}
else{
  console.log("Short Sleeves are fine!")
}
console.log("Now you are ready to go outside!");  

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}