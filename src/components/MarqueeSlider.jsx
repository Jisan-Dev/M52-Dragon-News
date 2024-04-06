import Marquee from 'react-fast-marquee';

const MarqueeSlider = () => {
  return (
    <div className="p-4 bg-zinc-100 flex gap-2 items-center mt-7 rounded-md">
      <span className="py-3 px-6 bg-rose-600 text-white text-xl font-medium leading-none rounded-md">Latest</span>
      <Marquee autoFill={true} pauseOnHover={true} speed={100} className="text-neutral-700 text-lg font-semibold ">
        Match Highlights : Germany vs Spain — as it happened ! &emsp;
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
