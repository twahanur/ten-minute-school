import { fetchProductData } from "@/lib/api";
import { ProductData } from "@/lib/types";
import { Metadata } from "next";

// Import your section components
import HeroSection from "@/Components/sections/HeroSection";
import InstructorsSection from "@/Components/Course/InstructorsSection";
import { useEffect } from "react";
import CourseDetails from "@/Components/Course/CourseDetails";
import CourseData from "@/Components/Course/CourseData";
import Layout from "./layout";
import PurcessCard from "@/Components/ui/PurcessCard";
// This is an async Server Component
type Props = {
  params: { slug: string; lang: "en" | "bn" };
};

// Empty dependency array to run once on mount

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
  console.log({ data });

  return (
    <Layout
      rightContent={
        <PurcessCard
          button={data.cta_text.name}
          checklist={data.checklist}
          originalPrice={1000}
          discountedPrice={600}
        />
      }
    >
      <CourseData data={data} />
    </Layout>
  );
}
