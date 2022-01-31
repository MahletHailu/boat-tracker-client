import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "./dashboard";
import AdminPage from "./admin";
import NavigationBar from "../components/NavigationBar";

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