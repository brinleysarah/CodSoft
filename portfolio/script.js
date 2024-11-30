let themeToggle = document.getElementById("themeToggle");
let body = document.body;

themeToggle.addEventListener("click", function () {
  if (body.getAttribute("data-theme") === "purple") {
    body.removeAttribute("data-theme");
    themeToggle.textContent = "Switch to Purple Theme";
  } else {
    body.setAttribute("data-theme", "purple");
    themeToggle.textContent = "Switch to Pink Theme";
  }
});
