import { Stack } from "@mui/material";
import React, { useState } from "react";
import { categories } from "../../utils/constants";
import "./sideBar.style.scss";
const SideBar = ({ btnSelected, setBtnSelected }) => {
  return (
    <Stack className="sidebar-container col-2">
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
    </Stack>
  );
};

export default SideBar;
