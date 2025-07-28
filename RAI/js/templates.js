const homeTemplate = `
    <section class="hero">
        <div class="hero-content">
            <h1>Stereo 97.9</h1>
            <p>Your ultimate destination for non-stop music and entertainment!</p>
            <a href="#" class="btn-listen-live">Listen Live</a>
        </div>
    </section>
    <section class="current-show">
        <h2>Now Playing: The Morning Drive with DJ Groove</h2>
        <p>Tune in for the hottest tracks and your daily dose of energy!</p>
        <img src="images/radio.jpg" alt="DJ Groove" class="show-image">
        <p>Next Up: The Midday Mix at 12:00 PM</p>
    </section>
    <section class="featured-content">
        <h2>Featured Content</h2>
        <div class="content-grid">
            <div class="content-item">
                <h3>Top 10 Hits of the Week</h3>
                <p>Discover the most popular songs currently on air.</p>
                <a href="#">Read More</a>
            </div>
            <div class="content-item">
                <h3>Artist Spotlight: [Artist Name]</h3>
                <p>Learn more about your favorite artists and their latest releases.</p>
                <a href="#">Read More</a>
            </div>
            <div class="content-item">
                <h3>Community Events</h3>
                <p>Check out local events sponsored by Stereo 97.9.</p>
                <a href="#">View Events</a>
            </div>
        </div>
    </section>
    <section class="call-to-action">
        <h2>Join Our Community!</h2>
        <p>Follow us on social media and never miss an update.</p>
        <a href="#" class="btn-social">Facebook</a>
        <a href="#" class="btn-social">Twitter</a>
        <a href="#" class="btn-social">Instagram</a>
    </section>
`;

const aboutTemplate = `
    <section class="about-us-content">
        <h1>About Stereo 97.9</h1>
        <p>Welcome to Stereo 97.9, your ultimate destination for non-stop music and entertainment! Since our inception in [Year], we've been dedicated to bringing you the best in [Genre 1], [Genre 2], and [Genre 3], along with engaging talk shows and community updates. Our mission is to connect with our listeners through the power of sound, fostering a vibrant community and providing a platform for diverse voices.</p>

        <h2>Our Team</h2>
        <div class="team-grid">
            <div class="team-member">
                <img src="images/placeholder-dj1.jpg" alt="DJ Name 1">
                <h3>DJ Groove</h3>
                <p>Morning Drive Host</p>
                <p>DJ Groove kicks off your day with high energy and the hottest tracks. A veteran in the radio scene, he knows how to get you moving!</p>
            </div>
            <div class="team-member">
                <img src="images/placeholder-dj2.jpg" alt="DJ Name 2">
                <h3>Maria Sound</h3>
                <p>Midday Mix Host</p>
                <p>Maria brings you a smooth blend of classics and new releases, perfect for your midday unwind. Her soothing voice and eclectic taste are a listener favorite.</p>
            </div>
            <div class="team-member">
                <img src="images/placeholder-dj3.jpg" alt="DJ Name 3">
                <h3>The Night Owl</h3>
                <p>Late Night Talk Host</p>
                <p>For those who burn the midnight oil, The Night Owl offers insightful discussions and a curated selection of ambient tunes.</p>
            </div>
        </div>

        <h2>Our Values & Community</h2>
        <p>At Stereo 97.9, we believe in the power of local radio to unite and uplift. We are committed to [mention specific community involvement, e.g., supporting local artists, charity events, local news coverage]. Our station is more than just music; it's a hub for community engagement and a voice for our listeners.</p>

        <h2>Contact Us</h2>
        <p>Have a question or a song request? We'd love to hear from you!</p>
        <p>Email: info@stereo979.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: [Your Station Address Here]</p>
    </section>
`;

const scheduleTemplate = `
    <section class="schedule-content">
        <h1>Our Weekly Program Schedule</h1>
        <p class="timezone-info">All times are in [Your Time Zone, e.g., EST/PST/GMT].</p>

        <div class="schedule-grid">
            <h2>Monday - Friday</h2>
            <div class="day-schedule">
                <div class="show-time">6:00 AM - 9:00 AM</div>
                <div class="show-details">
                    <h3>The Morning Drive with DJ Groove</h3>
                    <p>Start your day with high energy, the latest hits, and engaging discussions.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">9:00 AM - 12:00 PM</div>
                <div class="show-details">
                    <h3>Midday Mix with Maria Sound</h3>
                    <p>A smooth blend of classic and contemporary tunes to get you through the workday.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">12:00 PM - 3:00 PM</div>
                <div class="show-details">
                    <h3>Lunchtime Jams</h3>
                    <p>Your perfect soundtrack for lunch, featuring listener requests and themed blocks.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">3:00 PM - 6:00 PM</div>
                <div class="show-details">
                    <h3>Afternoon Drive with [DJ Name]</h3>
                    <p>Beat the traffic with upbeat tracks and fun segments.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">6:00 PM - 9:00 PM</div>
                <div class="show-details">
                    <h3>Evening Chillout</h3>
                    <p>Unwind with a selection of relaxing and soulful melodies.</p>
                </div>
            </div>
            <div class="day-schedule">
                <div class="show-time">9:00 PM - 12:00 AM</div>
                <div class="show-details">
                    <h3>The Night Owl</h3>
                    <p>Deep dives into various topics and a curated selection of ambient and indie sounds.</p>
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
