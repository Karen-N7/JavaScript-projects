var nav_menu = document.querySelector(".nav-menu");
var lists = document.querySelectorAll(".nav-menu li");

document.querySelector(".burger").addEventListener("click", () => {
  nav_menu.classList.toggle("open");
  let count = 0.2;
  lists.forEach((list, index) => {
    count = nav_menu.classList.contains("open") ? count + 0.05 : count - 0.05;
    // console.log(count)
    list.style.transition = `0.5s ease ${
      nav_menu.classList.contains("open") ? index / 6 : index / -10
    }s`;
    console.log(index / -6);
    list.classList.toggle("effect");
  });
});
