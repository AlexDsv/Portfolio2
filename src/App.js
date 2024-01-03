import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar />
      <Sidebar />
      <Home />
      <About />
      <button
        onClick={toggleMode}
        className={
          darkMode ? "light-mode mode-toggle" : "dark-mode mode-toggle"
        }
      >
        {darkMode ? (
          <i class="fa-solid fa-sun"></i>
        ) : (
          <i class="fa-solid fa-moon"></i>
        )}
      </button>
    </div>
  );
}

export default App;
