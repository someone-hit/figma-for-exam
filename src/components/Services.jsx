import React from "react";
import Services_card from "./Services_card";
import bank_card_img from "../assets/bank_card.png";
import scripka_img from "../assets/scripka.png";
import slice_img from "../assets/slice.png";

const Services = () => {
  return (
    <section className="max-w-[1130px] mx-auto pt-[100px] px-4">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-[111px] mb-10">
        <div className="flex-1">
          <button className="border border-gray-100 mb-4">
            <span className="font-medium text-[#FF6107] py-1 px-2">
              services
            </span>
          </button>
          <p className="font-bold text-[28px] md:text-[36px] lg:text-[44px] max-w-[534px] leading-tight">
            Exactly Everything You Need For Business
          </p>
        </div>

        <div className="flex-1">
          <p className="text-[#464646] font-normal max-w-[428px]">
            We understand how desperately you want to grow in the business world
            & our motto is to help you with practical ideas and plans.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Services_card
          descrip="Get every necessary support to grow as business startup"
          text="Business Growing Support"
          img={bank_card_img}
          style="mt-[50px] shadow-xs bg-[#DBFFE9] w-[80px] h-[80px] rounded-[20px] flex items-center text-center justify-center"
          className="w-full h-[415px] rounded-2xl"
          btn="Learn More"
          btn_style="text-[#124F48] text-[18px] font-bold"
        />
        <Services_card
          descrip="A lifetime attachment with the community dreamer"
          text="Community Attachment"
          img={scripka_img}
          style="mt-[50px] shadow-xs bg-[#FFF7CA] w-[80px] h-[80px] rounded-[20px] flex items-center text-center justify-center"
          className="w-full h-[415px] shadow-xl rounded-2xl"
          btn="Learn More"
          btn_style="bg-[#FF823B] py-[15px] text-bold text-[18px] rounded-[31px] px-10 text-white"
        />
        <Services_card
          descrip="An exceptional plan can take you ahead millions of step which we discover"
          text="Exceptional Discovery Plans"
          img={slice_img}
          style="mt-[50px] shadow-xs bg-[#FFE9E0] w-[80px] h-[80px] rounded-[20px] flex items-center text-center justify-center"
          className="w-full h-[415px] rounded-2xl"
          btn="Learn More"
          btn_style="text-[#124F48] text-[18px] font-bold"
        />
      </div>
    </section>
  );
};

export default Services;
