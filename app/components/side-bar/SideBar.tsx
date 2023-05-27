import SearchBar from "../search-bar/SearchBar";
import SelectTime from "../select-time/SelectTime";
import VersionHolder from "../sidebar-filters/VersionHolder";
import CountryHolder from "../sidebar-filters/countryHolder";
import RatingHolder from "../sidebar-filters/ratingHolder";
import SideBarFilter from "../sidebar-filters/sideBarFilter";

const SideBar = () => {
  return (
    <div className=" px-4 w-full py-4 top-0 left-0 right-0 ">
      <SearchBar />
      <SelectTime />
      <SideBarFilter name="filter by rating" Child={<RatingHolder />} />
      <SideBarFilter name="filter by version" Child={<VersionHolder />} />
      <SideBarFilter name="filter by country" Child={<CountryHolder />} />
    </div>
  );
};

export default SideBar;
