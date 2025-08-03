// Hamburger menu toggle y scroll al top en todos los enlaces
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
    // Cerrar menú al pulsar un enlace
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
  // Scroll al top y recarga de sección en todos los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const hash = link.getAttribute('href');
      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash === hash) {
          // Forzar recarga manual del contenido si el hash no cambia
          if (typeof router !== 'undefined' && router.handleRouteChange) {
            router.handleRouteChange();
          }
        } else {
          window.location.hash = hash;
        }
      }
    });
  });

  // SPA router
  const routes = {
    home: { template: homeTemplate_es },
    about: { template: aboutTemplate_es },
    schedule: { template: scheduleTemplate_es },
    contact: { template: contactTemplate_es },
    privacy: { template: privacyTemplate_es },
  };
  const router = new Router(routes);
});
