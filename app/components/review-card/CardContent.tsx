import React from "react";

const CardContent = ({ reviewText }: { reviewText: string }) => {
  return (
    <div className="mt-6">
      <p className="text-sm font-normal text-gray-600">{reviewText}</p>
    </div>
  );
};

export default CardContent;
