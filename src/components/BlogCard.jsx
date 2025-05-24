import React from "react";
import Button from "./Button";

const BlogCard = ({ image, date, month, title, description, className, btn_text , btn_one,btn_className,btn_style }) => (
  <div className={className}>
    <div className="relative">
      <img
        src={image}
        alt=''
        className=" w-full h-64 object-cover"
      />
      <div className="absolute top-0 right-0 bg-emerald-900 text-white text-center px-3 py-1 rounded-xl">
        <p className="text-lg font-bold leading-tight">{date}</p>
        <p className="text-xl font-bold">{month}</p>
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>
      <p className={btn_style}>{btn_text}</p>
      <button className={btn_className}>
        {btn_one}
      </button>
    </div>
  </div>
);
export default BlogCard;