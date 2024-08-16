const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const darkModeText = document.getElementById('dark-mode-text');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('dark-mode');
  document.getElementById('navbar').classList.toggle('dark-mode');
  document.querySelectorAll('.navbar-nav li, .navbar-brand, .navbar-nav a').forEach((element) => {
    element.classList.toggle('dark-mode');
  });

  // Update the text content based on the current mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeText.textContent = 'Light Mode';
    darkModeCheckbox.checked = true;
  } else {
    darkModeText.textContent = 'Dark Mode';
    darkModeCheckbox.checked = false;
  }
});

darkModeCheckbox.addEventListener('change', () => {
  if (darkModeCheckbox.checked) {
    document.body.classList.add('dark-mode');
    darkModeToggle.classList.add('dark-mode');
    document.getElementById('navbar').classList.add('dark-mode');
    document.querySelectorAll('.navbar-nav li, .navbar-brand, .navbar-nav a').forEach((element) => {
      element.classList.add('dark-mode');
    });
    darkModeText.textContent = 'Light Mode';
  } else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.classList.remove('dark-mode');
    document.getElementById('navbar').classList.remove('dark-mode');
    document.querySelectorAll('.navbar-nav li, .navbar-brand, .navbar-nav a').forEach((element) => {
      element.classList.remove('dark-mode');
    });
    darkModeText.textContent = 'Dark Mode';
  }
});

