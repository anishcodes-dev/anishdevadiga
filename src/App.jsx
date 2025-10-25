import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education/>
    </>
  );
}

export default App;
