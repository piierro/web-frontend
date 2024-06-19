import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
   <>
     <Navbar />
     
     <main className='main'>
       <Home />
       <About />
       <Skills />
     </main>
    </>
  );
}

export default App;
