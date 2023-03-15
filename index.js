function menuClick() {
  const Menu = document.getElementById("hamMenu");
  if (Menu.style.display === "none") {
    Menu.style.display = "flex";
  } else {
    Menu.style.display = "none";
  }
}
