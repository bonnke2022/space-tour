"use client";
import React from "react";
import { Button } from "./ui/button";

const ButtonDot = ({
  aria,
  detail,
  width,
  height,
}: {
  aria: boolean;
  detail: string;
  width: string;
  height: string;
}) => {
  return (
    <Button
      aria-selected={aria}
      className={`bg-white/25 ${width} ${height} border-0 rounded-[50%] p-[.5em] hover:bg-white/50 focus:bg-white/50 aria-selected:bg-white/100`}
    >
      <span className="sr-only">{detail}</span>
    </Button>
  );
};

export default ButtonDot;
