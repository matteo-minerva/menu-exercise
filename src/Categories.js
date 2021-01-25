import React, { useState } from "react";

const Categories = ({ items, handleClick }) => {
  const [btnText, setBtnText] = useState();

  const sortedCategories = items.map((item) => item.category).sort();

  let categories = ["all"];

  for (let i = 0; i < sortedCategories.length; i++) {
    if (sortedCategories[i] !== sortedCategories[i + 1]) {
      categories.push(sortedCategories[i]);
    }
  }

  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={(e) => handleClick(e.target.textContent)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
