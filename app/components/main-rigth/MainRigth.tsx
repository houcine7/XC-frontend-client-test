import React from "react";
import MainRigthHeader from "./MainRigthHeader";

import ReviewCard from "../review-card/ReviewCard";
import { Pagination } from "../pagination/Pagination";
import CardsList from "./CardsList";

const MainRigth = () => {
  return (
    <section className="py-4 h-full pl-8 pr-4">
      <MainRigthHeader />
      <CardsList />
      <Pagination />
    </section>
  );
};

export default MainRigth;
