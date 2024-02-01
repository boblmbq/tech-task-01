import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";

import SharedLayout from "./components/SharedLayout";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "favorites",
        element: <Catalog />,
      },
    ],
  },
]);