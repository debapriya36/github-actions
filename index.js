var dayjs = require("dayjs");

var random_date = dayjs("2024-01-01")
  .add(Math.floor(Math.random() * 365), "day")
  .add(Math.floor(Math.random() * 24), "hour")
  .add(Math.floor(Math.random() * 60), "minute")
  .add(Math.floor(Math.random() * 60), "second");

console.log({ random_date  : random_date.format("YYYY-MM-DD") });
