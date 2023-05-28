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
      dispatch({
        type: actionType.SET_CURRENT_DATA,
        payload: dummyData.filter(
          (item) =>
            (item.reviewHeading
              .toLowerCase()
              .includes(state.searchKey.toLowerCase()) ||
              item.reviewText
                .toLowerCase()
                .includes(state.searchKey.toLowerCase())) &&
            version == item.version &&
            state.ratingSelected != null &&
            item.rating == "" + state.ratingSelected &&
            state.countrySelected != null &&
            state.countrySelected == item.countryName
        ),
      });
    }
  };

  const itemNumber = getNumberItems(dummyData, version);
  return (
    <div className="flex justify-between items-center cursor-pointer">
      <p onClick={handelClick}>{version}</p>
      <p className="font-light text-sm text-gray-400">{itemNumber}</p>
    </div>
  );
};

export default VersionHolder;
