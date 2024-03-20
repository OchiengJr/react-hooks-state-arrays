import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

// SpicyFoodList component
function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  // Event handlers
  const handleAddFood = () => {
    const newFood = getNewRandomSpicyFood();
    setFoods(prevFoods => [...prevFoods, newFood]);
  };

  const handleLiClick = (id) => {
    const newFoodArray = foods.map((food) =>
      food.id === id ? { ...food, heatLevel: food.heatLevel + 1 } : food
    );
    setFoods(newFoodArray);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  // Filtered foods to display
  const filteredFoods = foods.filter((food) =>
    filterBy === "All" ? true : food.cuisine === filterBy
  );

  // Food list
  const foodList = filteredFoods.map((food) => (
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
