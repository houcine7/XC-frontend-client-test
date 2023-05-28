import { IoStarSharp } from "react-icons/io5";

type propsType = {
  reviewHeading: string;
  rating: number;
  appStoreName: string;
};

const dummyArray = [1, 2, 3, 4, 5];

const ReviewCardHeader = ({
  reviewHeading,
  rating,
  appStoreName,
}: propsType) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <span className="w-6 h-6 rounded bg-violet-400"></span>
        <div className="py-1 px-2 bg-gray-100 rounded text-xs font-normal">
          {appStoreName}
        </div>
        <p className="font-bold text-md tracking-wide">{reviewHeading}</p>
        <div className="flex">
          {dummyArray.map((item) =>
            rating >= item ? (
              <IoStarSharp size={24} fill="gold" key={item} />
            ) : (
              <IoStarSharp key={item} size={24} fill="gray" />
            )
          )}
        </div>
      </div>

      <div className="border border-gray-600 px-2 py-1 rounded-sm">
        <p className="text-xs font-medium uppercase">Translated</p>
      </div>
    </div>
  );
};

export default ReviewCardHeader;
