import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Properties from './pages/properties';  
import Propertydetails from './pages/property-detail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Propertydetails" element={<Propertydetails />} />
        </Routes>
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
