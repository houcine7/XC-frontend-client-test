import React from "react";

import { getCode } from "iso-3166-1-alpha-2";
import Image from "next/image";

const getCountryFlag = (countryName: string) => {
  if (countryName == "US") {
    return `https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@master/flags/4x3/${countryName.toLowerCase()}.svg`;
  } else if (countryName == "UK") {
    return `https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@master/flags/4x3/gb.svg`;
  } else if (countryName == "Russia") {
    return `https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@master/flags/4x3/ru.svg`;
  }

  let countryCode = getCode(countryName);

  return `https://cdn.jsdelivr.net/gh/lipis/flag-icon-css@master/flags/4x3/${countryCode}.svg`;
};

const CountryFlag = ({ countryName }: { countryName: string }) => {
  const flag = getCountryFlag(countryName).toLowerCase();

  return (
    <Image
      src={flag}
      alt="country flag"
      className="rounded"
      width={28}
      height={17}
      style={{ height: 17 }}
    />
  );
};

export default CountryFlag;
