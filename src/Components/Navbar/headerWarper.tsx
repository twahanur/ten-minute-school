// src/Components/Navbar/HeaderWrapper.tsx
"use client";

import Header from "./header";
import { Language } from "../types/header";

export default function HeaderWrapper() {
  const handleLanguageChange = (language: Language) => {
    console.log("Language changed to:", language);
  };

  return <Header onLanguageChange={handleLanguageChange} />;
}
