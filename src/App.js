import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
