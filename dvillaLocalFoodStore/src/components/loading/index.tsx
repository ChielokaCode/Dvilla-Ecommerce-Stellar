import React from 'react';
import Image from 'next/image';
import LoadingImg from "/public/assests/image/dvilla.png";

export interface SpacerProps {
  size: number
}

export function Loading({ size }: SpacerProps) {
  return (
    <Image
      src={LoadingImg}
      width={size}
      height={size}
      alt="loading..."
    />
  )
}
