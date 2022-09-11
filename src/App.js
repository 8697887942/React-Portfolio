import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Section/Home/Home';
import About from './Section/About/About';
import Experience from './Section/Experience/Experience';
import Work from './Section/Work/Work';
import Contact from './Section/Contact/Contact';
import Footer from './Component/Footer/Footer';
import ContactBar from './Component/Contactbar/ContactBar';

function App() {
  return (
    <main className='main'>
      <Navbar />
      <div className="app_section_container">
      <Home/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
      </div>
      <ContactBar/>
      <Footer/>
    </main>
  );
}

export default App;
