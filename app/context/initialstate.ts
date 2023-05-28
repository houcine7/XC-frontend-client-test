import { dummyData } from "../data/data";
import { StateType } from "./contextProvider";

export const initialState: StateType = {
  currentData: dummyData,
  currentPage: 0,
  sortingOrder: "newestOrder",
  searchKey: "",
  ratingSelected: null,
  versionSelected: null,
  countrySelected: null,
  dateRange: {
    endingDate: null,
    strtingDate: null,
  },

  currentApp: {
    name: "My App",
    color: "violet",
    value: "dummy",
  },
};
