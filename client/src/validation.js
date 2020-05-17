const Joi = require("@hapi/joi");

const transactionValidation = (data) => {
  const schema = Joi.object({
    Account_Name: Joi.string().min(6).required(),
    Account_Number: Joi.string().min(6).max(34).required(),
    Routing_Number: Joi.string().min(0).max(15),
    Amount: Joi.number().min(1).required(),
    Pin: Joi.string().min(4).max(4),
    Ref: Joi.string(),
  });

  //validate data before sending
  return schema.validate(data);
  // if (error) return res.status(400).send(error.details[0].message);
};
const balanceValidation = (data) => {
  const schema = Joi.object({
    Amount: Joi.number().min(1).max(1000000).required(),
  });

  //validate data before sending
  return schema.validate(data);
  // if (error) return res.status(400).send(error.details[0].message);
};

module.exports.transactionValidation = transactionValidation;
module.exports.balanceValidation = balanceValidation;
