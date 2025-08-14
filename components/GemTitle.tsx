"use client";
import { Gem } from "lucide-react";

const GemTitle = ({ detail }: { detail: string }) => {
  return (
    <p className="text-[#9747ff] text-sm capitalize flex items-center py-4">
      <Gem className="mr-2 h-5 w-5" /> {detail}
    </p>
  );
};

export default GemTitle;
