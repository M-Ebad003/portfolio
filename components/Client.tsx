import React from "react";
import { InfiniteMovingCards } from "./ui/MovingCard";
import { testimonials } from "@/data";

const Client = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some Qoutes from 
        <span className="text-purple"> famous person</span>
      </h1>
      <div className="flex flex-col mt-24 justify-center items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Client;
