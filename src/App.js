import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GoToTop from "./Components/GoToTop/GoToTop";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Syed Amanullah Wasti</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Syed Amanullah Wasti, showcasing projects and skills in web development, including React, Spring Boot, and more."
        />
        <meta
          name="keywords"
          content="Syed Amanullah Wasti, portfolio, web development, React, Spring Boot, projects"
        />
        <meta property="og:title" content="Syed Amanullah Wasti - Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Syed Amanullah Wasti, featuring web development projects and skills."
        />
        <meta property="og:image" content="/Img/webpics.png" />
        <meta
          property="og:url"
          content="https://syed-amanullah-wasti-dusky.vercel.app/"
        />
        <meta
          name="twitter:description"
          content="Check out the portfolio of Syed Amanullah Wasti, highlighting projects in web development and software engineering."
        />
        <meta name="twitter:image" content="/Img/webpics.png" />
        <link rel="canonical" href="https://syed-amanullah-wasti-dusky.vercel.app/" />
      </Helmet>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <GoToTop />
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
