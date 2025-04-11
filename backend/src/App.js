import React, { useState } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from './redux/store';
import Navbar from "./components/Navbar";
import SignupModal from "./components/SignUpModal";
import PortfolioCard from "./components/portfolioCard";
import Home from "./pages/Home";
import Login from "./components/Login"; // already imported

function App() {
  const [isSignupOpen, setSignupOpen] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Navbar onSignupOpen={() => setSignupOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PortfolioCard" element={<PortfolioCard />} />
          <Route path="/Login" element={<Login />} /> 
        </Routes>
        <SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
      </Router>
    </Provider>
  );
}

export default App;
