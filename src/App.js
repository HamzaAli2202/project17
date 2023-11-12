import React from "react";
import { Provider } from "react-redux";
import Landing from "./components/Landing";
import { Card, CardContent } from "@mui/material";
import { configStore } from "./state/configStore";

function App() {
  const store = configStore();
  return (
    <Card sx={{ bgcolor: "lavender" }}>
      <CardContent>
        <Provider store={store}>
          <Landing />
        </Provider>
      </CardContent>
    </Card>
  );
}

export default App;
