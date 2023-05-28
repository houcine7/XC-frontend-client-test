"use client";

import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { dummyData } from "@/app/data/data";

import { IoStarSharp } from "react-icons/io5";
import { sortFiltersData } from "./sideBarFilter";

const getItemsNumberByRating = (rating: number, data: any): number => {
  let counter = 0;

  data.forEach((item: any) => {
    if (Number(item.rating) == rating) counter++;
  });

  return counter;
};

const getPercentWidth = (itemsNumber: number, data: any): number => {
  const percent = itemsNumber / data.length;
  return (percent * 64) | 0;
};

//component
const RatingHolder = ({ rating }: { rating: number }) => {
  const { state, dispatch } = useStateValue();

  const dummyArray = [1, 2, 3, 4, 5];
  const itemsNumber = getItemsNumberByRating(rating, state.currentData);

  const handlClick = () => {
    //

    const filtredData = state.currentData.filter(
      (item) => item.rating == "" + rating
    );

    dispatch({
      type: actionType.SET_FILTERS_STATE,
      payload: { ratingSelected: rating },
    });

    if (filtredData.length != 0) {
      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    } else {
      const filtredData = dummyData.filter((item) => {
        if (state.searchKey != "") {
          return (
            (item.reviewHeading
              .toLowerCase()
              .includes(state.searchKey.toLowerCase()) ||
              (item.reviewText
                .toLowerCase()
                .includes(state.searchKey.toLowerCase()) &&
                (state.versionSelected != null
                  ? state.versionSelected == item.version
                  : true))) &&
            (state.countrySelected != null
              ? state.countrySelected + "" == item.countryName
              : true) &&
            (state.currentApp.name != "My App"
              ? state.currentApp.name == item.appID.split(".")[1]
              : true) &&
            rating + "" == item.rating
          );
        } else {
          return (
            (state.versionSelected != null
              ? state.versionSelected == item.version
              : true) &&
            (state.countrySelected != null
              ? state.countrySelected + "" == item.countryName
              : true) &&
            (state.currentApp.name != "My App"
              ? state.currentApp.name == item.appID.split(".")[1]
              : true) &&
            rating + "" == item.rating
          );
        }
      });

      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className="starts-container flex items-center cursor-pointer"
          onClick={handlClick}
        >
          {dummyArray.map((item) =>
            rating >= item ? (
              <IoStarSharp key={item} size={18} fill="gold" />
            ) : (
              <IoStarSharp key={item} size={18} fill="gray" />
            )
          )}
        </div>

        <div className="relative w-16 h-4 rounded">
          <span
            className="h-full bg-gray-200 block rounded"
            style={{
              width: `${getPercentWidth(itemsNumber, dummyData)}px`,
            }}
          ></span>
        </div>

        <div>
          <p className="font-light text-sm text-gray-400">{itemsNumber}</p>
        </div>
      </div>
    </>
  );
};

export default RatingHolder;
