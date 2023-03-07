// FAQs Part
// ****************
const faqs = document.querySelectorAll(".faq");

faqs.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("active");
  })
);

// TAB SECTION
// ******************
const tabs = document.querySelectorAll(".operation-tab");
const tabContainer = document.querySelector(".operation-tab-container");
const tabContent = document.querySelectorAll(".operation-content");

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operation-tab");

  // console.log(clicked);

  if (!clicked) return;

  // Remove Active content from all
  tabs.forEach(function (tab) {
    tab.classList.remove("operation-tab-active");
  });
  tabContent.forEach((e) => e.classList.remove("operation-content--active"));

  // Active Content area
  clicked.classList.add("operation-tab-active");
  document
    .querySelector(`.operation-content--${clicked.dataset.tab}`)
    .classList.add("operation-content--active");
});

// ////////////////////////
// Mobile Navigation
////////////////////////////
const headerEl = document.querySelector(".header");

const menuBtn = document.querySelector(".btn-mobile-nav");

const body = document.querySelector("body");

menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  headerEl.classList.toggle("nav-open");
});

//SUBMIT
const submit = document.querySelector(".submit");

const email = document.querySelector(".email").value;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(document.form.email);
});

function validateEmail(inputText) {
  const emailBox = document.querySelector(".email-box");
  var mailFormat = /\S+@\S+\.\S+/;
  if (inputText.value.match(mailFormat)) {
    emailBox.classList.remove("error");
  } else {
    emailBox.classList.add("error");
  }
}
