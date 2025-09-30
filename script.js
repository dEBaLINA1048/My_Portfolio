// Select the toggle button and the icon
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle('light-mode'); // add/remove light mode class

  // Change the icon accordingly
  if (document.body.classList.contains('light-mode')) {
    themeIcon.textContent = '🌙'; // moon icon for dark mode
  } else {
    themeIcon.textContent = '🌞'; // sun icon for light mode
  }
}

// Event listener for click
themeToggle.addEventListener('click', toggleTheme);

// Optional: remember user preference using localStorage
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  themeIcon.textContent = '🌙';
}

// Update localStorage on toggle
themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});
