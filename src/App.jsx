import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import "./App.css";
import Projects from "./pages/Projects/Projects";
import ProfessionalSummary from "./pages/Professional Summary/ProfessionalSummary";
const App = () => {
  return (
    <div className="custom-scrollbar app-container">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <ProfessionalSummary />
    </div>
  );
};

export default App;
