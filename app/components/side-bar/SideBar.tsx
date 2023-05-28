import { dummyData } from "@/app/data/data";
import SearchBar from "../search-bar/SearchBar";
import SelectTime from "../select-time/SelectTime";
import VersionHolder from "../sidebar-filters/VersionHolder";
import CountryHolder from "../sidebar-filters/countryHolder";
import RatingHolder from "../sidebar-filters/ratingHolder";
import SideBarFilter from "../sidebar-filters/sideBarFilter";

const SideBar = () => {
  let versions: Array<string> = new Array();
  let countries: Array<string> = new Array();
  dummyData.forEach((item) => {
    if (!versions.includes(item.version)) {
      versions.push(item.version);
    }
  });

  dummyData.forEach((item) => {
    if (!countries.includes(item.countryName)) {
      countries.push(item.countryName);
    }
  });

  return (
    <div className=" px-4 w-full py-4 top-0 left-0 right-0 ">
      <SearchBar />
      <SelectTime />
      <SideBarFilter
        name="filter by rating"
        Childs={[5, 4, 3, 2, 1].map((item) => (
          <RatingHolder key={item} rating={item} />
        ))}
      />
      <SideBarFilter
        name="filter by version"
        Childs={versions.map((version) => (
          <VersionHolder key={version} version={version} />
        ))}
      />
      <SideBarFilter
        name="filter by country"
        Childs={countries.map((countryName) => (
          <CountryHolder key={countryName} countryName={countryName} />
        ))}
      />
    </div>
  );
};

export default SideBar;
