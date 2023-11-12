import React from "react";
import { navData } from "./data/navData";
import { Grid, Button, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartData = useSelector((state) => state.pcartReducer.cart);
  return (
    <Grid sx={{ marginBottom: 2 }} container spacing={2}>
      {navData.map((item) => (
        <Grid item xs={item.xs}>
          <Link to={item.path}>
            <Button variant="contained" fullWidth>
              {item.title}
            </Button>
          </Link>
        </Grid>
      ))}
      <Grid item xs={1}>
        <Link to="/cart">
          <Badge badgeContent={cartData && cartData.length}>
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Nav;
