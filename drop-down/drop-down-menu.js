document.addEventListener("DOMContentLoaded", () => {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const dropdownButton = document.querySelector(".dropdown-button");

  dropdownButton.addEventListener("click", () => {
    dropdownMenu.style.display === "block"
      ? (dropdownMenu.style.display = "none")
      : (dropdownMenu.style.display = "block");
  });

  window.addEventListener("click", (e) => {
    if (
      !dropdownButton.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
