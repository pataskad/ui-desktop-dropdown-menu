/*
 How to use:
 Similar to how bootstrap and other libraries work, name your html elements
 with the correct classNames to ensure js code picks up correct tags
 -- see html file for sample of how this works
*/
const dropDownHover = (function navHover () {
  const options = document.querySelectorAll(".navbar-option-main");
  const dropDowns = document.querySelectorAll(".dropdown-menu");
  window.addEventListener("mouseover", function (e) {
    if (e.target.matches(".navbar-option-main")) {
      for (let i = 0; i < options.length; i++) {
        if (options[i] === e.target) {
          if (dropDowns[i].closest(".hidden")) {
            dropDowns[i].classList.remove("hidden");
          } else {
            dropDowns[i].classList.add("hidden");
          }
        }
      }
    }
  });
  window.addEventListener("mouseover", function (e) {
    if (e.target.matches("html") || e.target.matches("nav")) {
      for (let i = 0; i < options.length; i++) {
        dropDowns[i].classList.add("hidden");
      }
    }
  });
})();

module.exports.dropDownNav = function dropDownNav () {
  console.log("This is a test package, use at your own discretion");
  if (typeof document === "undefined") {
    return console.log("This is a server evaluation, DOM listeners will not run!");
  } else {
    console.log("This is a browser evaluation");
    dropDownHover();
  }
};
