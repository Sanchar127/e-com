// Import the necessary modules and components
"useclinet"; // Assuming this is a typo and should be "use strict";
import React from "react";
import Heading from "@/app/components/Heading";
import moment from "moment";
import { Rating } from "@mui/material";
import Avatar from "@/app/components/Avatar";

// Define the props interface
interface ListRatingProps {
  product: {
    reviews: Array<{
      id: string;
      username: string;
      comment: string;
      // Add more properties as needed
    }>;
  };
}

// Define the ListRating component
const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      {/* Display a heading for the product reviews */}
      <Heading title="Product Review" />

      {/* Display reviews if available */}
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review) => (
            <div key={review.id} className="max-w-[300px]">
              {/* Display review details */}
              <div className="flex gap-2 items-center">
                <Avatar src={review?.user.image} />
                <div className="font-semibold">{review?.username}</div>{" "}
                {/* Change user.name to username */}
                <div className="font-light">
                  {moment(review.createdDate).fromNow()}
                </div>
              </div>
              <div className="mt-2">
                <Rating value={review.rating} readOnly />
                <div className="ml-2">{review.comment}</div>
                <hr className="mt-4 mb-4" />
              </div>

              {/* Add more information as needed */}
            </div>
          ))}
      </div>
    </div>
  );
};

// Export the ListRating component
export default ListRating;
