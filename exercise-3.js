// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

//
function printPizzaPlace(pizzaPlace) {
  for (const key of Object.keys(pizzaPlace)) {
    console.log(key, pizzaPlace[key]);
  } //grabs key name and prints it and value
}
//  printPizzaPlace(dominos);  //logs key/value pair or 'pizzaPlace' object

function toppingsPriceRange(pizzaPlace) {
  const { pizzaToppings } = pizzaPlace;
  let highest = -Infinity;
  let lowest = Infinity;
  for (let key in pizzaToppings) {
    if (pizzaToppings[key] > highest) {
      highest = pizzaToppings[key];
    }
    if (pizzaToppings[key] < lowest) {
      lowest = pizzaToppings[key];
    }
  }
  return [highest, lowest];
}
//console.log(toppingsPriceRange(dominos));

function calculateAverageRating(pizzaPlace) {
  const { starReviews } = pizzaPlace;
  let num = 0;
  let count = Object.keys(starReviews).length;
  for (let key in starReviews) {
    num += starReviews[key];
  }
  return (num / count).toFixed(2);
}
//console.log(calculateAverageRating(dominos));
