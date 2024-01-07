import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollSpy from "react-ui-scrollspy";
function App() {
  return (
    <div>
      <NavBar />
      <Sidebar />

      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
