import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import ReviewCardHeader from "./ReviewCardHeader";

const ReviewCard = () => {
  return (
    <div className="card w-full rounded-md shadow-md p-4">
      <ReviewCardHeader />
      <CardContent />
      <CardFooter />
    </div>
  );
};

export default ReviewCard;
