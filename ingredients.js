const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++;
}

// Write a for loop that prints out the contents of ingredients:
for (let y = 0; y < ingredients.length; y++) {
  console.log(ingredients[y]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let y = ingredients.length; y >= 0; y--) {
  // let reversed = ingredients.reverse();
  // ^^I really was going to print this out, and forgot about y-- above^^
  console.log(ingredients[y]);
}