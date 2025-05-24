import React from 'react'
import Sponsors_card from './Sponsors_card'
import netflix_img from '../assets/netflix.png'
import forbes_img from '../assets/forbes.png'
import itel_img from '../assets/itel.png'
import fedex_img from '../assets/fedex.png'
import audio_img from '../assets/audio.png'
import goto_img from '../assets/gotomeeting.png'
import penguin_img from '../assets/penguines.png'
import aylana_img from '../assets/aylana.png'

const Sponsors = () => {
  return (
    <div className='grid grid-cols-4 mt-[170px] max-w-[1130px] mx-auto gap-8'>
        <Sponsors_card img={netflix_img}/>
        <Sponsors_card img={forbes_img}/>
        <Sponsors_card img={itel_img}/>
        <Sponsors_card img={fedex_img}/>
        <Sponsors_card img={audio_img}/>
        <Sponsors_card img={penguin_img}/>
        <Sponsors_card img={aylana_img}/>
        <Sponsors_card img={goto_img}/>
    </div>
  )
}

export default Sponsors