import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import React from "react";

export const MainRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Layout />,
  },
]);
