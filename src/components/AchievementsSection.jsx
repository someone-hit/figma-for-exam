import React from "react";
import jobhub_img from "../assets/jobhub_img.png";
import cent_img from "../assets/cent.png";
import Button from "./Button";

const AchievementsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1130px] mx-auto px-4 grid grid-cols-2 gap-19 items-start">
        <div>
          <p className="uppercase text-sm text-orange-500 font-medium mb-2">
            achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Worked With <span className="text-orange-500">100+</span> <br />
            Company Over <span className="text-orange-600">10 Years</span>
          </h2>
        <div className="rounded-xl p-5 mr-">
            <img
              src={jobhub_img}
              alt=""
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold py-3">
              JobHub Job Finding Website
            </h3>
            <p className="text-lg text-gray-600 mb-4 pb-5">
              This website has become one of the best ux interface for users
              with a beautiful and also lucrative for upcoming startups in the
              sectors
            </p>
    <Button text=' View More Work  →' className="bg-orange-500 text-white text-sm font-medium px-5 py-3 rounded-4xl hover:bg-orange-600"/>
          </div>
          
        </div>

        <div className="grid gap-6 mt-10">
          <div className="space-y-4 mt-8 ml-10">
            <div className="flex items-center  pb-3">
              <div className="text-2xl font-bold text-gray-400">9k+</div>
                <p className="text-sm font-medium text-[#124F48] ml-[60px] mr-[70px]  w-[129px]">
                  Completed Full Projects
                </p>
              <div>
                <p className="text-xs text-orange-500">From 120+ Countries</p>
              </div>
            </div>

            <div className="flex items-center pb-3">
              <div className="text-2xl font-bold text-gray-400">924+</div>
                <p className="text-sm font-medium text-[#124F48] ml-[47px] mr-[68px] w-[129px]">
                  Satisfactorily Happy Clients
                </p>
              <div>
                <p className="text-xs text-orange-500">From 90+ Countries</p>
              </div>
            </div>

            <div className="flex items-center pb-3">
              <div className="text-2xl font-bold text-gray-400">416</div>
                <p className="text-sm font-medium text-[#124F48] ml-[65px] mr-[68px]  w-[129px]">
                  Experienced Unit Employees
                </p>
              <div>
                <p className="text-xs text-orange-500">From 70+ Countries</p>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="text-2xl font-bold text-gray-400">3024</div>
                <p className="text-sm font-medium text-[#124F48] ml-[53px] mr-[66px] w-[129px]">
                  Startups Case Studies
                </p>
              <div>
                <p className="text-xs text-orange-500">From 150+ Countries</p>
              </div>
            </div>
          </div>

          <div className=" rounded-xl p-5 ">
            <img
              src={cent_img}
              alt=""
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold py-4">
              CENT - Payment App Landing Website
            </h3>
            <p className="text-lg text-gray-600 ">
              This website has become one of the best ux interface for users
              with an beautiful ui and also lucrative for upcoming startups in
              the sectors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AchievementsSection