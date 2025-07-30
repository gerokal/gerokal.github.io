// Programación de Stereo 97.9 FM
// 0=Domingo, 1=Lunes, ..., 6=Sábado
const schedule = [
  // Lunes a Viernes
  { days: [1,2,3,4,5], start: "07:00", end: "08:00", show: "EL LOBO DEL AIRE", host: "Mario Rosado" },
  { days: [1,2,3,4,5], start: "08:00", end: "09:30", show: "MAÑANA ES MEJOR", host: "Marcelo Vera" },
  { days: [1,2,3,4,5], start: "10:00", end: "12:00", show: "EN VIVO Y EN PRIVADO", host: "Róger Romay" },
  { days: [1,2,3,4,5], start: "14:00", end: "16:00", show: "COMENZANDO LA TARDE", host: "Mario Rosado" },
  { days: [1,2,3,4,5], start: "16:00", end: "18:00", show: "PODER MEDIOS Y MIEDOS", host: "José Pomacusi" },
  { days: [1,2,3,4,5], start: "18:00", end: "20:00", show: "AFTER OFFICE", host: "María René Lievana" },
  // Sábado
  { days: [6], start: "07:00", end: "09:00", show: "CENTRINO", host: "Marcelo Valencia" },
  { days: [6], start: "09:00", end: "12:00", show: "CABINA 97", host: "Eduardo Martínez" },
  { days: [6], start: "12:00", end: "14:00", show: "CONTRA RELOJ", host: "Manolo DJ" },
  { days: [6], start: "14:00", end: "16:00", show: "RADIO SHOW", host: "Juan Carlos Quisbert" },
  { days: [6], start: "16:00", end: "18:00", show: "THE CLASSIC", host: "Edgar Mesa" },
  { days: [6], start: "19:00", end: "21:00", show: "ADICTIVA", host: "Marcelo La Fuente" },
  { days: [6], start: "21:00", end: "23:00", show: "SESIÓN MIX", host: "Herland Castaña" },
  // Domingo
  { days: [0], start: "06:00", end: "10:00", show: "PROGRAMACIÓN MUSICAL", host: "" },
  { days: [0], start: "10:00", end: "12:00", show: "ALCALDE CON LOS VECINOS", host: "" },
  { days: [0], start: "12:00", end: "14:00", show: "CONTRA RELOJ", host: "Manolo DJ" },
  { days: [0], start: "14:00", end: "23:59", show: "PROGRAMACIÓN MUSICAL", host: "" }
];
