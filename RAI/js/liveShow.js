// Mostrar el programa en vivo según la hora actual y la programación

function getCurrentShow(schedule) {
  const now = new Date();
  const day = now.getDay();
  const current = now.getHours() * 60 + now.getMinutes();
  for (const prog of schedule) {
    if (!prog.days.includes(day)) continue;
    const [startH, startM] = prog.start.split(':').map(Number);
    const [endH, endM] = prog.end.split(':').map(Number);
    const startMin = startH * 60 + startM;
    const endMin = endH * 60 + endM;
    if (current >= startMin && current < endMin) return prog;
  }
  return null;
}

function getPrevShow(schedule) {
  const now = new Date();
  const day = now.getDay();
  const current = now.getHours() * 60 + now.getMinutes();
  let prev = null;
  let minDiff = Infinity;
  for (const prog of schedule) {
    if (!prog.days.includes(day)) continue;
    const [endH, endM] = prog.end.split(':').map(Number);
    const endMin = endH * 60 + endM;
    if (endMin <= current && (current - endMin) < minDiff) {
      minDiff = current - endMin;
      prev = prog;
    }
  }
  // Si no hay anterior hoy, busca el último de ayer
  if (!prev) {
    let yesterday = (day + 6) % 7;
    let lastYesterday = null;
    let maxEnd = -1;
    for (const prog of schedule) {
      if (!prog.days.includes(yesterday)) continue;
      const [endH, endM] = prog.end.split(':').map(Number);
      const endMin = endH * 60 + endM;
      if (endMin > maxEnd) {
        maxEnd = endMin;
        lastYesterday = prog;
      }
    }
    prev = lastYesterday;
  }
  return prev;
}

function getNextShow(schedule) {
  const now = new Date();
  const day = now.getDay();
  const current = now.getHours() * 60 + now.getMinutes();
  // Buscar el siguiente programa de hoy
  let next = null;
  let minDiff = Infinity;
  for (const prog of schedule) {
    if (!prog.days.includes(day)) continue;
    const [startH, startM] = prog.start.split(':').map(Number);
    const startMin = startH * 60 + startM;
    if (startMin > current && (startMin - current) < minDiff) {
      minDiff = startMin - current;
      next = prog;
    }
  }
  // Si no hay más programas hoy, buscar el primero de mañana
  if (!next) {
    let tomorrow = (day + 1) % 7;
    let firstTomorrow = null;
    let minStart = Infinity;
    for (const prog of schedule) {
      if (!prog.days.includes(tomorrow)) continue;
      const [startH, startM] = prog.start.split(':').map(Number);
      const startMin = startH * 60 + startM;
      if (startMin < minStart) {
        minStart = startMin;
        firstTomorrow = prog;
      }
    }
    next = firstTomorrow;
  }
  return next;
}

function renderLiveShow() {
  if (typeof schedule === 'undefined') return;
  const prev = getPrevShow(schedule);
  const show = getCurrentShow(schedule);
  const next = getNextShow(schedule);
  const el = document.getElementById('live-show');
  if (!el) return;
  let html = '<div class="live-show-vertical">';
  // 1. Programa anterior
  html += '<div class="live-show-prev">';
  if (prev) {
    html += `<p class="label">Programa Anterior:</p><p class="show-title">${prev.show}</p><p class="host">${prev.host ? '(' + prev.host + ')' : ''}</p><p class="show-time">${prev.start} - ${prev.end}</p>`;
  } else {
    html += '<p>Sin registro anterior.</p>';
  }
  html += '</div>';
  // 2. Programa en vivo (destacado)
  if (show) {
    html += '<div class="live-show-current">';
    html += `<p class="label">En vivo:</p><p class="show-title">${show.show}</p><p class="host">${show.host ? '(' + show.host + ')' : ''}</p><p class="show-time">${show.start} - ${show.end}</p>`;
    html += '</div>';
  } else {
    html += '<div class="live-show-current live-show-music" style="text-align:center;">';
    html += '<p class="label">Ahora:</p><p class="host">No hay programa en vivo en este momento.</p><p>¡Disfruta de la mejor música!</p>';
    html += '</div>';
  }
  // 3. Próximo programa y enlace
  html += '<div class="live-show-next">';
  if (next) {
    html += `<p class="label">Próximo programa:</p><p class="show-title">${next.show}</p><p class="host">${next.host ? '(' + next.host + ')' : ''}</p><p class="next-time">a las ${next.start}</p>`;
  }
  html += `<p><a href="#schedule" class="ver-programacion">Ver programación completa</a></p>`;
  html += '</div>';
  html += '</div>';
  el.innerHTML = html;
}

// SPA hooks
window.addEventListener('hashchange', () => {
  if (window.location.hash === '' || window.location.hash === '#home') setTimeout(renderLiveShow, 100);
});
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '' || window.location.hash === '#home') setTimeout(renderLiveShow, 100);
});
// Refresca cada minuto si está en home
setInterval(() => {
  if (window.location.hash === '' || window.location.hash === '#home') renderLiveShow();
}, 60000);
