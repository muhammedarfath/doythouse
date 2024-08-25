"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";
import product1 from "../../assets/first one.png";
import product2 from "../../assets/Doyt House Feb 8 (1).jpg";
import product3 from "../../assets/Doyt House Feb 19 (1).jpg";
import product4 from "../../assets/Doyt House Feb 8.jpg";

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: product1,
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: product2,
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: product3,
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: product4,
  },
];

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}



