/* time controlller */
let DayInput = document.getElementById("days-input");
let HoursInput = document.getElementById("hours-input");
let MinsInput = document.getElementById("mins-input");
let SecInput = document.getElementById("sec-input");

const timeController = function () {
  let defaultTime = new Date();

  DayInput.textContent = defaultTime.getDate();
  HoursInput.textContent = defaultTime.getHours();
  MinsInput.textContent = defaultTime.getMinutes();
  SecInput.textContent = defaultTime.getSeconds();
};

setInterval(() => {
  timeController();
}, 1000);
