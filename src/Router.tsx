import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import DetailProduct from "./page/DetailProduct";
import Login from "./page/Login";
import CartPage from "./page/CartPage";
import SearchPage from "./page/SearchPage";

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
    path: "/product",
    element: <DetailProduct />
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path:"/cart",
    element: <CartPage/>
  }
]);