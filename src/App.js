import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
     <Navbar />
     
     <main className='main'>
       <Home />
       <About />
       <Skills />
       <Project />
     </main>
     <Footer />
    </>
  );
}

export default App;
