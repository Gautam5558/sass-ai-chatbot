import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="p-20 flex flex-col gap-4 justify-center items-center h-[calc(100vh-90px)] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] ">
      <h2 className="text-5xl font-bold">Price Smarter , Sell Bigger</h2>
      <div className="flex flex-col gap-1 text-center">
        <span>
          Adjust your product pricing across countries to maximize sales.
        </span>
        <span>
          Capure a larger portion of the untapped market with location based
          dynamic pricing.
        </span>
      </div>
      <Button>
        <span>Get started for free</span>
        <MoveRight className="size-4" />
      </Button>
    </div>
  );
};

export default Hero;
