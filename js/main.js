function toggleMenu() {
  const menu = document.getElementById('menu');

  if (menu) {
    menu.classList.toggle('opacity-100');
    menu.classList.toggle('top-[80px]');
  }
}