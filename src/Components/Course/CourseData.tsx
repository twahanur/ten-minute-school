import HeroSection from "./HeroSection";
import InstructorCard from "./Instructor";
import FeaturesSection from "./Features";
import CourseContent from "./CourseContent";
import MediaContent from "../ui/MediaContent";
import PurcessCard from "../ui/PurcessCard";
import CourseTitle from "./CourseTitle";
import CourseOutline from "./CourseOutLine";
import Layout from "@/app/[lang]/course/[slug]/layout";

export default function CourseData({ data }) {
  const { title, description, media, checklist, sections, seo, cta_text } =
    data;

  const instructor = sections.find((s) => s.type === "instructors")?.values[0];
  const features = sections.find((s) => s.type === "features");
  const about = sections.find((s) => s.type === "about");
  const schema = seo.schema.find(
    (s) =>
      s.meta_name === "ld-json" && s.meta_value.includes('"@type": "Product"')
  );
  const schemaData = schema ? JSON.parse(schema.meta_value) : {};
  const originalPrice = parseFloat(schemaData?.offers?.price || 5000);
  const discountedPrice = 3850;

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 bg-red-600 md:grid-cols-2 gap-y-6 md:gap-x-4">
          <div className="order-1 md:col-span-7">

            <CourseTitle title={title} description={description} />
          </div>
          
          {/* <div className="order-3 md:col-start-9 md:col-span-4 md:sticky md:top-6">
            <div className="flex flex-col">
              <MediaContent media={media} />
              <PurcessCard
                button={cta_text.name}
                checklist={checklist}
                originalPrice={originalPrice}
                discountedPrice={discountedPrice}
              />
            </div>
          </div> */}

          <div className="order-2 md:col-span-8">
            <InstructorCard instructor={instructor} />
          </div>

          <div className="order-5 md:col-span-8">
            <InstructorCard instructor={instructor} />
          </div>

          <div className="order-6 md:col-span-8 bg-yellow-500">
            <CourseOutline features={features} />

            {/* <Description text={courseData.description} /> 👈 Your Description component goes here */}
          </div>

          <div className="order-7 md:col-span-8">{/* <CourseLayout /> */}</div>
          <div className="order-8 md:col-span-8">
            {/* <LearningOutcomes /> */}
          </div>
          <div className="order-9 md:col-span-8">
            <FeaturesSection features={features} />
          </div>

          <div className="order-10 md:col-span-8">
            <CourseContent />
          </div>
        </div>

    </div>
  );
}
