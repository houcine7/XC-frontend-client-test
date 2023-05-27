import Image from "next/image";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const CardFooter = () => {
  return (
    <div className="mt-6 flex justify-between">
      <div className="flex gap-4 text-xs font-semibold">
        <p>by Chelsea</p>
        <p>1 hour ago</p>
        <p>v1.0.0</p>

        <div className="flex gap-1 items-center">
          <Image
            src={"/uk-img.png"}
            alt="flag"
            width={22}
            height={18}
            style={{ height: 18 }}
          />
          Unitedkingdom
        </div>
      </div>
      <div className="flex gap-8 text-xs font-semibold">
        <p>replay</p>
        <p className="flex items-center">
          share{" "}
          <span className="inline-block">
            <RiArrowDownSLine />
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardFooter;
