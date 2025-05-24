import React from "react";
import Button from "./Button";
import hero_image from '../assets/Polygon 1 (1).png';
import girl_img from '../assets/girl.png';
import Workbox from "./workbox";
import bag_img from '../assets/workbag.png';
import invistitsion_img from '../assets/invistitsion.png';
import money_img from '../assets/money.png';
import chart_img from '../assets/chart.png';

const Hero = () => {
  return (
    <section className="bg-[#E9FBF9] mt-[70px] rounded-4xl max-w-[1319px] mx-auto 
      grid grid-cols-1 md:grid-cols-2 mb-10
      px-4 md:px-0
    ">
      <div className="px-4 md:px-[101px] pt-[70px] pb-[106px] space-y-8 
        md:space-y-10
      ">
        <button className="bg-white px-3 py-1">
          <span className="text-[#FF6107] font-normal">it works!</span>
        </button>
        <p className="font-extrabold text-[32px] md:text-[64px] 
          w-[300px] md:w-[570px]
        ">
          Try Our Business Ideas to grow Rapidly
        </p>
        <p className="text-[#464646] font-normal 
          w-[250px] md:w-[403px]
        ">
          We understand how desperatly you want to grow in the business world &
          our motto is to help you with practicale idea and plan
        </p>

        <div className="flex flex-col md:flex-row items-center pt-5 space-y-4 md:space-y-0 md:space-x-14">
          <Button className='bg-[#FF823B] text-white py-3 md:py-4 px-8 md:px-10 rounded-4xl' text='Get Started'/>

          <div className="flex items-center space-x-3">
            <button className="rounded-full bg-white p-2 md:p-3 "><img src={hero_image} alt="" /></button>
            <p className="font-bold text-[#FF823B]">DEMO VIDEO</p>
          </div>
        </div>
      </div>

      <div className="relative hidden md:block">
        <img className="absolute top-53 z-0" src={girl_img} alt="" />
        <div className=" bg-[rgba(255,255,255,0.9)] w-[314px] h-[314px] rounded-3xl flex flex-col space-y-5 items-center text-center justify-center absolute top-130 z-1 shadow-2xl">
          <div className="flex gap-8">
            <Workbox className=' bg-[#FFC90C] w-[74px] h-[74px] rounded-2xl flex items-center justify-center text-center cardshadow' img={bag_img}/>
            <Workbox className='bg-[#198B39] w-[74px] h-[74px] rounded-2xl flex items-center justify-center text-center' img={invistitsion_img}/>
          </div>
          <div className="flex gap-8">
            <Workbox className='bg-[#0085FF] w-[74px] h-[74px] rounded-2xl flex items-center justify-center text-center' img={money_img}/>
            <Workbox className='bg-[#FF7527] w-[74px] h-[74px] rounded-2xl flex items-center justify-center text-center' img={chart_img}/>
          </div>
        </div>
      </div>

  
      <div className="relative md:hidden">
        <div className=" bg-[rgba(255,255,255,0.9)] w-[250px] h-[250px] rounded-3xl flex flex-col space-y-5 items-center text-center justify-center mx-auto mt-8 shadow-2xl">
          <div className="flex gap-4">
            <Workbox className=' bg-[#FFC90C] w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-center cardshadow' img={bag_img}/>
            <Workbox className='bg-[#198B39] w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-center' img={invistitsion_img}/>
          </div>
          <div className="flex gap-4">
            <Workbox className='bg-[#0085FF] w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-center' img={money_img}/>
            <Workbox className='bg-[#FF7527] w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-center' img={chart_img}/>
          </div>
        </div>
        <img className="w-full mt-8" src={girl_img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
