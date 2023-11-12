import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Grid } from "@mui/material";

export const ShowProduct = () => {
  const selprods = useSelector((state) => state.productReducer.filtprod);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(selprods);
  }, []);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12}>
              <h3>{item}</h3>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ShowProduct;
