// // carousel

// let backgroundValue = 0;

// leftIncrement = () => {
//   backgroundValue -= 1;
//   console.log(backgroundValue);
// };

// leftIncrementBG = () => {
//   if (backgroundValue % 2 === 0) {
//     document.getElementById("sectionOne").style.backgroundImage =
//       'url("img/bassCollection.jpeg")';
//     console.log("background changes to bass");
//   } else {
//     document.getElementById("sectionOne").style.backgroundImage =
//       "url(img/newCollection.png)";
//     console.log("background changed to collection");
//   }
// };

// leftClick = () => {
//   leftIncrement();
//   leftIncrementBG();
// };

// rightClick = () => {
//   rightIncrement();
//   rightIncrementBG();
// };

// rightIncrementBG = () => {
//   if (backgroundValue % 2 === 0) {
//     document.getElementById("sectionOne").style.backgroundImage =
//       'url("img/bassCollection.jpeg")';
//     console.log("background changes to bass");
//   } else {
//     document.getElementById("sectionOne").style.backgroundImage =
//       "url(img/newCollection.png)";
//     console.log("background changed to collection");
//   }
// };

// rightIncrement = () => {
//   backgroundValue += 1;
//   console.log(backgroundValue);
// };

// document
//   .getElementById("leftSlideControl")
//   .addEventListener("click", leftClick);

// document
//   .getElementById("rightSlideControl")
//   .addEventListener("click", rightClick);

// burger
let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let nav = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
  burger.style.display = "none";
  xmark.style.display = "block";
  nav.classList.add("show");
});

xmark.addEventListener("click", () => {
  burger.style.display = "block";
  xmark.style.display = "none";
  nav.classList.remove("show");
});
