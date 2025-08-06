/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //
// ******************************

//*********************************
// *********************************
function grabCategories(object) {
  return Object.keys(object);
}
//console.log(grabCategories(papaJohns)); //calls functions and logs all keys
//bonus
//console.log(grabCategories(papaJohns.pizzaToppings)); //calls the functions-display contents of pizzatoppings

function verifyValues(object, target) {
  return Object.values(object).length === target;
} //function returns values, returns boolean # of values is equal to input
// return a true and a false
//console.log(verifyValues(papaJohns, 8));
//console.log(verifyValues(papaJohns, 9));

// function to get topping and price
function getToppingsInfo(object) {
  return Object.entries(object.pizzaToppings);
} //returns all elements of array of pizzatippings
//console.log(getToppingsInfo(papaJohns)); //logs getToppingsInfo giving array of toppings and price

papaJohns.printAd = function (topping) {
  return `Welcome to ${this.name}. We are located at ${this.address}. This week, we are having a sale on ${topping} for $${this.pizzaToppings[topping]}. ${this.slogan}.`;
}; //can be used by any pizza restaurant object
//console.log(papaJohns.printAd("pepperoni"));
//

papaJohns.slogan = "Nobody out pizzas the HUT!";
papaJohns.address = " 123 Hut Lane";

console.log(papaJohns.printAd("pepperoni"));
