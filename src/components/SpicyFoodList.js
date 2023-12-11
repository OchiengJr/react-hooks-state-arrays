import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  // Event handlers
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      return food.id === id
        ? { ...food, heatLevel: food.heatLevel + 1 }
        : food;
    });
    setFoods(newFoodArray);
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  // Filtered foods to display
  const foodsToDisplay = foods.filter((food) => {
    return filterBy === "All" ? true : food.cuisine === filterBy;
  });

  // Food list
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Mexican">Mexican</option>
        <option value="Thai">Thai</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;

