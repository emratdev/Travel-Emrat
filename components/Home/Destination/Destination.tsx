import HeadingSection from '@/components/Helper/HeadingSection'
import React from 'react'
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return (
    <div className="pt-10 pb-5">
      {/* Heading section */}
      <HeadingSection heading="Exploring Popular Destination" />
      {/* Content  section */}
      <div className="mt-7 w-[80%] mx-auto">
        {/* Slider */}
        <DestinationSlider/>
        </div>
    </div>
  );
}

export default Destination