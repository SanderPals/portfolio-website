import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/default";

// Pages
import Home from "./pages/home";
import PortfolioItem from "./pages/portfolio-item";


function App() {
  useEffect(() => {
  }, [])

  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/:url" element={<PortfolioItem />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App