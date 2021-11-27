const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navigation");
const icon = document.querySelector(".icon1");
const body = document.querySelector("body");
const header = document.querySelector("header");

toggle.addEventListener("click", function () {

  if (icon.classList == "icon1") {
    icon.classList.remove("icon1");
    menu.style.opacity = "1";
    menu.style.visibility = "visible";

    icon.classList.add("icon2");
  }
  else if (icon.classList == "icon2") {
    icon.classList.remove("icon2");
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
    icon.classList.add("icon1");
  }
});

