import CourseTitle from "./CourseTitle";
import MediaContent from "../ui/MediaContent";

const HeroSection = ({ title, description, media }) => {
  return (
    <div className="bg-[#0e1e32] text-white py-10">
      <div className="">
        <CourseTitle title={title} description={description} />
      </div>
    </div>
  );
};

export default HeroSection;
