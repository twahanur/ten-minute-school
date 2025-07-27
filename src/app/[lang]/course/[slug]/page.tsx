// app/[lang]/course/[slug]/page.tsx

import { fetchProductData } from "@/lib/api";
import { Metadata } from "next";
import CourseData from "@/Components/Course/CourseData";
import PurcessCard from "@/Components/ui/PurcessCard";
import MediaContent from "@/Components/ui/MediaContent";
import HeaderWrapper from "@/Components/Navbar/headerWarper";
import Footer from "@/Components/ui/Footer";
// import HeaderWrapper from "@/Components/Navbar/HeaderWrapper"; // ✅ import this
type Props = {
  params: { slug: string; lang: "en" | "bn" };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchProductData(params.slug, params.lang);
  if (!data || !data.seo) {
    return {
      title: "Course Not Found",
    };
  }
  return {
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
      images: [data.seo.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const data = await fetchProductData(params.slug, params.lang);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        Failed to load course data. Please try again later.
      </div>
    );
  }

  return (
    <div className="bg-white">
      <HeaderWrapper /> {/* ✅ use wrapper instead of direct Header */}

      <div className="">
        <div className="gap-4 md:px-20 px-3 text-black grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-8 ">
            <CourseData data={data} />
          </div>
          <div className="mx-5 hidden md:block col-span-4 mt-30 bg-white p-2">
            <MediaContent media={data.media} />
            <PurcessCard
              button={data.cta_text?.name}
              checklist={data.checklist}
              originalPrice="1000"
              discountedPrice="800"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
