let addDays = require("date-fns/addDays");

const date = (days) => {
  const result = addDays(new Date(22, 7, 2020), days);
  return result;
};

module.exports = date;
