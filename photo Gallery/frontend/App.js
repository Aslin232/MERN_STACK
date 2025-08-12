import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RunningGallery from "./components/RunningGallery";
import CategoryGallery from "./components/CategoryGallery";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RunningGallery />} />
        <Route path="/category/:category" element={<CategoryGallery />} />
      </Routes>
    </Router>
  );
}
