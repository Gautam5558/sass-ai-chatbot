import { PlanData } from "@/lib/types";
import { Check, X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface PricingCardPropsType {
  data: PlanData;
}

const PricingCard = ({
  data: { buttonText, description, title, features, price },
}: PricingCardPropsType) => {
  return (
    <div className="flex flex-col flex-1 gap-4 items-start p-5 rounded-lg border-[1px] border-gray-100 shadow-xl">
      <div className="flex flex-col items-start">
        <h4 className="text-bold m-0">{title}</h4>
        <span className="text-gray-400 text-[13px]">{description}</span>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-2xl m-0">${price}</h3>
        <span className="text-gray-400 text-[13px]">per month</span>
      </div>
      <div className="flex flex-col items-start gap-1">
        {features.map((feature, index) => {
          return (
            <div className="flex items-center gap-2" key={index}>
              <span className="">
                {feature.isAvailable ? (
                  <Check className="text-green-500 w-4 h-4" />
                ) : (
                  <X className="text-red-500 w-4 h-4" />
                )}
              </span>
              <p className="text-[14px] text-black/75">{feature.name}</p>
            </div>
          );
        })}
      </div>
      <Button className="w-full">{buttonText}</Button>
    </div>
  );
};

export default PricingCard;
