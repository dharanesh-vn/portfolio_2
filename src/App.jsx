import React from 'react';
import { Navbar, Hero, About, Projects, Skills, Contact, Footer } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;