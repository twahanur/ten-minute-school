'use client';
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const otherLang = currentLang === "en" ? "bn" : "en";
  const newPath = pathname.replace(`/${currentLang}/`, `/${otherLang}/`);

  return (
    <button
      onClick={() => router.push(newPath)}
      className="p-2 bg-gray-200 rounded"
    >
      Switch to {otherLang === "en" ? "English" : "বাংলা"}
    </button>
  );
}
