import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
// import AboutPage from "./Pages/AboutPage/AboutPage";
// import ContactPage from "./Pages/ContactPage/ContactPage";
import HomePage from "./Pages/HomePage/HomePage";
// import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import EducationPage from "./Components/Education/EducationPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import GoToTop from "./Components/GoToTop/GoToTop";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <br />
        <br />
        <GoToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
