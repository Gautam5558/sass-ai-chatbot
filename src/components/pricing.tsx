import { pricingPlansData } from "@/data";
import React from "react";
import PricingCard from "./shared/pricing-card";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-6 px-10 py-24 items-center">
      <h2 className="font-bold text-3xl">Choose Your Plan</h2>
      <div className="flex items-center gap-16">
        {pricingPlansData.map((plan, index) => {
          return <PricingCard data={plan} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Pricing;
