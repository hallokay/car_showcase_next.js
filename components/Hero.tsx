"use client"; 

import React from "react";
import Image from "next/image";
import { CustomButton } from "./index";
export default function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h3 className="hero__title">
          원하는 차를 찾고, 예약하고, 렌트하고 - 빠르고 쉽게!
        </h3>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="explore Cars"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain"/>
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  );
}
