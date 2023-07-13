'use client'
import { CustomButtonProps } from '@/types';
import React from 'react'

export default function CustomButton({ title, containerStyles, handleClick }: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type="button"
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
