import Header from '@/components/Header';
import MarqueeSlider from '@/components/MarqueeSlider';
import Nav from '@/components/Nav';
import React from 'react';

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto font-poppins">
        <MarqueeSlider />
        <Nav />
      </main>
    </>
  );
};

export default Home;
