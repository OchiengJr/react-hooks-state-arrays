// Initial spicy foods data
const initialSpicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

// Array to store additional spicy foods
const newSpicyFoods = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

// Function to generate a new random spicy food item
let nextId = initialSpicyFoods.length + 1;
function getNewRandomSpicyFood() {
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  const newSpicyFood = { ...newSpicyFoods[index], id: nextId++ };
  return newSpicyFood;
}

// Export initial spicy foods and the function to generate new random spicy food
export { initialSpicyFoods as spicyFoods, getNewRandomSpicyFood };
