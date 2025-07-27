"use client"

import type React from "react"

import { memo, useState, useCallback } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder: string
  onSearch?: (query: string) => void
  className?: string
  isMobile?: boolean
}

/**
 * SearchBar component with search functionality
 * Supports both desktop and mobile layouts
 */
const SearchBar = memo(({ placeholder, onSearch, className = "", isMobile = false }: SearchBarProps) => {
  const [query, setQuery] = useState("")

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      onSearch?.(query)
    },
    [query, onSearch],
  )

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }, [])

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`
            w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
            text-sm transition-colors
            ${isMobile ? "text-base" : ""}
          `}
          aria-label="Search"
        />
      </div>
    </form>
  )
})

SearchBar.displayName = "SearchBar"

export default SearchBar
