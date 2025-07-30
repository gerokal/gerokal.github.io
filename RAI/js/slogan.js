// --- SLOGAN DINÁMICO ---
// Este script se ejecutará cada vez que se cargue la home
function iniciarSloganDinamico() {
  const slogans = [
    "¡La mejor música, siempre contigo!",
    "Somos tu compañía diaria.",
    "Vive la radio, vive Stereo 97.9.",
    "La Primera Estación Premium de Bolivia.",
    "Donde la música cobra vida.",
    "¡Siente la diferencia en el dial!"
  ];
  const sloganEl = document.getElementById('slogan-dinamico');
  if (!sloganEl) return;
  let lastIdx = -1;
  function cambiarSlogan() {
    let idx;
    do {
      idx = Math.floor(Math.random() * slogans.length);
    } while (idx === lastIdx);
    lastIdx = idx;
    sloganEl.classList.remove('fade-in');
    sloganEl.classList.add('fade-out');
    setTimeout(() => {
      sloganEl.textContent = slogans[idx];
      sloganEl.classList.remove('fade-out');
      sloganEl.classList.add('fade-in');
    }, 100);
  }
  cambiarSlogan();
  setInterval(cambiarSlogan, 8000);
}

// Hook para SPA: ejecuta el slogan dinámico solo en la home
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '' || window.location.hash === '#home') {
    setTimeout(iniciarSloganDinamico, 100); // Espera a que el DOM esté listo
  }
});
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#home') {
    setTimeout(iniciarSloganDinamico, 100);
  }
});
// --- FIN SLOGAN DINÁMICO ---
