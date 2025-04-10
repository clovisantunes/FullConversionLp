import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Why from "./Components/Why";
import FAQSection from "./Components/FAQ";
import FinalCTA from "./Components/CTA";
import "./Styles/Globals.scss";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Router>
      <NavBar 
        home="/"
        about="/sobre"
        contact="/contato"  
        services="#services"
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Why />
              <Services id="services" />
              <FAQSection />
              <FinalCTA />
            </>
          }
        />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}
