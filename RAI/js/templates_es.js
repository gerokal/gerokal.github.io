const homeTemplate_es = `
    <section class="hero">
        <div class="hero-content">
            <h1>Stereo 97.9 FM</h1>
            <p>¡La Primera Estacion Premium de Bolivia!</p>
            <!-- <a href="#" class="btn-listen-live">Escuchar en Vivo</a> -->
        </div>
    </section>
    <section class="current-show">
        <h2>Ahora Sonando: El Viaje Matutino con DJ Groove</h2>
        <p>¡Sintoniza los temas más candentes y tu dosis diaria de energía!</p>
        <img src="images/radio.jpg" alt="DJ Groove" class="show-image">
        <p>Siguiente: La Mezcla del Mediodía a las 12:00 PM</p>
    </section>
    <section class="featured-content">
        <h2>Contenido Destacado</h2>
        <div class="content-grid">
            <div class="content-item">
                <h3>Los 10 Éxitos de la Semana</h3>
                <p>Descubre las canciones más populares actualmente en el aire.</p>
                <a href="#">Leer Más</a>
            </div>
            <div class="content-item">
                <h3>Artista Destacado: [Nombre del Artista]</h3>
                <p>Conoce más sobre tus artistas favoritos y sus últimos lanzamientos.</p>
                <a href="#">Leer Más</a>
            </div>
            <div class="content-item">
                <h3>Eventos Comunitarios</h3>
                <p>Consulta los eventos locales patrocinados por Stereo 97.9.</p>
                <a href="#">Ver Eventos</a>
            </div>
        </div>
    </section>
    <section class="call-to-action">
        <h2>¡Únete a Nuestra Comunidad!</h2>
        <p>Síguenos en las redes sociales y no te pierdas ninguna actualización.</p>
        <a href="#" class="btn-social">Facebook</a>
        <a href="#" class="btn-social">Twitter</a>
        <a href="#" class="btn-social">Instagram</a>
    </section>
`;

const aboutTemplate_es = `
    <section class="about-us-content">
        <h1>Acerca de Stereo 97.9</h1>
        <p>¡Bienvenido a Stereo 97.9, tu destino definitivo para música y entretenimiento sin parar! Desde nuestra creación en [Año], nos hemos dedicado a ofrecerte lo mejor en [Género 1], [Género 2] y [Género 3], junto con programas de entrevistas interesantes y actualizaciones de la comunidad. Nuestra misión es conectar con nuestros oyentes a través del poder del sonido, fomentando una comunidad vibrante y proporcionando una plataforma para diversas voces.</p>

        <h2>Nuestro Equipo</h2>
        <div class="team-grid">
            <div class="team-member">
                <img src="images/placeholder-dj1.jpg" alt="Nombre del DJ 1">
                <h3>DJ Groove</h3>
                <p>Locutor del Programa Matutino</p>
                <p>DJ Groove inicia tu día con gran energía y los temas más populares. ¡Un veterano en la escena radiofónica, sabe cómo hacerte vibrar!</p>
            </div>
            <div class="team-member">
                <img src="images/placeholder-dj2.jpg" alt="Nombre del DJ 2">
                <h3>Maria Sound</h3>
                <p>Locutora de la Mezcla del Mediodía</p>
                <p>María te trae una suave mezcla de clásicos y nuevos lanzamientos, perfecta para tu descanso del mediodía. Su voz relajante y su gusto ecléctico son los favoritos de los oyentes.</p>
            </div>
            <div class="team-member">
                <img src="images/placeholder-dj3.jpg" alt="Nombre del DJ 3">
                <h3>El Búho Nocturno</h3>
                <p>Locutor de Charlas Nocturnas</p>
                <p>Para aquellos que trasnochan, El Búho Nocturno ofrece debates perspicaces y una cuidada selección de melodías ambientales.</p>
            </div>
        </div>

        <h2>Nuestros Valores y Comunidad</h2>
        <p>En Stereo 97.9, creemos en el poder de la radio local para unir y elevar. Estamos comprometidos con [mencionar participación comunitaria específica, por ejemplo, apoyar a artistas locales, eventos benéficos, cobertura de noticias locales]. Nuestra estación es más que solo música; es un centro para el compromiso comunitario y una voz para nuestros oyentes.</p>

        <h2>Contáctanos</h2>
        <p>¿Tienes alguna pregunta o solicitud de canción? ¡Nos encantaría saber de ti!</p>
        <p>Correo electrónico: info@stereo979.com</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Dirección: [Tu Dirección de Estación Aquí]</p>
    </section>
`;

const scheduleTemplate_es = `
    <section class="schedule-content">
        <h1>Nuestro Horario Semanal de Programación</h1>
        <p class="timezone-info">Todos los horarios están en [Tu Zona Horaria, por ejemplo, EST/PST/GMT].</p>

        <div class="schedule-grid">
            <h2>Lunes - Viernes</h2>
            <div class="day-schedule">
                <div class="show-time">6:00 AM - 9:00 AM</div>
                <div class="show-details">
                    <h3>El Viaje Matutino con DJ Groove</h3>
                    <p>Comienza tu día con mucha energía, los últimos éxitos y debates interesantes.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">9:00 AM - 12:00 PM</div>
                <div class="show-details">
                    <h3>Mezcla del Mediodía con Maria Sound</h3>
                    <p>Una suave mezcla de canciones clásicas y contemporáneas para ayudarte a pasar el día de trabajo.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">12:00 PM - 3:00 PM</div>
                <div class="show-details">
                    <h3>Música para el Almuerzo</h3>
                    <p>La banda sonora perfecta para tu almuerzo, con peticiones de los oyentes y bloques temáticos.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">3:00 PM - 6:00 PM</div>
                <div class="show-details">
                    <h3>Viaje Vespertino con [Nombre del DJ]</h3>
                    <p>Evita el tráfico con canciones animadas y segmentos divertidos.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">6:00 PM - 9:00 PM</div>
                <div class="show-details">
                    <h3>Relajación Nocturna</h3>
                    <p>Relájate con una selección de melodías relajantes y conmovedoras.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">9:00 PM - 12:00 AM</div>
                <div class="show-details">
                    <h3>El Búho Nocturno</h3>
                    <p>Inmersiones profundas en varios temas y una cuidada selección de sonidos ambientales e independientes.</p>
                </div>
            </div>
        </div>

        <div class="schedule-grid">
            <h2>Fines de Semana</h2>
            <div class="day-schedule">
                <div class="show-time">8:00 AM - 11:00 AM</div>
                <div class="show-details">
                    <h3>Despertar de Fin de Semana</h3>
                    <p>La banda sonora perfecta para tus mañanas de sábado y domingo.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">11:00 AM - 2:00 PM</div>
                <div class="show-details">
                    <h3>Foco Comunitario</h3>
                    <p>Entrevistas con personalidades locales y lo más destacado de los eventos comunitarios.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">2:00 PM - 6:00 PM</div>
                <div class="show-details">
                    <h3>Muestra de [Género]</h3>
                    <p>Bloques dedicados a géneros musicales específicos, desde rock hasta jazz, hip-hop y clásica.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">6:00 PM - 10:00 PM</div>
                <div class="show-details">
                    <h3>Elección del Oyente</h3>
                    <p>¡Tus peticiones toman las ondas! Llama o envía tu solicitud en línea.</p>
                </div>
            </div>
        </div>
    </section>
`;
