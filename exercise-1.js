/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const ceiloBlue = {
  name: "Ceilo Blue",
  cuisines: ["red", "green", "blue"],
  numberOfStars: 4,
  favorited: true,
};
// console.log(ceiloBlue);

ceiloBlue.address = "123 Main Street";
ceiloBlue.zipcode = 30044;
ceiloBlue.acceptsReservations = false;

// console.log(ceiloBlue);

ceiloBlue.numberOfStars += 1;
ceiloBlue.favorited = false;
ceiloBlue.cuisines.push("purple");

// console.log(ceiloBlue);
function retrieveProperty(key, obj) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
}
// for (const key of Object.keys(ceiloBlue)) {
// console.log(retrieveProperty("cuisines", ceiloBlue));
// console.log(retrieveProperty("favorited", ceiloBlue));
// console.log(retrieveProperty("name", ceiloBlue));
// console.log(retrieveProperty("nickname", ceiloBlue));
// console.log(retrieveProperty("state", ceiloBlue));

//
