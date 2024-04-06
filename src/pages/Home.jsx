import Header from '@/components/Header';
import MarqueeSlider from '@/components/MarqueeSlider';
import Nav from '@/components/Nav';
import React from 'react';

const Home = () => {
  return (
    <>
      <header className="container mx-auto font-poppins">
        <Header />
        <MarqueeSlider />
        <Nav />
      </header>
      <main className="container mx-auto font-poppins grid grid-cols-4 gap-5">
        <div className="border border-red-400">Left side nav</div>
        <div className="border border-green-400 col-span-2">main news</div>
        <div className="border border-blue-400">Right side nav</div>
      </main>
    </>
  );
};

export default Home;
