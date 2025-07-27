"use client"

import { memo } from "react"
import { Phone } from "lucide-react"
import type { Translation, Language } from "../types/header"
import LanguageToggle from "./language-toggle"

interface MobileMenuProps {
  isOpen: boolean
  translation: Translation
  currentLanguage: Language
  onLanguageToggle: () => void
  onClose: () => void
}

/**
 * Mobile menu component
 * Renders mobile navigation overlay
 */
const MobileMenu = memo(({ isOpen, translation, currentLanguage, onLanguageToggle, onClose }: MobileMenuProps) => {
  if (!isOpen) return null

  const navigationItems = [
    { label: translation.class, href: "#" },
    { label: translation.skills, href: "#" },
    { label: translation.liveExam, href: "#" },
    { label: translation.admissionGuide, href: "#" },
    { label: translation.englishCenter, href: "#" },
    { label: translation.more, href: "#" },
  ]

  const handleItemClick = () => {
    onClose()
  }

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
      <div className="px-4 py-4 space-y-4">
        {/* Language Toggle - Mobile */}
        <LanguageToggle currentLanguage={currentLanguage} onToggle={onLanguageToggle} isMobile={true} />

        {/* Mobile Navigation Links */}
        <div className="space-y-3" role="navigation">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleItemClick}
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Phone Number - Mobile */}
        <div className="flex items-center space-x-2 text-sm font-medium text-green-600 pt-2 border-t border-gray-200">
          <Phone className="h-4 w-4" />
          <span>16910</span>
        </div>
      </div>
    </div>
  )
})

MobileMenu.displayName = "MobileMenu"

export default MobileMenu
