var menu = document.getElementById("menu-icon");
var everything = document.getElementById("everything");
var mobile = document.getElementById("mobile-nav");

menu.onclick = function(e) {
  if (menu.classList.contains("active")) {
    everything.style.visibility = "visible";
    mobile.style.visibility = "hidden";
    menu.classList.remove("active");
  } else {
    everything.style.visibility = "hidden";
    mobile.style.visibility = "visible";
    menu.classList.add("active");
  }
}
