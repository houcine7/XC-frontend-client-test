import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="w-full relative mb-2">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search"
        className="w-full rounded border border-gray-300 text-gray-500  h-9 pl-9 pr-3 outline-none"
      />
      <label className="absolute left-2 top-2" htmlFor="search">
        <BsSearch size={20} />
      </label>
    </div>
  );
};

export default SearchBar;
