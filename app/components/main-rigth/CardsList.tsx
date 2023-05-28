"use client";

import React from "react";
import ReviewCard from "../review-card/ReviewCard";
import { useStateValue } from "@/app/context/contextProvider";
import Image from "next/image";

const CardsList = () => {
  const { state, dispatch } = useStateValue();

  return (
    <div className="overflow-y-scroll h-[67vh] flex flex-col gap-2 scroll-section">
      {state.currentData.length != 0 ? (
        state.currentData
          .slice(state.currentPage * 10, 10 * (state.currentPage + 1))
          .map((item) => {
            return (
              <ReviewCard
                key={item.id}
                appID={item.appID}
                appStoreName={item.appStoreName}
                countryName={item.countryName}
                rating={item.rating}
                reviewDate={item.reviewDate}
                reviewHeading={item.reviewHeading}
                reviewText={item.reviewText}
                reviewUserName={item.reviewUserName}
                version={item.version}
              />
            );
          })
      ) : (
        <div className="flex justify-center mt-8 items-center gap-4">
          <Image src={"/no-data.png"} width={300} height={400} alt="no data" />

          <p className="mt-8 font-bld text-lg ">
            No search result for this key word
          </p>
        </div>
      )}
    </div>
  );
};

export default CardsList;
