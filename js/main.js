const modalApp = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const contactLink = document.getElementById("contact");


// ---------------- toggle Menu -----------------------------------

function toggleMenu() {
  const menu = document.getElementById('menu');

  if (menu) {
    menu.classList.toggle('opacity-100');
    menu.classList.toggle('top-[80px]');
  }
}

// ---------------- Modal open -----------------------------------

function openModal(event) {
  event.preventDefault();

  if(modalApp) {
    modalApp.classList.remove("hidden");
    modalApp.classList.add("flex");

    // Add event listener Esc
    document.addEventListener("keydown", closeModalOnEsc);
  }
}

function closeModal() {
  if (modalApp) {
    modalApp.classList.remove("flex");
    modalApp.classList.add("hidden");

    // Remove event listener Esc
    document.removeEventListener("keydown", closeModalOnEsc);
  }
}

function closeModalOnEsc(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// ---------------- Modal close -----------------------------------

function closeModal() {
  if (modalApp) {
    modalApp.classList.remove("flex");
    modalApp.classList.add("hidden");
  }
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

// ---------------- Click -----------------------------------

if (contactLink) {
  contactLink.addEventListener("click", openModal);
}



function whatsAppOpen() {
  var number = '+5511994680346';

  window.open ('https://api.whatsapp.com/send/?phone=%2B5511994680346&text&type=phone_number&app_absent=0', '_blank');
}

function instaAppOpen() {
  window.open ('https://www.instagram.com/bussiness_digital_nr?igsh=MWhmdGg5MXZtYWdldQ%3D%3D', '_blank');
}


