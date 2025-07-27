"use client";

import { useState, useCallback, memo } from "react";
import { Phone, Menu, X } from "lucide-react";
import { HeaderProps, Language } from "../types/header";
import { translations } from "../consonants/translation";
import Logo from "./logo";
import SearchBar from "./searchbar";
import Navigation from "./navigation";
import MobileMenu from "./mobile-menu";
import LanguageToggle from "./language-toggle";

const Header = memo(({ className = "", onLanguageChange }: HeaderProps) => {
  const [language, setLanguage] = useState<Language>("bn");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const translation = translations[language];
  const handleLanguageToggle = useCallback(() => {
    const newLanguage = language === "bn" ? "en" : "bn";
    setLanguage(newLanguage);
    onLanguageChange?.(newLanguage);
    setOpenDropdown(null);
  }, [language, onLanguageChange]);

  const handleDropdownToggle = useCallback(
    (dropdown: string) => {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    },
    [openDropdown]
  );

  const handleDropdownClose = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLogoClick = useCallback(() => {
    // Handle logo click - navigate to home
    console.log("Navigate to home");
  }, []);

  const handleSearch = useCallback((query: string) => {
    console.log("Search query:", query);
  }, []);

  return (
    <header
      className={`w-full bg-white border-b border-gray-200 relative ${className}`}
    >
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo onClick={handleLogoClick} />

          {/* Search Bar - Desktop */}
          <SearchBar
            placeholder={translation.searchPlaceholder}
            onSearch={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-8"
          />

          {/* Navigation Menu - Desktop */}
          <Navigation
            translation={translation}
            openDropdown={openDropdown}
            onDropdownToggle={handleDropdownToggle}
            onDropdownClose={handleDropdownClose}
            className="hidden lg:flex"
          />

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle Button - Desktop */}
            <LanguageToggle
              currentLanguage={language}
              onToggle={handleLanguageToggle}
              className="hidden sm:flex"
            />

            {/* Phone Number */}
            <div className="hidden sm:flex items-center space-x-2 text-sm font-medium text-green-600">
              <Phone className="h-4 w-4" />
              <span>16910</span>
            </div>

            {/* Login Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
              {translation.login}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4">
        <SearchBar
          placeholder={translation.mobileSearchPlaceholder}
          onSearch={handleSearch}
          isMobile={true}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        translation={translation}
        currentLanguage={language}
        onLanguageToggle={handleLanguageToggle}
        onClose={handleMobileMenuClose}
      />

      {/* Overlay to close dropdowns when clicking outside */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={handleDropdownClose}
          aria-hidden="true"
        />
      )}
    </header>
  );
});

Header.displayName = "Header";

export default Header;
