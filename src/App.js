import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Day from "./Day.js";
import Start from "./Start.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="day/:dayName">Day</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="day/:dayName" element={<Day />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
