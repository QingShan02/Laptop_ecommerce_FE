import { createBrowserRouter } from "react-router-dom";
import Home from "@page/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
          path: "about",
          element: <div>About</div>,
        }
      ]
    }
]);