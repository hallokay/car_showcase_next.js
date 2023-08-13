"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CarDetails, CustomButton } from "./index";
import { calculateCarRent } from "@/util";

interface CarCardProps {
  car: CarProps;
}
export default function CarCard({ car }: CarCardProps) {
  const { city_mpg, drive, make, model, transmission, year } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      {/* car price perday */}

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          className="object-contain"
          alt="car model"
          fill
          priority
        />
      </div>
      {/* car img */}

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justufy-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justufy-center items-center gap-2">
            <Image src={"/tire.svg"} alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justufy-center items-center gap-2">
            <Image src={"/gas.svg"} alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        {/* 카드 하단 아이콘 */}

        <div className="car-card__btn-container">
          <CustomButton 
          title='View More'
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue" 
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon='/right-arrow.svg'
          handleClick={() => setIsOpen(true)}  
          />
        </div>
        {/* car-card__btn-container */}
      </div>
      {/* 카드 하단 */}

    {/* 더보기 버튼 누르면 뜨는 팝업 구현 */}
      <CarDetails isOpen={isOpen} closeModel={() => setIsOpen(false)} car={car}/>
    </div>
  );
}
