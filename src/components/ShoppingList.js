import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItems, setSearchItems] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchItem(event) {
    setSearchItems(event.target.value)
  }

  const searchedItemsToDisplay = items.filter((item) => {
    if (searchItems == "") {
      return item
    }
    else if (item.name.toLowerCase().includes(searchItems.toLowerCase())) {
      return item
    }
  })
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchItem}/>
      <ul className="Items">
      {searchedItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {/* {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
