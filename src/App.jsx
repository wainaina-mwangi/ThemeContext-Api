import React from "react";
import { ThemeProvider } from "./component/ThemeContext";
import Navbar from "./component/Navbar"
import HeroSection from "./component/HeroSection"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Navbar/>
          <HeroSection />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
