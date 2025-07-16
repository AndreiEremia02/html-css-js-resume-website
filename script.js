function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const projectImages = document.querySelectorAll(".project-img");
const popupOverlay = document.getElementById("image-popup");
const popupImage = document.getElementById("popup-image");

projectImages.forEach((img) => {
  img.addEventListener("click", () => {
    popupImage.src = img.src;
    popupOverlay.classList.add("active");
  });
});

function closePopup(event) {
  if (
    event.target === popupOverlay || 
    event.target.classList.contains("close-popup")
  ) {
    popupOverlay.classList.remove("active");
  }
}

const inactiveButtons = document.querySelectorAll(".project-btn.disabled");
inactiveButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
