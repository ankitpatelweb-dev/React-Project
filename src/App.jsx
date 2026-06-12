import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ContentBox from './components/ContentBox';
import ServiceList from './components/ServiceList';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ContentBox />
      <ServiceList />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;