import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Icon from "../../utils/logo.ico";
import "./navbar.style.scss";
import SearchBar from "../searchBar/searchBar.component";
const Navbar = () => {
  return (
    <Stack className="navbar_container" direction="row" alignItems="center" p={2}>
      <Link to="/">
        <img src={Icon} alt="Youtube Icon" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;