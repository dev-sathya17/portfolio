import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import "./App.css";
const App = () => {
  return (
    <div className="custom-scrollbar app-container">
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
};

export default App;
