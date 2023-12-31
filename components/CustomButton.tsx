'use client'
import { CustomButtonProps } from '@/types';
import React from 'react';
import Image from 'next/image';

export default function CustomButton({ title, containerStyles, handleClick, btnType, textStyles, rightIcon  }: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1  ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="icon" fill className='object-contain' />
        </div>
      )}
  
    </button>
  );
}
