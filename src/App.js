import React from 'react';
import './App.css';
import Navbar from './componentss/navbar';
import Shop from './componentss/shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shoplist from './componentss/shopdata';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shoplist" element={<Shoplist />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
