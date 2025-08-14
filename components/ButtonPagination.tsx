"use client";
import React from "react";
import { Button } from "./ui/button";

const ButtonPagination = ({
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
      className={`text-xl bg-dark border-2 border-white/25 ${width} ${height} rounded-[50%] p-[.5em] hover:bg-white hover:text-dark focus:bg-white focus:text-dark aria-selected:border-white`}
    >
      {detail}
    </Button>
  );
};

export default ButtonPagination;
