import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React from "react";
import "./searchbar.style.scss";

const SearchBar = () => {
  function submitHandler() {}
  function changeHanlder() {}

  return (
    <form className="searchbar" onSubmit={submitHandler}>
      <input type="search" placeholder="Search ..." onChange={changeHanlder} />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
