import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Day from "./Day.js";
import Start from "./Start.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="day/:dayName" element={<Day />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
