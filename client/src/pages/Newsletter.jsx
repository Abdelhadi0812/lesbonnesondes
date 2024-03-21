import React from 'react';
import CallToAction from '../components/CallToAction';

const Newsletter = () => {
  return (
    <div className="w-full bg-[#fa7066] flex flex-col justify-center items-center border-t-[10px] border-teal-400">
      <div className="w-[80%] my-12 mx-auto">
        <CallToAction />
      </div>
    </div>
  );
};

export default Newsletter;
