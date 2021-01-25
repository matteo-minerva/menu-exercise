import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  items.map((item) => item.category.toLowerCase());

  const handleClick = (value) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
          </div>

          <Categories items={items} handleClick={handleClick} />

          <Menu items={items} selectedCategory={selectedCategory} />
        </section>
      </main>
    </>
  );
}

export default App;
