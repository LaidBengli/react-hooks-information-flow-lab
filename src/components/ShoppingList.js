import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
 const [selected, setSelected] = useState([...items]);

  
  const itemsToDisplay = (selectedCategory ) =>{
   setSelected(items.filter((item) => {
    if (selectedCategory === "All") return true;
     
    return item.category === selectedCategory;
  }))};

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange = {itemsToDisplay} />
      <ul className="Items">
        {selected.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
