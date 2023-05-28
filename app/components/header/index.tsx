import FilterRightInput from "../filter-right-input/FilterRightInput";
import Select from "../select-product";

const Header = () => {
  return (
    <nav className="w-full px-16 py-8 border-b border-b-gray-300 flex items-center justify-between">
      <div className="flex flex-col gap-1 justify-start">
        <label className="text-md font-normal text-gray-600 " htmlFor="f">
          select products
        </label>
        <div className="relative">
          <Select />
        </div>
      </div>

      <div className="flex gap-4">
        <FilterRightInput
          name="Sorting"
          options={[
            { name: "Newest First", value: "newestFirst" },
            { name: "Oldest first", value: "oldestFirst" },
          ]}
        />
        <FilterRightInput
          name="Translation"
          options={[{ name: "English", value: "english" }]}
        />
      </div>
    </nav>
  );
};

export default Header;
