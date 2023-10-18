document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const menuContainer = document.querySelector('.menu-container');

  menuButton.addEventListener('click', function() {
    menuContainer.classList.toggle('active');
  });
});

//
