import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our? <span className="text-coral-red"> Customers </span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A natus,
        culpa, impedit voluptatum tempora sunt magnam nihil amet qui ea, placeat
      </p>
      <div className="mt-24 flex  justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
