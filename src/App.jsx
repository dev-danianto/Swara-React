import React from "react";
import "./index.css";
import Backgrounds from "./components/Backgrounds/Backgrounds";
import BlurFile from "./components/Backgrounds/BlurFile";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Floating Background */}
      <Backgrounds />

      {/* Blur Layer */}
      <BlurFile />

      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto p-4"></div>
      </div>
    </div>
  );
}

export default App;
