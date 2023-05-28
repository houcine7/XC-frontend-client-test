import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import ReviewCardHeader from "./ReviewCardHeader";

type cardProps = {
  appID: string;
  appStoreName: string;
  reviewDate: string;
  rating: number;
  version: string;
  countryName: string;
  reviewHeading: string;
  reviewText: string;
  reviewUserName: "U5";
};

const ReviewCard = ({
  rating,
  reviewHeading,
  reviewText,
  countryName,
  reviewUserName,
  version,
  appStoreName,
  reviewDate,
}: cardProps) => {
  return (
    <div className="card w-full rounded-md shadow-md p-4">
      <ReviewCardHeader
        rating={rating}
        reviewHeading={reviewHeading}
        appStoreName={appStoreName}
      />
      <CardContent reviewText={reviewText} />
      <CardFooter
        countryName={countryName}
        reviewUserName={reviewUserName}
        version={version}
        date={reviewDate}
      />
    </div>
  );
};

export default ReviewCard;
