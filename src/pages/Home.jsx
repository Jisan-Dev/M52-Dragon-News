import Header from '@/components/Header';
import MarqueeSlider from '@/components/MarqueeSlider';
import React from 'react';

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto font-poppins">
        <MarqueeSlider />
      </main>
    </>
  );
};

export default Home;
