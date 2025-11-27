/* time controlller */
let DayInput = document.getElementById("days-input");
let HoursInput = document.getElementById("hours-input");
let MinsInput = document.getElementById("mins-input");
let SecInput = document.getElementById("sec-input");

const timeController = function () {
  let defaultTime = new Date();

  /* day */
  defaultTime.getDate() < 10
    ? (DayInput.textContent = "0" + defaultTime.getDate())
    : (DayInput.textContent = defaultTime.getDate());

  /* hour */
  defaultTime.getHours() < 10
    ? (HoursInput.textContent = "0" + defaultTime.getHours())
    : (HoursInput.textContent = defaultTime.getHours());

  /* mins */
  defaultTime.getMinutes() < 10
    ? (MinsInput.textContent = "0" + defaultTime.getMinutes())
    : (MinsInput.textContent = defaultTime.getMinutes());

  /* secunds */
  defaultTime.getSeconds() < 10
    ? (SecInput.textContent = "0" + defaultTime.getSeconds())
    : (SecInput.textContent = defaultTime.getSeconds());
};

setInterval(() => {
  timeController();
}, 1000);
