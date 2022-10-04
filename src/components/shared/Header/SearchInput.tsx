import React, { useRef } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/styles";
import { useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import { fetchVideos } from "../../../redux/videoSlice";
import { AppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

const SearchBar = styled("input")({
  minWidth: "90%",
  maxWidth: "100%",
  maxHeight: "50px",
  padding: "10px 16px",
  placeholder: "Search",
  border: "1px solid #ccc",
  outline: "0px",
  fontSize: "18px",
  color: "#282828",
});

const SearchButton = styled("button")({
  width: "50px",
  maxHeight: "50px",
  padding: "10px 16px",
  border: "1px solid #ccc",
  borderLeft: "0px",
  outline: "0px",
  fontSize: "18px",
  backgroundColor: "#FFFFFF",
  alignItems: "center",
  display: "flex",
  justifyContant: "center",
  cursor: "pointer",
});

function SearchInput() {
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    let q = inputRef.current?.value || "";
    let params = {
      q: q,
      type: "differentPage",
    };
    dispatch(fetchVideos(params));
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ display: { sm: "flex", xs: "flex", md: "flex", lg: "flex" } }}>
      <SearchBar placeholder="Search" ref={inputRef} />
      <SearchButton onClick={handleSearch}>
        <SearchIcon sx={{ fontSize: "24px" }} />
      </SearchButton>
    </Box>
  );
}

export default SearchInput;
