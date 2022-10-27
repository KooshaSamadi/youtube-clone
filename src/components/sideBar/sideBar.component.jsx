import React, { useState } from "react";
import { categories } from "../../utils/constants";
import "./sideBar.style.scss";
const SideBar = () => {
  const [btnSelected, setBtnSelected] = useState("New");
  return (
    <div className="sidebar">
      {categories.map((category, index) => (
        <button
          className={`sidebar-item ${
            category.name === btnSelected ? "btn-selected" : ""
          }`}
          key={index}
          onClick={() => setBtnSelected(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
      <p className="copyright">Koosha Samadi</p>
    </div>
  );
};

export default SideBar;
