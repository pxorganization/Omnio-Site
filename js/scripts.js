document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;

  let theme = localStorage.getItem('theme') || 'light';

  function setTheme(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      themeIcon.classList.remove('bi-brightness-high');
      themeIcon.classList.add('bi-moon-stars');
    } else {
      body.classList.remove('dark-mode');
      themeIcon.classList.remove('bi-moon-stars');
      themeIcon.classList.add('bi-brightness-high');
    }
    localStorage.setItem('theme', mode);
  }

  setTheme(theme);

  themeToggle.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    setTheme(theme);
  });

  const mainNav = document.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  }

  const navbarToggler = document.querySelector('.navbar-toggler');
  const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
  responsiveNavItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Error sending the message.");
      }
    });
  }
});