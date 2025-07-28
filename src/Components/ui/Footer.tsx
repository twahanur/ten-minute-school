import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
          <div className="lg:col-span-1">
            <Image
              src="https://10minuteschool.com/images/logo.svg"
              alt="10 Minute School Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-600 mb-6 text-sm">
              ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#" className="inline-block">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-sm"></div>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>

              <Link href="#" className="inline-block">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 text-white">🍎</div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">কোম্পানি</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  ক্যারিয়ার / নিয়োগ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  রিপোর্ট
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  শিক্ষক হিসাবে যোগ দিন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  অ্যাফিলিয়েট হিসাবে যোগ দিন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  প্রাইভেসি পলিসি
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  রিফান্ড পলিসি
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  ব্যবহারকারীর শর্তাবলি
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">অন্যান্য</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  ব্লগ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  বুক স্টোর
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  ফ্রি নোটস ও গাইড
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  চাকরি প্রস্তুতি কোর্সসমূহ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  সার্টিফিকেট ভেরিফাই করুন
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  ফ্রি ডাউনলোড
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              আমাদের যোগাযোগ মাধ্যম
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-600">কল করুন: </span>
                <span className="text-green-600 font-semibold">16910</span>
                <span className="text-gray-600"> (24x7)</span>
              </div>

              <div>
                <span className="text-gray-600">হোয়াটসঅ্যাপ: </span>
                <span className="text-green-600 font-semibold">
                  +8801896016252
                </span>
                <span className="text-gray-600">(24x7)</span>
              </div>

              <div>
                <span className="text-gray-600">দেশের বাইরে থেকে: </span>
                <span className="text-green-600 font-semibold">
                  +880 9610916910
                </span>
              </div>

              <div>
                <span className="text-gray-600">ইমেইল: </span>
                <span className="text-green-600 font-semibold">
                  support@10minuteschool.com
                </span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <Youtube size={20} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700"
                >
                  <div className="text-sm font-bold">T</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </footer>
  );
}
