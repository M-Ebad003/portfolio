import React from "react";
import { InfiniteMovingCards } from "./ui/MovingCard";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Client = () => {
  return (
    <div className="py-20" id="quotes">
      <h1 className="heading">
        Discover inspiring quotes from
        <span className="text-purple"> renowned individuals</span>
      </h1>
      <div className="flex flex-col mt-24 justify-center items-center ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center mt-20 gap-4 md:gap-16 justify-center">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                width={34}
                height={32}
                src={img}
                alt={name}
                className={`${id === 2 ? 'w-[100px] md:w-[150px]': 'md:w-10 w-5'}`}
              />
              {nameImg && (
                <Image
                  width={42}
                  height={32}
                  src={nameImg}
                  alt={name}
                  className="md:w-24 w-20"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
