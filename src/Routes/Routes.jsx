// src/router/routes.js
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";

// AUTH
import Login from "../Auth/Login";
import Register from "../Auth/Register";

// ADMIN
import TrainerList from "../Admin/TrainerList";
import AddTrainer from "../Admin/AddTrainer";
import SessionList from "../Admin/SessionList";
import AddSession from "../Admin/AddSession";

// OPERATOR
import MemberList from "../Operator/MemberList";
import AddReservation from "../Operator/AddReservation";
import MemberReservations from "../Operator/MemberReservations";

// TRAINER
import TodaySessions from "../Trainer/TodaySessions";
import UpcomingSessions from "../Trainer/UpcomingSessions";

// MEMBER
import TrainerListMember from "../Member/TrainerList";
import SessionCalendar from "../Member/SessionCalendar";
import MyReservations from "../Member/MyReservations";
import CategoryList from "../Admin/CategoryList";
import Products from "../Products/Products";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
    errorElement: <Error/>
  },
  // Product
  {
    path: "/products",
    element: <Products />,
    errorElement: <Error/>
  },
  {
    path:"/loading",
    element:<Loading/>,
    errorElement: <Error/>
    
  },

  // AUTH
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error/>
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error/>
  },

  // ADMIN
  {
    path: "/admin/trainers",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
      <TrainerList />
      // </ProtectedRoute>
    ),errorElement: <Error/>
  },
  {
    path: "/admin/trainers/add",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
      <AddTrainer />
      // </ProtectedRoute>
    ),errorElement: <Error/>
  },
  {
    path: "/admin/sessions",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
      <SessionList />
      // </ProtectedRoute>
    ),errorElement: <Error/>
  },
  {
    path: "/admin/sessions/add",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
      <AddSession />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },

  // OPERATOR
  {
    path: "/operator/members",
    element: (
      // <ProtectedRoute allowedRoles={["Operator"]}>
      <MemberList />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },
  {
    path: "/operator/reservations/add",
    element: (
      // <ProtectedRoute allowedRoles={["Operator"]}>
      <AddReservation />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },
  {
    path: "/operator/members/:memberId/reservations",
    element: (
      // <ProtectedRoute allowedRoles={["Operator"]}>
      <MemberReservations />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },

  // TRAINER
  {
    path: "/trainer/today",
    element: (
      // <ProtectedRoute allowedRoles={["Trainer"]}>
      <TodaySessions />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },
  {
    path: "/trainer/upcoming",
    element: (
      // <ProtectedRoute allowedRoles={["Trainer"]}>
      <UpcomingSessions />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },

  // MEMBER
  {
    path: "/member/trainers",
    element: (
      // <ProtectedRoute allowedRoles={["Member"]}>
      <TrainerListMember />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },
  {
    path: "/member/calendar",
    element: (
      // <ProtectedRoute allowedRoles={["Member"]}>
      <SessionCalendar />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },
  {
    path: "/member/my-reservations",
    element: (
      // <ProtectedRoute allowedRoles={["Member"]}>
      <MyReservations />
      // </ProtectedRoute>
    ),
    errorElement: <Error/>
  },
  {
    path: "/admin/categories",
    element: <CategoryList />,
    errorElement: <Error/>
  },

  // 404
  {
    path: "*",
    element: <Error/>,
  },
]);

export default router;
