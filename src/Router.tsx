import { createBrowserRouter } from "react-router-dom";
import AdminHome from "./page/Admin/AdminHome";
import AdminReport from "./page/Admin/AdminReport";
import BrandAdmin from "./page/Admin/Brand";
import OrderAdmin from "./page/Admin/Order";
import ProductAdmin from "./page/Admin/Product";
import CartPage from "./page/CartPage";
import DetailProduct from "./page/DetailProduct";
import Home from "./page/Home";
import Login from "./page/Login";
import MyAccount from "./page/MyAccount";
import Register from "./page/Register";
import SearchPage from "./page/Search/SearchPage";
import LoginAdmin from "./page/Admin/Login";
import CustomerAdmin from "./page/Admin/Customer";
import OrderDetal from "./page/Admin/Order/OrderDetail";

const admin = [
  {
    path: "/admin",
    element: <AdminHome />
  },
  {
    path: "/admin/brands",
    element: <BrandAdmin />
  },
  {
    path: "/admin/customer",
    element: <CustomerAdmin />
  },
  {
    path: "/admin/order",
    element: <OrderAdmin />
  },
  {
    path: "/admin/product",
    element: <ProductAdmin />
  },
  {
    path: "/admin/login",
    element: <LoginAdmin />
  },
  {
    path: "/admin/order/detail",
    element: <OrderDetal />
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
    path: "/register",
    element: <Register />
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
    path: "/admin",
    element: <AdminHome />
  },
  {
    path: "/admin/report",
    element: <AdminReport />
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