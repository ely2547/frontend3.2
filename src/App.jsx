import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Precios from './pages/Precios'
import Reservas from './pages/Reservas'
import Guide from './pages/Blog';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/reservas" element={<Reservas />} />
            <Route path="/guide" component={Guide} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




