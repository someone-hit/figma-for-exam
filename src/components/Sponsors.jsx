import React from 'react';
import Sponsors_card from './Sponsors_card';
import netflix_img from '../assets/netflix.png';
import forbes_img from '../assets/forbes.png';
import itel_img from '../assets/itel.png';
import fedex_img from '../assets/fedex.png';
import audio_img from '../assets/audio.png';
import goto_img from '../assets/gotomeeting.png';
import penguin_img from '../assets/penguines.png';
import aylana_img from '../assets/aylana.png';

const Sponsors = () => {
  const sponsors = [
    netflix_img,
    forbes_img,
    itel_img,
    fedex_img,
    audio_img,
    penguin_img,
    aylana_img,
    goto_img,
  ];

  return (
    <div className="mt-[170px] max-w-[1130px] mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {sponsors.map((img, index) => (
          <Sponsors_card key={index} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
