"use client";

import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { dummyData } from "@/app/data/data";
import { sortFiltersData } from "./sideBarFilter";

type propsType = {
  version: string;
};

const getNumberItems = (data: any, version: string): number => {
  let counter = 0;

  data.forEach((item: any) => {
    if (item.version === version) counter++;
  });

  return counter;
};

const VersionHolder = ({ version }: propsType) => {
  const { state, dispatch } = useStateValue();

  const handelClick = () => {
    const filtredData = state.currentData.filter(
      (item) => item.version === version
    );

    dispatch({
      type: actionType.SET_FILTERS_STATE,
      payload: { versionSelected: version },
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
                (state.countrySelected != null
                  ? state.countrySelected == item.countryName
                  : true))) &&
            (state.ratingSelected != null
              ? state.ratingSelected + "" == item.rating
              : true) &&
            (state.currentApp.name != "My App"
              ? state.currentApp.name == item.appID.split(".")[1]
              : true) &&
            version == item.version
          );
        } else {
          return (
            (state.countrySelected != null
              ? state.countrySelected == item.countryName
              : true) &&
            (state.ratingSelected != null
              ? state.ratingSelected + "" == item.rating
              : true) &&
            (state.currentApp.name != "My App"
              ? state.currentApp.name == item.appID.split(".")[1]
              : true) &&
            version == item.version
          );
        }
      });
      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: sortFiltersData(filtredData, state.sortingOrder),
      });
    }
  };

  const itemNumber = getNumberItems(state.currentData, version);
  return (
    <div className="flex justify-between items-center cursor-pointer">
      <p onClick={handelClick}>{version}</p>
      <p className="font-light text-sm text-gray-400">{itemNumber}</p>
    </div>
  );
};

export default VersionHolder;
