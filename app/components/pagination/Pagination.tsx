"use client";

import Link from "next/link";
import { GrNext, GrPrevious } from "react-icons/gr";

import { useStateValue } from "@/app/context/contextProvider";
import { actionType } from "@/app/context/reducer";
import { useState } from "react";

export const Pagination = () => {
  const { state, dispatch } = useStateValue();

  const [displayedPages, setDisplaydPages] = useState(10);

  const pagesNumber =
    state.currentData.length % 10 == 0
      ? state.currentData.length / 10
      : (state.currentData.length / 10 + 1) | 0;

  const pagesHolder = state.currentData.slice(
    displayedPages - 10,
    displayedPages
  );

  console.log(pagesNumber + "-------", displayedPages);

  //
  const handelClick = (index: number) => {
    dispatch({
      type: actionType.SET_CURRENT_PAGE,
      payload: index,
    });
  };

  //
  const handelNext = (): void => {
    if (pagesNumber - displayedPages > 10) {
      setDisplaydPages((prevState) => prevState + 10);
    } else if (
      0 < pagesNumber - displayedPages &&
      pagesNumber - displayedPages < 10
    ) {
      setDisplaydPages((prevState) => prevState + pagesNumber - displayedPages);
    }
  };
  const handelPreviuos = (): void => {
    if (displayedPages - 10 > 10) {
      setDisplaydPages((prevState) => prevState - 10);
    } else if (displayedPages - 10 > 0) {
      setDisplaydPages((prevState) => prevState - (displayedPages - 10));
    }
  };

  //
  return (
    <div className="flex justify-center gap-2 pt-2 items-center">
      <GrPrevious
        size={25}
        className="bg-violet-100 cursor-pointer rounded-full py-1"
        onClick={handelPreviuos}
      />

      {pagesHolder.map((item, index) => {
        return (
          <Link
            key={item.id}
            href={"#"}
            className={
              "border  rounded px-3 py-1 transition duration-500 font-bold text-sm hover:bg-violet-500  " +
              (state.currentPage === displayedPages - 10 + index &&
                "bg-violet-500")
            }
            onClick={() => handelClick(displayedPages - 10 + index)}
          >
            {displayedPages - 10 + index + 1}
          </Link>
        );
      })}

      <GrNext
        size={25}
        className="bg-violet-100 cursor-pointer rounded-full py-1"
        onClick={handelNext}
      />
    </div>
  );
};
