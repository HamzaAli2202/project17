import { Grid, Card, CardContent, Rating, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  const hadleAddCart = (item) => {
    const type = "ADD_CART";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  const handleDetails = (item) => {
    const type = "P_DETAILS";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
    navigate("/proddls");
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid align="center" item xs={3}>
          <Card>
            <CardContent>
              <img
                onClick={() => handleDetails(item)}
                style={{ height: 200, width: 200 }}
                src={item.image}
                alt=""
              />
              <h1>Rs.{item.price}</h1>
              <h3>{item.title.substr(0, 10)}</h3>
              <Rating value={item.rating.rate} />
              <span>{item.rating.count}</span>
              <br />
              <Button onClick={() => hadleAddCart(item)} variant="contained">
                add cart
              </Button>
              <Button sx={{ margin: 1 }} variant="contained" color="warning">
                buy
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
