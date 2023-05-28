import { FONT_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import CountryFlag from "../country-flag/CountryFlag";

type propsType = {
  reviewUserName: string;
  version: string;
  countryName: string;
  date: string;
};

function getTimePassed(dateTime: string): string {
  const date = new Date(dateTime);

  const currentDateTime = new Date();

  const timeDifference = currentDateTime.getTime() - date.getTime();
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const millisecondsPerYear = 365 * millisecondsPerDay;

  if (timeDifference < 0) {
    return "In the future";
  } else if (timeDifference < millisecondsPerSecond) {
    return "Just now";
  } else if (timeDifference < millisecondsPerMinute) {
    const seconds = Math.floor(timeDifference / millisecondsPerSecond);
    return `${seconds} seconds ago`;
  } else if (timeDifference < millisecondsPerHour) {
    const minutes = Math.floor(timeDifference / millisecondsPerMinute);
    return `${minutes} minutes ago`;
  } else if (timeDifference < millisecondsPerDay) {
    const hours = Math.floor(timeDifference / millisecondsPerHour);
    return `${hours} hours ago`;
  } else if (timeDifference < millisecondsPerYear) {
    const days = Math.floor(timeDifference / millisecondsPerDay);
    return `${days} days ago`;
  } else {
    const years = Math.floor(timeDifference / millisecondsPerYear);
    return `${years} years ago`;
  }
}

const CardFooter = ({
  reviewUserName,
  version,
  countryName,
  date,
}: propsType) => {
  return (
    <div className="mt-6 flex justify-between">
      <div className="flex gap-4 text-xs font-semibold">
        <p>by {reviewUserName}</p>
        <p>{getTimePassed(date)}</p>
        <p>{version}</p>

        <div className="flex gap-1 items-center">
          <CountryFlag countryName={countryName} />
          {countryName}
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
