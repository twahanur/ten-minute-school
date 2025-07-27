/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const PurcessCard = ({ button, checklist, originalPrice, discountedPrice }:any) => {
  const currency = "৳";
  
  return (
    <div className="w-full md:md:border rounded-lg bg-white shadow-sm overflow-hidden">
      <div className="p-5 text-center">
        <div className="flex items-baseline md:justify-center gap-2 mb-3">
          <span className="text-3xl font-bold  ">
            {currency}{discountedPrice.toLocaleString("bn-BD")}
          </span>
          <span className="text-lg   line-through">
            {currency}{originalPrice.toLocaleString("bn-BD")}
          </span>
        </div>
        <button className="w-full py-3 rounded-lg font-semibold text-white bg-green-800 hover:bg-green-800 transition-colors shadow-lg shadow-stone-700">
          {button}
        </button>
      </div>
      <div className="p-5 md:border-t">
        <h3 className="text-lg font-bold   mb-3">
          এই কোর্সে যা যা থাকছে
        </h3>
        <ul className="space-y-3 text-sm  ">
          {checklist.filter((item:any) => !item.list_page_visibility).map((item:any) => (
            <li key={item.id} className="flex items-center gap-3">
              <Image src={item.icon} alt="" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-50 md:border-t text-center">
        <a href="#" className="text-green-600 font-semibold hover:underline">
          আমাদের সাপোর্ট টিমের সাথে কথা বলুন
        </a>
      </div>
    </div>
  );
};

export default PurcessCard;