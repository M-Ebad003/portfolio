import Image from "next/image";
import Link from "next/link";
import React from "react";
import MagicBtn from "./ui/MagicBtn";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute -bottom-0 left-0 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-1/2 opacity-50"
          width={"60"}
          height={"60"}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:ebadmuhammad003@gmail.com">
          <MagicBtn
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-lg text-base md:font-normal font-light">
          Copyright &copy; 2024 Ebad
        </p>
        <div className="mt-3 md:mt-0 flex items-center md:gap-3 gap-4">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link target="_blank" href={profile.href}>
                <Image src={profile.img} alt="img" height={25} width={24} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
