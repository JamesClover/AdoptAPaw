import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Logo from './Logo.jsx';
import CatList from './CatList.jsx';
import FeaturedCat from './FeaturedCat.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import '../styles.css';

function App() {

  return (
    <div>
    <Header />
    <Logo />
    <Nav />
    <FeaturedCat />
    <CatList />
    <Testimonials />
    <Footer />
    </div>
  )
}

export default App;