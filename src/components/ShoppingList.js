import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItems, setSearchItems] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchItem(event) {
    setSearchItems(event.target.value)
  }

  const searchedItemsToDisplay = items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item => item.name.toLowerCase().includes(searchItems.toLowerCase())))
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items={items} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchItem} search={searchItems}/>
      <ul className="Items">
      {searchedItemsToDisplay.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
      ))}

      </ul>
    </div>
  );
}

export default ShoppingList;
