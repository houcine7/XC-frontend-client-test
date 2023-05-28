export type option = {
  name: string;
  color: string;
  value: string;
};

const DropDownItem = ({
  item,
  handelChoice,
}: {
  item: option;
  handelChoice: any;
}) => {
  return (
    <div
      className="px-4 option cursor-pointer border-b border-b-gray-200 py-1 flex gap-2 items-center transition duration-300 ease-in-out hover:bg-blue-400 h-10 scroll-section overflow-y-scroll z-50"
      onClick={() => handelChoice(item)}
    >
      <span
        className="rounded w-5 h-5"
        style={{ backgroundColor: item.color }}
      ></span>
      <p className="font-light text-base">{item.name}</p>
    </div>
  );
};

export default DropDownItem;
