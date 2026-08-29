document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  menu?.addEventListener("click", () => {
    const open = links.dataset.open === "1";
    links.dataset.open = open ? "0" : "1";
    links.style.display = open ? "" : "flex";
    links.style.position = open ? "" : "absolute";
    links.style.top = "76px";
    links.style.left = "0";
    links.style.right = "0";
    links.style.padding = open ? "" : "18px";
    links.style.background = open ? "" : "#030b1c";
    links.style.flexDirection = "column";
  });
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      links.dataset.open = "0";
      links.style.display = "";
    }
  }));
});
