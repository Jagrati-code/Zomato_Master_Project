import joi from "joi";

export const ValidateMenuId = (menuObj) => {
    const Schema = joi.object({
      _id: joi.string().required(),
    });
  
    return Schema.validateAsync(menuObj);
  };