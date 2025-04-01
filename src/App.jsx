import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {


  return (
    <div className='bg-[#1f242d]'>
      <Navbar />
      <Hero/>
      <Skills/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
