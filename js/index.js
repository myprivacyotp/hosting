// Created without any web framework
let menuBtn = document.querySelector(".menu-btn");
let menuItems = document.querySelector(".menu-items");
let menuTimeout = [];

function toggleMenu(menuBtn) {
  let [oepnText, closeText] = ["widgets", "close"];

  if (menuItems.getAttribute("open")) {
    // toggled

    menuBtn.innerHTML = oepnText;
    menuItems.removeAttribute("open");

    menuTimeout.push(
      setTimeout(() => {
        canToggle = true;
        menuItems.classList.add("dn");
      }, 600)
    );
  } else {
    // not yet
    menuTimeout.map(clearTimeout);
    menuBtn.innerHTML = closeText;
    menuItems.setAttribute("open", true);
    menuItems.classList.remove("dn");
  }
}
document.addEventListener("click", (event) => {
  if (event.target === menuBtn) {
    toggleMenu(menuBtn);
  } else {
    if (menuItems.getAttribute("open") && event.target != menuItems) {
      toggleMenu(menuBtn);
    }
  }
});

