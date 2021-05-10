var burger = document.querySelector(".burger");
var menu = document.querySelector("ul");
var menuLists = document.querySelectorAll("ul li");

burger.addEventListener("click", () => {
  menu.classList.toggle("width");
  burger.classList.toggle("times");
  menuLists.forEach((menuList, index) => {
    menuList.style.animation = menuList.style.animation
      ? ""
      : `navLinkFade 0.5s ease forwards ${index / 7}s `;
  });
});
