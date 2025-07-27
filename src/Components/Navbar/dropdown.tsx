"use client"

import type React from "react"

import { memo, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import type { DropdownProps, NavigationItem } from "../types/header"

/**
 * Reusable Dropdown component
 * Handles dropdown menu functionality with keyboard navigation
 */
const Dropdown = memo(({ label, items, isOpen, onToggle, onClose }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  const handleItemClick = (item: NavigationItem) => {
    if (item.href) {
      // Handle navigation
      onClose()
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-in fade-in-0 zoom-in-95 duration-100"
          role="menu"
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors first:rounded-t-md last:rounded-b-md"
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
})

Dropdown.displayName = "Dropdown"

export default Dropdown
