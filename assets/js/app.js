// Cart
const cartIcon = document.querySelector("li.cart_icon");
const cartBox = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
  cartBox.classList.add("active");

  const closeCart = document.querySelector(".back_btn");
  closeCart.addEventListener("click", () => {
    cartBox.classList.remove("active");
  });
});

// Menu

const closeMenu = document.querySelector(".close_btn");
const nav = document.querySelector(".nav");
const burgerIcon = document.querySelector(".burger");
burgerIcon.addEventListener("click", () => {
  nav.classList.add("active");
});

const dropdowns = document.querySelectorAll(".dropdown");

// const removeActiveMenu = () => {
//   return dropdowns.forEach((item) => {
//     item.classList.remove("active");
//   });
// };
dropdowns.forEach((item) => {
  item.addEventListener("click", () => {
    // removeActiveMenu();
    item.classList.toggle("active");
  });
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
});

$(".single-item").slick({
  arrows: false,
  dots: true,
});

let calcScrollValue = () => {
  let scrollProgess = document.getElementById("backtotop");
  let progressValue = document.querySelector(".progress_value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgess.style.display = "grid";
  } else {
    scrollProgess.style.display = "none";
  }

  scrollProgess.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgess.style.background = `conic-gradient(#ff5733 ${scrollValue}%,#d7d7d7 ${scrollValue}%)`;
};
window.onscroll = () => {
  calcScrollValue();
  scrollFunction();
};
window.onload = calcScrollValue;

// Countdown Time
var target_date = new Date().getTime() + 1000 * 3600 * 96; // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

// getCountdown();
function getCountdown() {
  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // format countdown string + set tag value
  countdown.innerHTML = `<span>  ${days}  </span><span>  ${hours}  </span><span>  ${minutes}  </span><span>  ${seconds}  </span>`;
}

setInterval(function () {
  getCountdown();
}, 1000);

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}
// Search Box
const searchIcon = document.querySelector(".search_icon");

searchIcon.addEventListener("click", () => {
  const searchArea = document.querySelector(".search_box");
  const closeSearch = document.querySelector(".close_search");

  searchArea.classList.add("active");

  closeSearch.addEventListener("click", () => {
    searchArea.classList.remove("active");
  });
});

// Filter Page

const filterBtn = document.querySelector(".filter");
filterBtn.addEventListener("click", () => {
  const filterBox = document.querySelector(".filter_box");
  filterBox.classList.toggle("active");
});