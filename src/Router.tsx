import { createBrowserRouter } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "about",
    element: <div>About</div>,
  }
]);