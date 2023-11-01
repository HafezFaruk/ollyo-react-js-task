import React from 'react';
import Navbar from "@/Navbar"
import Gallery from '@/Gallery';
import Projects from '@/Projects';
import Footer from '@/Footer';
const App = () => {

  return (
    <div>
      <Navbar />
      <Gallery/>
      {/* <Projects/> */}
      <Footer/>
    </div>
  );
};

export default App;
