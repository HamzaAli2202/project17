import { Button, Grid, Rating } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const selectData = useSelector((state) => state.prodDetailsReducer.pdetails);

  useEffect(() => {
    if (selectData.length === 0) {
      navigate("/prodlist");
    }
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
        <img
          style={{ height: 400, width: 400 }}
          src={selectData.image}
          alt=""
        />
        <Button
          sx={{ height: 55, width: 160, margin: 1 }}
          startIcon={<ShoppingCartIcon />}
          variant="contained"
          color="warning"
        >
          add cart
        </Button>
        <Button
          sx={{ height: 55, width: 160, margin: 1 }}
          startIcon={<BoltIcon />}
          variant="contained"
          color="warning"
        >
          buy now
        </Button>
      </Grid>
      <Grid item xs={7}>
        <h1>{selectData.title}</h1>
        <h1>{selectData.price}</h1>
        <p>{selectData.description}</p>
      </Grid>
    </Grid>
  );
};
