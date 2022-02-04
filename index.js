//  ham btn
const hamBtn = document.getElementById("nav-menu");

// nav menu
const navMobile = document.getElementById("nav-mobile");

hamBtn.addEventListener("click", function () {
  navMobile.classList.toggle("hidden");
});
