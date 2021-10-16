import joi from "joi";
export const ValidateReview = (reviewId) => {
    const Schema = joi.object({
      _id: joi.string().required(),
    });
  
    return Schema.validateAsync(reviewId);
  };