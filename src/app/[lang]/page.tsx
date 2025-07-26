import Link from 'next/link';

// This page acts as a simple welcome screen with a link to the main content.
export default function LangRootPage({ params }: { params: { lang: 'en' | 'bn' } }) {
  const courseSlug = 'ielts-course';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold   mb-4">
          10 Minute School Assessment
        </h1>
        <p className="text-lg   mb-8">
          Click the button below to view the IELTS course page.
        </p>
        <Link href={`/${params.lang}/course/${courseSlug}`}>
          {/* Reusing the button styles from your project */}
          <span className="inline-block px-8 py-3 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-md">
            View Course
          </span>
        </Link>
      </div>
    </div>
  );
}