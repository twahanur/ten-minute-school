/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import InstructorCard from "./Instructor";
import CourseTitle from "./CourseTitle";
import CourseOutline from "./CourseOutLine";
import CourseEngagementCard from "./CourseEngagementCard";
import CoursePointer from "./CoursePointer";
import CourseDetails from "./CourseDetails"; // Renamed from CourseData to prevent recursion
import CourseExclusiveFeature from "./CourseExclusiveFeature";
import CourseTestimonial from "./CourseTextimonial";
import CourseFaq from "./CourseFaq";
import MediaContent from "../ui/MediaContent";
import PurcessCard from "../ui/PurcessCard";

export default function CourseData({ data }:any) {
  if (!data) return null;

  const {
    title = "Untitled Course",
    description = "",
    media,
    sections = [],
    seo = { schema: [] },
  } = data;

  const instructor = sections.find((s:any) => s.type === "instructors")
    ?.values?.[0];
  const features = sections.find((s:any) => s.type === "features");
  const about = sections.find((s:any) => s.type === "about");
  const CoursePointerData = sections.find((s:any) => s.type === "pointers");
  const feature_explanations = sections.find(
    (s:any) => s.type === "feature_explanations"
  );
  const groupEngagement = sections.find(
    (s:any) => s.type === "group_join_engagement"
  );
  const testimonials = sections.find((s:any) => s.type === "testimonials");
  const faqData = sections.find((s:any) => s.type === "faq");
  const CourseEngagementData = groupEngagement?.values?.[0];
  // Parse schema safely
  let schemaData = {};
  try {
    const schema = seo?.schema?.find(
      (s:any) =>
        s.meta_name === "ld-json" && s.meta_value.includes('"@type": "Product"')
    );
    if (schema) {
      schemaData = JSON.parse(schema.meta_value);
    }
  } catch (error) {
    console.error("Schema parse error:", error);
  }

  return (
    <>
      <div className="block md:hidden">
        <MediaContent media={media} />
      </div>
      <CourseTitle title={title} description={description} />
      <div className="block md:hidden">
        <PurcessCard
          button={data.cta_text?.name}
          checklist={data.checklist}
          originalPrice="1000"
          discountedPrice="800"
        />
      </div>
      {instructor && <InstructorCard instructor={instructor} />}
      {features && <CourseOutline features={features} />}
      {CourseEngagementData && (
        <CourseEngagementCard data={CourseEngagementData} />
      )}
      {CoursePointerData && <CoursePointer data={CoursePointerData} />}
      {about && <CourseDetails data={about} />}
      {feature_explanations && (
        <CourseExclusiveFeature data={feature_explanations} />
      )}
      {testimonials && <CourseTestimonial testimonials={testimonials} />}
      {faqData && <CourseFaq data={faqData} />}
    </>
  );
}
