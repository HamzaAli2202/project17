import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const handleCat = (cat) => {
    const type = "ADD_CAT";
    const payload = cat;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <h1>Home Component</h1>
      <Button
        onClick={() => handleCat("electronics")}
        variant="text"
        color="error"
      >
        electronics
      </Button>
      <Button onClick={() => handleCat("kids")} variant="text" color="error">
        kids
      </Button>
    </div>
  );
};

export default Home;
