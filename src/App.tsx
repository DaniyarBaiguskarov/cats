import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

import "./scss/app.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
