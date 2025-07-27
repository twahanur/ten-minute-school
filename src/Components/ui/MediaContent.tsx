/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import type React from "react"
import { useState } from "react"
import YouTube from "react-youtube"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const MediaContent = ({ media }:any) => {
  const galleryItems = media.filter(
    (m:any) => m.resource_type === "video" || (m.resource_type === "image" && m.name === "preview_gallery"),
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const currentItem = galleryItems[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
    setIsVideoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
    setIsVideoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsVideoPlaying(false)
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const getThumbnailUrl = (item:any) => {
    if (item.resource_type === "video") {
      return item.thumbnail_url || `https://img.youtube.com/vi/${item.resource_value}/maxresdefault.jpg`
    }
    return item.resource_value
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Media Display */}
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black mb-4">
        {/* Navigation Arrows */}
        <button
          
          
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
          onClick={goToPrevious}
          disabled={galleryItems.length <= 1}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
          onClick={goToNext}
          disabled={galleryItems.length <= 1}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Media Content */}
        {currentItem?.resource_type === "video" ? (
          <>
            {!isVideoPlaying && (
              <div className="relative w-full h-full">
                <Image
                  src={getThumbnailUrl(currentItem) || "/placeholder.svg"}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="cursor-pointer text-black rounded-full w-16 h-16"
                    onClick={handleVideoPlay}
                  >
                    <Play className="h-8 w-8 ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            )}
            {isVideoPlaying && (
              <YouTube
                videoId={currentItem.resource_value}
                opts={{
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    modestbranding: 1,
                    rel: 0,
                  },
                }}
                iframeClassName="absolute inset-0 w-full h-full"
                key={currentItem.resource_value}
              />
            )}
          </>
        ) : (
          <Image src={currentItem?.resource_value || ""} alt="Gallery image" fill className="object-cover" />
        )}

        {/* Slide Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {galleryItems.map((_:any, index:number) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {galleryItems.map((item:any, index:number) => (
          <div key={`${item.resource_type}-${item.resource_value}-${index}`} className="relative flex-shrink-0">
            <Image
              src={getThumbnailUrl(item) || "/placeholder.svg"}
              alt={`${item.resource_type} thumbnail`}
              width={112}
              height={64}
              onClick={() => goToSlide(index)}
              className={`object-cover rounded-md cursor-pointer border-2 transition-all hover:opacity-80 ${
                currentIndex === index
                  ? "border-green-500 ring-2 ring-green-500/50"
                  : "border-transparent hover:border-gray-300"
              }`}
            />
            {/* Video Play Icon Overlay for Thumbnails */}
            {item.resource_type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/60 rounded-full p-1">
                  <Play className="h-4 w-4 text-white ml-0.5" fill="currentColor" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MediaContent
