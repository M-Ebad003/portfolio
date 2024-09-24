import { workExperience } from "@/data";
import React from "react";
import { Button, MovingBorder } from "./ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-16 w-full" id="about">
      <h1 className="heading">
        My
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            key={card.id}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className=" flex lg:justify-start justify-center">
                <Image
                  alt="img"
                  width={24}
                  height={24}
                  src={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start flex lg:justify-start justify-center text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className=" text-center lg:text-start flex lg:justify-start justify-center text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
