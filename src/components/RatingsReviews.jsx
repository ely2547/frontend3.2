// RatingsReviews.jsx
import React from 'react';

const RatingsReviews = ({ reviews }) => {
  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="rating">
            <span className="font-semibold">Calificación: </span>
            {review.rating} / 5
          </div>
          <p className="comment">
            "{review.comment}" - {review.user}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RatingsReviews;
