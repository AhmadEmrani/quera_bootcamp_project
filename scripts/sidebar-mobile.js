export function initializeSidebar() {
  const menuOpen = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("close-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  menuOpen.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  });

  menuClose.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });
}
