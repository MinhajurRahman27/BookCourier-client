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
import UserRoutes from "./UserRoutes";
import LibrarianRoutes from "./LibrarianRoutes";
import Editbooks from "../Pages/LiberianPage/Editbooks";
import Books from "../Pages/Book/Books";
import BookDetails from "../Pages/Book/BookDetails";
import PaymentSucce from "../Pages/Payment/PaymentSucce";
import PaymentCancled from "../Pages/Payment/PaymentCancled";
import MyWhishlist from "../Pages/UserPage/MyWhishlist";
import UserDashBoard from "../DashboardPage/UserDashBoard";
import DashboardHome from "../DashboardPage/DashboardHome";
import ErrorPage from "../Errorpage/ErrorPage";

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
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookdetails/:id",
        element: (
          <PrivateRoutes>
            <BookDetails></BookDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
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
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "myorders",
        element: (
          <UserRoutes>
            <MyOrders></MyOrders>
          </UserRoutes>
        ),
      },
      {
        path: "myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "invoice",
        element: (
          <UserRoutes>
            <Invoice></Invoice>
          </UserRoutes>
        ),
      },
      {
        path: "mywhishlist",
        element: (
          <UserRoutes>
            <MyWhishlist></MyWhishlist>
          </UserRoutes>
        ),
      },
      {
        path: "addbook",
        element: (
          <LibrarianRoutes>
            <AddBooks></AddBooks>
          </LibrarianRoutes>
        ),
      },
      {
        path: "mybooks",
        element: (
          <LibrarianRoutes>
            <MyBooks></MyBooks>
          </LibrarianRoutes>
        ),
      },
      {
        path: "mybooks/editbooks/:id",
        element: (
          <LibrarianRoutes>
            <Editbooks></Editbooks>
          </LibrarianRoutes>
        ),
      },
      {
        path: "orders",
        element: (
          <LibrarianRoutes>
            <Orders></Orders>
          </LibrarianRoutes>
        ),
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
      {
        path: "payment-success",
        Component: PaymentSucce,
      },
      {
        path: "payment-cancled",
        Component: PaymentCancled,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
