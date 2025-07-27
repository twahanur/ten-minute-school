"use client"

import { memo } from "react"

interface LogoProps {
  className?: string
  onClick?: () => void
}

const Logo = memo(({ className = "", onClick }: LogoProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.()
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">
          <span className="text-red-500">10</span>
          <span className="text-black">MINUTE</span>
        </div>
        <div className="text-sm font-medium text-black">SCHOOL</div>
      </div>
    </div>
  )
})

Logo.displayName = "Logo"

export default Logo
