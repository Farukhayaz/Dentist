import Navbar from './Components/Navbar/Navbar';
import './main.scss';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dentist from './Pages/Dentist';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dentist" element={<Dentist />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
