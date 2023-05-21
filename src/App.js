import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/js/NavBar";
import Chats from "./Components/js/Chats";
import { BrowserRouter, Routes, Route, usen, Navigate } from "react-router-dom";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/Chat" />} />
          <Route path="/Chat" element={<Chats />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
