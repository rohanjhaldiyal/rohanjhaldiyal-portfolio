import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Socials from "./socials-navbar";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Avatar className="h-40 w-40">
        <AvatarImage
          src="/rohanjhaldiyal.jpg"
          alt="rohanjhaldiyal"
        />
        <AvatarFallback>RJ</AvatarFallback>
      </Avatar>
      <h1 className="text-xl text-center text-sky-400 font-normal mt-10 uppercase">
        Hey 👋🏼, I am Rohan Jhaldiyal.
      </h1>
      <h3 className="text-lg text-center text-gray-300 font-normal mt-2">
        I turn ideas into{" "}
        <span className="text-sky-300">Beautifully Crafted Web-Apps.</span>
      </h3>
      <h3 className="text-lg text-center text-gray-300 font-normal mt-2">
        A <span className="text-sky-300">Full Stack Developer</span> by Passion
        and an <span className="text-sky-300">ML-Engineer</span> by Profession.
      </h3>
      <h3 className="text-lg text-center text-gray-300 font-normal mt-2">
        I <span className="text-sky-300">Freelance</span> part time and{" "}
        <span className="text-sky-300">
          Create Websites for Businesses and Individuals.
        </span>
      </h3>
      <Socials />
      <div className="text-center block md:hidden text-gray-400 text-xs p-2 mt-4">
        <Link href="#Skills">
        Scroll to see more <ArrowDownIcon className="h-4 w-4 inline-block" />
        </Link>
      </div>
    </div>
  );
}
