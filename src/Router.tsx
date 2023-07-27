import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import DetailProduct from "./page/DetailProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/product",
    element: <DetailProduct />
  },
  {
    path: "about",
    element: <div>About</div>,
  }
]);