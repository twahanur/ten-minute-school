"use client"

import { memo } from "react"
import { Language } from "../types/header"

interface LanguageToggleProps {
  currentLanguage: Language
  onToggle: () => void
  className?: string
  isMobile?: boolean
}

const LanguageToggle = memo(({ currentLanguage, onToggle, className = "", isMobile = false }: LanguageToggleProps) => {
  const getToggleText = () => {
    if (isMobile) {
      return `Switch to ${currentLanguage === "bn" ? "English" : "বাংলা"}`
    }
    return currentLanguage.toUpperCase()
  }

  return (
    <button
      onClick={onToggle}
      className={`
        flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 
        transition-colors
        ${isMobile ? "w-full text-left py-2" : "px-3 py-1 rounded-md border border-gray-300 hover:border-gray-400"}
        ${className}
      `}
      aria-label={`Switch language to ${currentLanguage === "bn" ? "English" : "Bengali"}`}
    >
      <span>🇺🇸</span>
      <span>{getToggleText()}</span>
    </button>
  )
})

LanguageToggle.displayName = "LanguageToggle"

export default LanguageToggle
