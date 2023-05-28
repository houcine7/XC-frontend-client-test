import { ActionType, StateType } from "./contextProvider";

export const actionType = {
  SET_CURRENT_DATA: "SET_CURRENT_DATA",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SET_CURRENT_SORTING_ORDER: "SET_CURRENT_SORTING_ORDER",
};

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case actionType.SET_CURRENT_DATA:
      return { ...state, currentData: action.payload };
    case actionType.SET_CURRENT_SORTING_ORDER:
      return { ...state, sortingOrder: action.payload };
    case actionType.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
