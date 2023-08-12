import { createBrowserRouter } from "react-router-dom";
import AdminHome from "./page/Admin/AdminHome";
import BrandPage from "./page/Admin/brands";
import CartPage from "./page/CartPage";
import DetailProduct from "./page/DetailProduct";
import Home from "./page/Home";
import Login from "./page/Login";
import MyAccount from "./page/MyAccount";
import SearchPage from "./page/SearchPage";
import Users from "./page/Admin/Users";
import OrderAdmin from "./page/Admin/Order";

const admin = [
  {
    path: "/admin",
    element: <AdminHome />
  },
  {
    path: "/admin/brands",
    element: <BrandPage />
  },
  {
    path: "/admin/users",
    element: <Users />
  },
  {
    path: "/admin/order",
    element: <OrderAdmin />
  }
]

const user = [
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
    path: "/cart",
    element: <CartPage />
  },
  {
    path: "/my-account",
    element: <MyAccount />
  }
]

export const router = createBrowserRouter([
  ...user,
  ...admin
]);