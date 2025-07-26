"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import YouTube from 'react-youtube'

const MediaContent = ({media}) => {
      const [mainVideo, setMainVideo] = useState(
        media.find((m) => m.resource_type === "video")
      );
  return (
    <div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
            <YouTube videoId={mainVideo?.resource_value} opts={{ playerVars: { autoplay: 0, controls: 1 } }} iframeClassName="absolute inset-0 w-full h-full" key={mainVideo?.resource_value} />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {media.filter((m) => m.resource_type === "video").map((video) => (
              <Image key={video.resource_value} src={video.thumbnail_url} alt="video thumbnail" width={112} height={64} onClick={() => setMainVideo(video)} className={` object-cover rounded-md cursor-pointer border-2 ${mainVideo?.resource_value === video.resource_value ? "border-green-500" : "border-transparent" }`} />
            ))}
          </div>
        </div>
  )
}

export default MediaContent     