import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage";
import FoodCard from "./components/FoodCard/FoodCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/temp" element={<FoodCard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
