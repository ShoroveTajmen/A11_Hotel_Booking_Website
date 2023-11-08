import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import UpdateBookingDate from "../Pages/MyBookings/UpdateBookingDate";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/rooms.json"),
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/myBookins",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://hotel-booking-server-steel.vercel.app/roomBooks"),
      },
      {
        path: "/updateDate/:_id",
        element: <UpdateBookingDate></UpdateBookingDate>,
        loader: ({ params }) =>
          fetch(`https://hotel-booking-server-steel.vercel.app/roomBooks/${params._id}`),
      },
      {
        path: "/roomDetails/:_id", //_id spelling same as link _id
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://hotel-booking-server-steel.vercel.app/roomData/${params._id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default myCreateRoute;
