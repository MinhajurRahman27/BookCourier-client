// import { createBrowserRouter } from "react-router";
// import RootLayout from "../Layout/RootLayout";
// import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
// import Register from "../Pages/Register/Register";
// import DashboardLayout from "../Layout/DashboardLayout";
// import MyOrders from "../Pages/UserPage/MyOrders";
// import MyProfile from "../Pages/UserPage/MyProfile";
// import Invoice from "../Pages/UserPage/Invoice";
// import AddBooks from "../Pages/LiberianPage/AddBooks";
// import MyBooks from "../Pages/LiberianPage/MyBooks";
// import Orders from "../Pages/LiberianPage/Orders";
// import AllUser from "../Pages/AdminPage/AllUser";
// import ManageBook from "../Pages/AdminPage/ManageBook";
// import PrivateRoutes from "./PrivateRoutes";
// import AdminRoutes from "./AdminRoutes";
// import UserRoutes from "./UserRoutes";
// import LibrarianRoutes from "./LibrarianRoutes";
// import Editbooks from "../Pages/LiberianPage/Editbooks";
// import Books from "../Pages/Book/Books";
// import BookDetails from "../Pages/Book/BookDetails";
// import PaymentSucce from "../Pages/Payment/PaymentSucce";
// import PaymentCancled from "../Pages/Payment/PaymentCancled";
// import MyWhishlist from "../Pages/UserPage/MyWhishlist";
// import UserDashBoard from "../DashboardPage/UserDashBoard";
// import DashboardHome from "../DashboardPage/DashboardHome";
// import ErrorPage from "../Errorpage/ErrorPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//         loader: () => fetch("/servicecenter.json").then((res) => res.json()),
//       },
//       {
//         path: "/login",
//         Component: Login,
//       },
//       {
//         path: "/register",
//         Component: Register,
//       },
//       {
//         path: "/books",
//         Component: Books,
//       },
//       {
//         path: "/bookdetails/:id",
//         Component: BookDetails,
//       },
//       {
//         path: "*",
//         Component: ErrorPage,
//       },
//     ],
//   },
//   {
//     path: "dashboard",
//     element: (
//       <PrivateRoutes>
//         <DashboardLayout></DashboardLayout>
//       </PrivateRoutes>
//     ),
//     children: [
//       {
//         index: true,
//         element: <DashboardHome></DashboardHome>,
//       },
//       {
//         path: "myorders",
//         element: (
//           <UserRoutes>
//             <MyOrders></MyOrders>
//           </UserRoutes>
//         ),
//       },
//       {
//         path: "myprofile",
//         element: <MyProfile></MyProfile>,
//       },
//       {
//         path: "invoice",
//         element: (
//           <UserRoutes>
//             <Invoice></Invoice>
//           </UserRoutes>
//         ),
//       },
//       {
//         path: "mywhishlist",
//         element: (
//           <UserRoutes>
//             <MyWhishlist></MyWhishlist>
//           </UserRoutes>
//         ),
//       },
//       {
//         path: "addbook",
//         element: (
//           <LibrarianRoutes>
//             <AddBooks></AddBooks>
//           </LibrarianRoutes>
//         ),
//       },
//       {
//         path: "mybooks",
//         element: (
//           <LibrarianRoutes>
//             <MyBooks></MyBooks>
//           </LibrarianRoutes>
//         ),
//       },
//       {
//         path: "mybooks/editbooks/:id",
//         element: (
//           <LibrarianRoutes>
//             <Editbooks></Editbooks>
//           </LibrarianRoutes>
//         ),
//       },
//       {
//         path: "orders",
//         element: (
//           <LibrarianRoutes>
//             <Orders></Orders>
//           </LibrarianRoutes>
//         ),
//       },
//       {
//         path: "allusers",
//         element: (
//           <AdminRoutes>
//             <AllUser></AllUser>
//           </AdminRoutes>
//         ),
//       },
//       {
//         path: "managebooks",
//         element: (
//           <AdminRoutes>
//             <ManageBook></ManageBook>
//           </AdminRoutes>
//         ),
//       },
//       {
//         path: "payment-success",
//         Component: PaymentSucce,
//       },
//       {
//         path: "payment-cancled",
//         Component: PaymentCancled,
//       },
//       {
//         path: "*",
//         Component: ErrorPage,
//       },
//     ],
//   },
// ]);

import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import RootLayout from "../Layout/RootLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import LibrarianRoutes from "./LibrarianRoutes";

// Loading Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

// Lazy load pages
const Home = lazy(() => import("../Pages/Home/Home"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Register = lazy(() => import("../Pages/Register/Register"));
const Books = lazy(() => import("../Pages/Book/Books"));
const BookDetails = lazy(() => import("../Pages/Book/BookDetails"));
const ErrorPage = lazy(() => import("../Errorpage/ErrorPage"));

// Dashboard Pages
const DashboardHome = lazy(() => import("../DashboardPage/DashboardHome"));
const MyOrders = lazy(() => import("../Pages/UserPage/MyOrders"));
const MyProfile = lazy(() => import("../Pages/UserPage/MyProfile"));
const Invoice = lazy(() => import("../Pages/UserPage/Invoice"));
const MyWhishlist = lazy(() => import("../Pages/UserPage/MyWhishlist"));

// Librarian Pages
const AddBooks = lazy(() => import("../Pages/LiberianPage/AddBooks"));
const MyBooks = lazy(() => import("../Pages/LiberianPage/MyBooks"));
const Editbooks = lazy(() => import("../Pages/LiberianPage/Editbooks"));
const Orders = lazy(() => import("../Pages/LiberianPage/Orders"));

// Admin Pages
const AllUser = lazy(() => import("../Pages/AdminPage/AllUser"));
const ManageBook = lazy(() => import("../Pages/AdminPage/ManageBook"));

// Payment Pages
const PaymentSucce = lazy(() => import("../Pages/Payment/PaymentSucce"));
const PaymentCancled = lazy(() => import("../Pages/Payment/PaymentCancled"));

// Wrapper component for Suspense
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
        loader: () => fetch("/servicecenter.json").then((res) => res.json()),
      },
      {
        path: "/login",
        element: (
          <SuspenseWrapper>
            <Login />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/register",
        element: (
          <SuspenseWrapper>
            <Register />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/books",
        element: (
          <SuspenseWrapper>
            <Books />
          </SuspenseWrapper>
        ),
      },
      {
        path: "/bookdetails/:id",
        element: (
          <SuspenseWrapper>
            <BookDetails />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <ErrorPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <DashboardHome />
          </SuspenseWrapper>
        ),
      },
      {
        path: "myorders",
        element: (
          <UserRoutes>
            <SuspenseWrapper>
              <MyOrders />
            </SuspenseWrapper>
          </UserRoutes>
        ),
      },
      {
        path: "myprofile",
        element: (
          <SuspenseWrapper>
            <MyProfile />
          </SuspenseWrapper>
        ),
      },
      {
        path: "invoice",
        element: (
          <UserRoutes>
            <SuspenseWrapper>
              <Invoice />
            </SuspenseWrapper>
          </UserRoutes>
        ),
      },
      {
        path: "mywhishlist",
        element: (
          <UserRoutes>
            <SuspenseWrapper>
              <MyWhishlist />
            </SuspenseWrapper>
          </UserRoutes>
        ),
      },
      {
        path: "addbook",
        element: (
          <LibrarianRoutes>
            <SuspenseWrapper>
              <AddBooks />
            </SuspenseWrapper>
          </LibrarianRoutes>
        ),
      },
      {
        path: "mybooks",
        element: (
          <LibrarianRoutes>
            <SuspenseWrapper>
              <MyBooks />
            </SuspenseWrapper>
          </LibrarianRoutes>
        ),
      },
      {
        path: "mybooks/editbooks/:id",
        element: (
          <LibrarianRoutes>
            <SuspenseWrapper>
              <Editbooks />
            </SuspenseWrapper>
          </LibrarianRoutes>
        ),
      },
      {
        path: "orders",
        element: (
          <LibrarianRoutes>
            <SuspenseWrapper>
              <Orders />
            </SuspenseWrapper>
          </LibrarianRoutes>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoutes>
            <SuspenseWrapper>
              <AllUser />
            </SuspenseWrapper>
          </AdminRoutes>
        ),
      },
      {
        path: "managebooks",
        element: (
          <AdminRoutes>
            <SuspenseWrapper>
              <ManageBook />
            </SuspenseWrapper>
          </AdminRoutes>
        ),
      },
      {
        path: "payment-success",
        element: (
          <SuspenseWrapper>
            <PaymentSucce />
          </SuspenseWrapper>
        ),
      },
      {
        path: "payment-cancled",
        element: (
          <SuspenseWrapper>
            <PaymentCancled />
          </SuspenseWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <SuspenseWrapper>
            <ErrorPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);
