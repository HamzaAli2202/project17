import React, { useState } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAdd = () => {
    const type = "ADD_PROD";
    const payload = text;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setText(e.target.value)}
              label="Enter Here"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => handleAdd()}
              color="success"
              sx={{ height: 55 }}
              variant="contained"
              fullWidth
            >
              add
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AddProduct;
