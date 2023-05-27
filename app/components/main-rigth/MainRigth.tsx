import React from "react";
import MainRigthHeader from "./MainRigthHeader";

import ReviewCard from "../review-card/ReviewCard";

const MainRigth = () => {
  return (
    <section className="py-4 h-full pl-8 pr-4">
      <MainRigthHeader />

      <div className="overflow-y-scroll h-[72vh] flex flex-col gap-2 scroll-section">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default MainRigth;
