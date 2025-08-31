// elementi DOM
const sidebar = document.getElementById("sidebar");
const btnSidebar = document.getElementById("sidebar-toggle");
const sideIcon = document.getElementById("side-icon");
const sidebarContainer = document.getElementById("sidebar-container");

btnSidebar.addEventListener("click", () => {
  if (sidebar.classList.contains("d-none")) {
    sidebar.classList.remove("d-none");
    sideIcon.className = "bi bi-layout-sidebar-inset fs-1 text-white";
    sidebarContainer.classList.add("bg-secondary");
    sidebarContainer.classList.add("px-5");
    sidebarContainer.classList.add("text-white");
  } else {
    sidebar.classList.add("d-none");
    sideIcon.className = "bi bi-layout-sidebar-inset-reverse fs-1";
    sidebarContainer.classList.remove("bg-secondary");
    sidebarContainer.classList.remove("px-5");
    sidebarContainer.classList.remove("text-white");
  }
});
