import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    // {
    //   path: "cart",
    //   element: <Cart image=""/>,
    // }
]);