/* time controlller */
let DayInput = document.getElementById("days-input");
let HoursInput = document.getElementById("hours-input");
let MinsInput = document.getElementById("mins-input");
let SecInput = document.getElementById("sec-input");

const timeController = () => {
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

const cartIndicator = document.querySelector(".card-indicator");
const addToCartButtons = document.querySelectorAll(".main-box-desc-btn");

let cartCount = Number(localStorage.getItem("cartCount")) || 0;

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
  });
  if (cartCount >= 10) {
    cartIndicator.textContent = "10+";
  } else {
    cartIndicator.textContent = cartCount;
  }
});

const headerLikeBtn = document.querySelector(".like-btn");
const productLikeBtns = document.querySelectorAll(
  ".main-box .activebar-btn:first-child"
);

productLikeBtns.forEach((btn, index) => {
  if (likedProducts.includes(index)) {
    btn.classList.add("active-like");
  }

  btn.addEventListener("click", () => {
    btn.classList.toggle("active-like");

    if (btn.classList.contains("active-like")) {
      if (!likedProducts.includes(index)) {
        likedProducts.push(index);
      }
    } else {
      likedProducts = likedProducts.filter((i) => i !== index);
    }
  });
});

function updateHeaderLike() {
  if (likedProducts.length > 0) {
    headerLikeBtn.classList.add("active-like");
  } else {
    headerLikeBtn.classList.remove("active-like");
  }
}

updateHeaderLike();
