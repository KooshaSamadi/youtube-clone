import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchbar.style.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  }
  function changeHanlder(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={submitHandler}>
      <input
        type="search"
        placeholder="Search ..."
        onChange={changeHanlder}
        value={searchTerm}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
