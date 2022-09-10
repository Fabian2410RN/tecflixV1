import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import React from 'react';

import { categories } from "../utils/constants";

const Navbar = ({ selectedCategory, setSelectedCategory }) => (

  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#0779B1', top: 0, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={45} />
        </Link><SearchBar />
        {categories.map((category) => (
            <button
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && "#013B59",
                    color: "white",
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? "white" : "#013B59", marginRight: "10px" }}>
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                </span>
            </button>
        ))}
        
        <a href="https://pluralsight.com">Subir video</a>
        

  </Stack>
);

export default Navbar;
