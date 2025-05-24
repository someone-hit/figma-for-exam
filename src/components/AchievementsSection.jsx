import React from "react";
import jobhub_img from "../assets/jobhub_img.png";
import cent_img from "../assets/cent.png";
import Button from "./Button";

const AchievementsSection = () => {
  return (
    <section className=" py-16">
      <div className="max-w-[1130px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    
        <div>
          <p className="uppercase text-sm text-orange-500 font-medium mb-2">
            achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            We Worked With <span className="text-orange-500">100+</span> <br />
            Company Over <span className="text-orange-600">10 Years</span>
          </h2>

          <div className="rounded-xl p-5">
            <img
              src={jobhub_img}
              alt="JobHub"
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-2xl font-bold py-3">
              JobHub Job Finding Website
            </h3>
            <p className="text-lg text-gray-600 mb-5">
              This website has become one of the best UX interface for users,
              and also lucrative for upcoming startups in the sector.
            </p>
            <Button
              text="View More Work →"
              className="bg-orange-500 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-orange-600"
            />
          </div>
        </div>

   
        <div className="grid gap-8">
     
          <div className="grid gap-6">
            {[
              {
                value: "9k+",
                text: "Completed Full Projects",
                countries: "From 120+ Countries",
              },
              {
                value: "924+",
                text: "Satisfactorily Happy Clients",
                countries: "From 90+ Countries",
              },
              {
                value: "416",
                text: "Experienced Unit Employees",
                countries: "From 70+ Countries",
              },
              {
                value: "3024",
                text: "Startups Case Studies",
                countries: "From 150+ Countries",
              },
            ].map((stat, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="text-2xl font-bold text-gray-400 w-[60px]">
                  {stat.value}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#124F48]">
                    {stat.text}
                  </p>
                  <p className="text-xs text-orange-500 mt-1">
                    {stat.countries}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-5">
            <img
              src={cent_img}
              alt="CENT"
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-2xl font-bold py-3">
              CENT - Payment App Landing Website
            </h3>
            <p className="text-lg text-gray-600">
              This website has become one of the best UX interfaces for users,
              with beautiful UI and strong appeal for startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
