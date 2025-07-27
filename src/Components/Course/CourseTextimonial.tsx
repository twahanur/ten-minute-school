"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import YouTube from "react-youtube";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface TestimonialItem {
  name: string;
  testimonial: string;
  video_url: string;
  thumb?: string;
  profile_image?: string;
  description?: string;
}

interface TestimonialData {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: TestimonialItem[];
}

interface CourseTestimonialProps {
  testimonials: TestimonialData;
}

const CourseTestimonial: React.FC<CourseTestimonialProps> = ({
  testimonials,
}) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = Math.max(0, testimonials.values.length - itemsPerView);

  const getThumbnail = (item: TestimonialItem) => {
    if (item.thumb) return item.thumb;
    if (item.video_url)
      return `https://img.youtube.com/vi/${item.video_url}/maxresdefault.jpg`;
    return "/placeholder.svg";
  };

  const goToPrevious = () => {
    setCurrentStartIndex((prev) => Math.max(0, prev - 1));
    setPlayingVideo(null);
  };

  const goToNext = () => {
    setCurrentStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
    setPlayingVideo(null);
  };

  const visibleItems = testimonials.values.slice(
    currentStartIndex,
    currentStartIndex + itemsPerView
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        {testimonials.name}
      </h2>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          disabled={currentStartIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border rounded-full shadow-md z-10 p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          disabled={currentStartIndex >= maxStartIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border rounded-full shadow-md z-10 p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => (
            <div
              key={`${currentStartIndex + index}-${item.name}`}
              className="bg-white border-gray-400 rounded-xl border p-2 shadow-sm flex flex-col relative"
            >
              {/* Quotation Mark */}
              <div className="absolute z-10 -top-1 left-6 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-pink-500 text-6xl font-bold">&quot;</span>
              </div>

              {/* Media or Text */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mt-4">
                {item.video_url && playingVideo !== item.video_url ? (
                  <>
                    <Image
                      src={getThumbnail(item)}
                      alt={`${item.name} testimonial`}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => setPlayingVideo(item.video_url)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Play
                          className="w-6 h-6 text-gray-800 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </button>
                  </>
                ) : item.video_url ? (
                  <YouTube
                    videoId={item.video_url}
                    opts={{
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                      },
                    }}
                    iframeClassName="absolute inset-0 w-full h-full"
                    onEnd={() => setPlayingVideo(null)}
                  />
                ) : (
                  <p className="text-sm text-gray-700 line-clamp-5 leading-relaxed px-4 pb-4">
                    {item.testimonial}
                  </p>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex items-center space-x-3 px-4 py-2">
                <Image
                  src={item.profile_image || "/placeholder-user.jpg"}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTestimonial;
