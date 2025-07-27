"use client"

import { memo } from "react"
import Dropdown from "./dropdown"
import { Translation } from "../types/header"

interface NavigationProps {
  translation: Translation
  openDropdown: string | null
  onDropdownToggle: (dropdown: string) => void
  onDropdownClose: () => void
  className?: string
}

/**
 * Main navigation component
 * Renders desktop navigation with dropdowns
 */
const Navigation = memo(
  ({ translation, openDropdown, onDropdownToggle, onDropdownClose, className = "" }: NavigationProps) => {
    const navigationItems = [
      {
        key: "class",
        label: translation.class,
        items: translation.classItems.map((item) => ({ label: item, href: "#" })),
      },
      {
        key: "skills",
        label: translation.skills,
        items: translation.skillsItems.map((item) => ({ label: item, href: "#" })),
      },
      {
        key: "liveExam",
        label: translation.liveExam,
        href: "#",
      },
      {
        key: "admission",
        label: translation.admissionGuide,
        items: translation.admissionItems.map((item) => ({ label: item, href: "#" })),
      },
      {
        key: "english",
        label: translation.englishCenter,
        items: translation.englishItems.map((item) => ({ label: item, href: "#" })),
      },
      {
        key: "more",
        label: translation.more,
        items: translation.moreItems.map((item) => ({ label: item, href: "#" })),
      },
    ]

    return (
      <nav className={`flex items-center space-x-6 ${className}`} role="navigation">
        {navigationItems.map((item) =>
          item.items ? (
            <Dropdown
              key={item.key}
              label={item.label}
              items={item.items}
              isOpen={openDropdown === item.key}
              onToggle={() => onDropdownToggle(item.key)}
              onClose={onDropdownClose}
            />
          ) : (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors"
            >
              {item.label}
            </a>
          ),
        )}
      </nav>
    )
  },
)

Navigation.displayName = "Navigation"

export default Navigation
