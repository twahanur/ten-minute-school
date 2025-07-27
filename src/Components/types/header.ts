export type Language = "bn" | "en"

export interface NavigationItem {
  label: string
  href?: string
  items?: NavigationItem[]
}

export interface Translation {
  searchPlaceholder: string
  mobileSearchPlaceholder: string
  class: string
  skills: string
  liveExam: string
  admissionGuide: string
  englishCenter: string
  more: string
  login: string
  classItems: string[]
  skillsItems: string[]
  admissionItems: string[]
  englishItems: string[]
  moreItems: string[]
}

export interface DropdownProps {
  label: string
  items: NavigationItem[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export interface HeaderProps {
  className?: string
  onLanguageChange?: (language: Language) => void
  onSearch?: (query: string) => void
}
