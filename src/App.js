import React, { useEffect, useRef } from 'react';
import NavBar from './Components/NavBar.component';
import About from './Components/About.component';
import Projects from './Components/Projects/Projects.component';
import Skills from './Components/Skills.component';
import Contact from './Components/Contact.component';
import Footer from './Components/Footer.component';

const App = () => {
  const linksRef = useRef(HTMLDivElement);

  const toggleNavBar = () => {
    linksRef.current.classList.toggle('active');
  }
  
  return (
    <div>
      <NavBar
        linksRef={linksRef}
        onNavbarToggle={toggleNavBar}
      />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;