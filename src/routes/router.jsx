import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import MyOrders from "../Pages/UserPage/MyOrders";
import MyProfile from "../Pages/UserPage/MyProfile";
import Invoice from "../Pages/UserPage/Invoice";
import AddBooks from "../Pages/LiberianPage/AddBooks";
import MyBooks from "../Pages/LiberianPage/MyBooks";
import Orders from "../Pages/LiberianPage/Orders";
import AllUser from "../Pages/AdminPage/AllUser";
import ManageBook from "../Pages/AdminPage/ManageBook";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/servicecenter.json").then((res) => res.json()),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myorders",
        Component: MyOrders,
      },
      {
        path: "myprofile",
        Component: MyProfile,
      },
      {
        path: "invoice",
        Component: Invoice,
      },
      {
        path: "addbook",
        Component: AddBooks,
      },
      {
        path: "mybooks",
        Component: MyBooks,
      },
      {
        path: "orders",
        Component: Orders,
      },
      {
        path: "allusers",
        element: (
          <AdminRoutes>
            <AllUser></AllUser>
          </AdminRoutes>
        ),
      },
      {
        path: "managebooks",
        element: (
          <AdminRoutes>
            <ManageBook></ManageBook>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
