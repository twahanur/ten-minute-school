import HeroSection from "./HeroSection";
import InstructorCard from "./Instructor";
import FeaturesSection from "./Features";
import CourseContent from "./CourseContent";
import MediaContent from "../ui/MediaContent";
import PurcessCard from "../ui/PurcessCard";
import CourseTitle from "./CourseTitle";
import CourseOutline from "./CourseOutLine";
import Layout from "@/app/[lang]/course/[slug]/layout";
import CourseEngagementCard from "./CourseEngagementCard";
import CoursePointer from "./CoursePointer";

export default function CourseData({ data }) {
  const { title, description, media, checklist, sections, seo, cta_text } =
    data;

  const instructor = sections.find((s) => s.type === "instructors")?.values[0];
  const features = sections.find((s) => s.type === "features");
  const about = sections.find((s) => s.type === "about");
  const CoursePointerData = sections.find((s) => s.type === "pointers");
  const feature_explanations = sections.find((s) => s.type === "feature_explanations");
  const CourseEngagementData = sections.find((s) => s.type === "group_join_engagement").values[0];
  console.log({feature_explanations})
  const schema = seo.schema.find(
    (s) =>
      s.meta_name === "ld-json" && s.meta_value.includes('"@type": "Product"')
  );
  const schemaData = schema ? JSON.parse(schema.meta_value) : {};
  const originalPrice = parseFloat(schemaData?.offers?.price || 5000);
  const discountedPrice = 3850;

  return (
    <>
      <CourseTitle title={title} description={description} />
      <InstructorCard instructor={instructor} />
      <CourseOutline features={features} />
      <CourseEngagementCard data={CourseEngagementData} />
      <CoursePointer data={CoursePointerData} />
      
      
    </>
  );
}
