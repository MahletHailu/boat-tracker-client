import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "./dashboard.tsx";
import AdminPage from "./admin.tsx";
import NavigationBar from "../components/NavigationBar.tsx";

const App = () => {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<DashBoardPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes></>)
}

export default App;