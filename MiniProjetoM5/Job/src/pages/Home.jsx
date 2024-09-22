// src/pages/Home/Home.jsx
import React from 'react';
import Header from '../components/header/header'; 
import Job from '../components/main/job';
import Footer from '../components/footer/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Job />
      <Footer />
    </div>
  );
};

export default Home;
