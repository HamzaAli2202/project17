import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.pcartReducer.cart);

  const handleDelete = (index) => {
    const type = "REMOVE";
    const payload = index;
    const action = { type, payload };
    dispatch(action);
  };

  useEffect(() => {
    if (data.length === 0) {
      navigate("/prodlist");
    }
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <img
                    src={item.image}
                    style={{ height: 100, width: 100 }}
                    alt=""
                  />
                </Grid>
                <Grid item xs={3}>
                  <h2>{item.price}</h2>
                  <p>{item.title.slice(0, 10)}</p>
                </Grid>
                <Grid item xs={5}>
                  <p>{item.description}</p>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    onClick={() => handleDelete(index)}
                    variant="contained"
                    fullWidth
                    color="error"
                  >
                    delete
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
