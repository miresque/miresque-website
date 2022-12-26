import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full h-full pt-20">
      <div className="max-w-[1240px] w-full h-full mx-auto mt-2 p-2 flex flex-col items-center md:flex-row md:mt-0">
        <div className="grid gap-5">
          <p>
            <strong>&#8212; Hello</strong>
          </p>
          <h1>
            <span className="font-normal">I&apos;m </span> Mirkan Kilinc
          </h1>
          <h2>
            A Junior full stack software developer, movie buff, techie and gamer
          </h2>
          <p>
            Of course, there&apos;s so much more to me than a few fancy titles.
            Scroll down and see what I can do!
          </p>
        </div>
        <div className="w-full grid place-items-center">
          <Image
            className="md:float-right"
            src="/assets/hero-placeholder.png"
            alt="hero graphic of boy jumping"
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="text-center mt-14 hidden md:block">
        <p className="text-xs uppercase tracking-wide">SCROLL</p>
        <p className="text-2xl">&darr;</p>
      </div>
    </main>
  );
};

export default Hero;
