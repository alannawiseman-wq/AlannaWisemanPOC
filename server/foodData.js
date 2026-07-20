// Each item is an object with: id, name, and price
const foods = [
  { id: 1, name: "Pizza Slice",  price: 3.50 },
  { id: 2, name: "Cheeseburger", price: 6.99 },
  { id: 3, name: "Caesar Salad", price: 5.25 },
  { id: 4, name: "Sushi Roll",   price: 8.00 },
  { id: 5, name: "Iced Coffee",  price: 2.75 }
];

// Returns the complete list of food items.
function getAll() {
  return foods;
}

// Makes getAll() available to other files.
module.exports = { getAll };