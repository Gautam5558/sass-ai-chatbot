import { features } from "@/data";
import React from "react";

const Features = () => {
  return (
    <div
      id="features"
      className="mx-12 my-5 px-10 py-24 bg-gray-200 flex flex-col gap-8 items-center rounded-[5px]"
    >
      <h2 className="font-bold text-3xl">Key Features</h2>
      <div className="flex justify-around">
        {features.map((feature) => {
          return (
            <div className="flex flex-col items-center gap-2" key={feature.id}>
              <span className="w-10 h-10 rounded-[50%] bg-black text-white flex justify-center items-center">
                {feature.logo}
              </span>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-700 text-center">{feature.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
