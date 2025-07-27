/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseTitle from "./CourseTitle";

const HeroSection = ({ title, description }:any) => {
  return (
    <div className="bg-[#0e1e32] text-white py-10">
      <div className="">
        <CourseTitle title={title} description={description} />
      </div>
    </div>
  );
};

export default HeroSection;
