const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let i = 0;
console.log("There are the ingredients")
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
for(j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(k = ingredients.length - 1; k >= 0 ; k--){
  console.log(ingredients[k]);
}