import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import React from "react";

const App = () => {
  return <RouterProvider router={MainRouter} />;
};

export default App;
