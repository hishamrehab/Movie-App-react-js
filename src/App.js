import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/watched";
import Add from "./components/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/context/GlobalContext";


function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/watched" element={<Watched />} />
          <Route path="/" element={<Watchlist />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
