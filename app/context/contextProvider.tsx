"use client";

import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialstate";

export type StateType = {
  currentData: any[];
  currentPage: number;
  sortingOrder: string;
  searchKey: string;
  ratingSelected: number | null;
  versionSelected: string | null;
  countrySelected: string | null;
};

export type ActionType = {
  type: string;
  payload: any;
};

export const ReviewsContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReviewsContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useStateValue = () => useContext(ReviewsContext);
