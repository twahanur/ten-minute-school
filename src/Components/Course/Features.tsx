import Image from "next/image";
import React from "react";

const Features = ({ features }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{features.name}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.values.map((feature) => (
          <div
            key={feature.id}
            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
          >
            <Image
              src={feature.icon}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 mt-1"
            />
            <div>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm  ">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
