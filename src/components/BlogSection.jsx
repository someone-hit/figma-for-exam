import BlogCard from "./BlogCard";
import medicine_img from '../assets/medicine.png'
import workroom_img from '../assets/workroom.png'
import Button from "./Button";

const BlogSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-orange-500 font-semibold ">blog</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          We Publish Blogs Every Week
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan
        </p>
      </div>

      <div className="flex justify-center gap-20 flex-wrap max-w-6xl mx-auto px-4">
        <BlogCard
        className="bg-white  shadow-lg max-w-sm"
          image={medicine_img}
          date="22"
          month="Dec"
          title="Upgrowing Economy Needs More Startups"
          description="We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan"
         btn_one='Learn More →'
         btn_className='mt-4 items-center text-white bg-[#FF823B] py-3 px-8 rounded-[31px] mt-8'
        />
        <BlogCard
        className="max-w-sm"
          image={workroom_img}
          date="16"
          month="Dec"
          title="Team Has Some Unique Feature - What Yours?"
          description="We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan"
          btn_text='Learn More →'
          btn_style='text-[#124F48] font-bold text-[18px] mt-8'
        />
      </div>
    </section>
  );
};

export default BlogSection;