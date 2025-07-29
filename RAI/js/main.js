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
