import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import "./App.css";
import Projects from "./pages/Projects/Projects";
const App = () => {
  return (
    <div className="custom-scrollbar app-container">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
