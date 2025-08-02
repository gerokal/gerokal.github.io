// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('main-menu');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const routes = {
    home: { template: homeTemplate_es },
    about: { template: aboutTemplate_es },
    schedule: { template: scheduleTemplate_es },
    contact: { template: contactTemplate_es },
    privacy: { template: privacyTemplate_es },
  };

  const router = new Router(routes);
});
