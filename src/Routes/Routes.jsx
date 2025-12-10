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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },

  // AUTH
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // ADMIN
  {
    path: "/admin/trainers",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
        <TrainerList />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/admin/trainers/add",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
        <AddTrainer />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/admin/sessions",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
        <SessionList />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/admin/sessions/add",
    element: (
      // <ProtectedRoute allowedRoles={["Admin"]}>
        <AddSession />
      // </ProtectedRoute>
    ),
  },

  // OPERATOR
  {
    path: "/operator/members",
    element: (
      // <ProtectedRoute allowedRoles={["Operator"]}>
        <MemberList />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/operator/reservations/add",
    element: (
      // <ProtectedRoute allowedRoles={["Operator"]}>
        <AddReservation />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/operator/members/:memberId/reservations",
    element: (
      // <ProtectedRoute allowedRoles={["Operator"]}>
        <MemberReservations />
      // </ProtectedRoute>
    ),
  },

  // TRAINER
  {
    path: "/trainer/today",
    element: (
      // <ProtectedRoute allowedRoles={["Trainer"]}>
        <TodaySessions />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/trainer/upcoming",
    element: (
      // <ProtectedRoute allowedRoles={["Trainer"]}>
        <UpcomingSessions />
      // </ProtectedRoute>
    ),
  },

  // MEMBER
  {
    path: "/member/trainers",
    element: (
      // <ProtectedRoute allowedRoles={["Member"]}>
        <TrainerListMember />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/member/calendar",
    element: (
      // <ProtectedRoute allowedRoles={["Member"]}>
        <SessionCalendar />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/member/my-reservations",
    element: (
      // <ProtectedRoute allowedRoles={["Member"]}>
        <MyReservations />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/admin/categories",
    element: <CategoryList />,
  },

  // 404
  {
    path: "*",
    element: <h2>404 – Səhifə tapılmadı</h2>,
  },
]);

export default router;
