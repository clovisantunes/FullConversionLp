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
import useScrollToTop from "./Utils/ScrollToTop";
import ProjectsSection from "./Components/Projects";
import { projectsData } from "./Components/Projects/Data/projectsData";


export default function App() {



  return (
    <Router>
      <ScrollToTopWrapper></ScrollToTopWrapper>
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
               <ProjectsSection projects={projectsData} />
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
function ScrollToTopWrapper({ children }){
  useScrollToTop();
  return <>{children}</>;
}