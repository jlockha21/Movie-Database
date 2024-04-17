import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/index.css';
import Header from '../src/components/Header';
import Home from '../src/components/Home';
import OutNow from '../src/components/OutNow';
import ComingSoon from '../src/components/ComingSoon';
import Search from '../src/components/Search';
import Favorites from './components/Favorites';

const App = () => {
  const [theme, setTheme] = useState("light"); // default theme is light

  return (
    <Router>
      <div className="app">
        <Header theme={theme} setTheme={setTheme} /> {/* Note: setTheme should be a function */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/OutNow" element={<OutNow />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Search" element={<Search />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
