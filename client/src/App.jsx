import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './pages/News';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import Laradio from './pages/Laradio';
import Festival from './pages/Festival';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import FooterCom from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/radio" element={<Laradio />} />
        <Route path="/festival-amwaj" element={<Festival />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
};

export default App;
