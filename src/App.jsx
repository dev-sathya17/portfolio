import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import "./App.css";
import Projects from "./pages/Projects/Projects";
import ProfessionalSummary from "./pages/Professional Summary/ProfessionalSummary";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/Contact";
const App = () => {
  return (
    <div className="custom-scrollbar app-container">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <ProfessionalSummary />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
