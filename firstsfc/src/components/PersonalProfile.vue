<template>
  <div :class="theme" id="app-wrapper">
    <header class="navbar" :class="{ 'nav-solid': scrolled }">
      <a href="#top" class="logo">Lance's Portfolio</a>
      <nav>
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#goals">Goals</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button class="theme-toggle" @click="toggleTheme">
        {{ theme === 'dark' ? '🌙' : '☀️' }}
      </button>
    </header>

    <section class="hero" id="top" :style="{ backgroundImage: `url(${heroImages[currentHeroIndex]})` }">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>My College Story</h1>
          <p>2nd Year BS Computer Science Student | Tech Enthusiast</p>
          <div class="hero-buttons">
            <a href="#skills" class="hero-btn play-btn">▶ View Experience</a>
            <a href="#about" class="hero-btn info-btn">ⓘ More Info</a>
          </div>
        </div>
      </div>
    </section>

    <main>
      <section id="about" class="row show">
        <h2>About Me</h2>
        <div class="card">
          <img src="/Images/about.jpg.jpg" alt="Profile Picture">
          <div class="card-text">
            <p>Greetings! I am Lance Gabriel M. Buncab, but you can call me Gab. I am a passionate Computer Science student...</p>
          </div>
        </div>
      </section>

      <section id="education" class="row show">
        <h2>Education</h2>
        <div class="card">
          <img src="/Images/education.jpeg" alt="Asia Pacific College">
          <div class="card-text">
            <p>Currently, I am studying at Asia Pacific College as a 2nd Year BS Computer Science student specializing in Cybersecurity and Forensics.</p>
          </div>
        </div>
      </section>

      <section id="skills" class="row show">
        <h2>Skills Leaderboard</h2>
        <div class="skills-grid">
          <div class="skill-box">
            <h3>Languages</h3>
            <div class="skill-icons">
              <img src="/Images/python.png" alt="Python">
              <img src="/Images/java.png" alt="Java">
              <img src="/Images/html.png" alt="HTML">
              <img src="/Images/css.png" alt="CSS">
              <img src="/Images/javascript.png" alt="JS">
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" class="row show">
        <h2>Photo Gallery</h2>
        <div class="gallery-scroll">
          <img v-for="(img, index) in galleryImages" :key="index" :src="img" @click="openImage(img)" style="cursor: pointer;">
        </div>
        <div class="modal" v-if="selectedImage" @click.self="closeImage">
          <img :src="selectedImage" alt="Full size">
          <button @click="closeImage">✖</button>
        </div>
      </section>

      <section id="contact" class="row contact show">
        <video class="contact-video-bg" autoplay loop muted playsinline>
          <source src="/Images/contact-video-space.mp4" type="video/mp4">
        </video>
        <div class="contact-container">
          <h2>Contact Me</h2>
          <a href="mailto:lmbuncab@student.apc.edu.ph" class="email-btn">📧 Contact Gab</a>
          <div class="social-links">
            <a href="https://github.com/lgbncb" target="_blank" class="social-icon"><img src="/Images/github.png" alt="GitHub"></a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2026 WEBPROG Midterm Project | Lance Buncab - SF241</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      theme: 'dark',
      currentHeroIndex: 0,
      selectedImage: null,
      heroImages: ['/Images/Photo1.jpg'],
      galleryImages: [
        '/Images/hobbies.jpg.jpg',
        '/Images/goals.jpg.jpg',
        '/Images/education.jpeg',
        '/Images/Photo2.jpg',
        '/Images/Photo3.jpg'
      ]
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    openImage(img) {
      this.selectedImage = img;
    },
    closeImage() {
      this.selectedImage = null;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
/* RESET & BASE */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: Verdana, Arial, sans-serif; }
.dark { background: #141414; color: white; min-height: 100vh; }
.light { background: #f4f4f4; color: #111; min-height: 100vh; }

/* NAVBAR */
.navbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 50px; position: fixed; width: 100%; z-index: 1000;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  transition: background 0.3s ease;
}
.navbar.nav-solid { background: rgba(0, 0, 0, 0.95); }
.logo { color: #E50914; font-size: 26px; font-weight: bold; text-decoration: none; }
nav ul { display: flex; list-style: none; }
nav ul li a { color: #e5e5e5; text-decoration: none; margin-left: 20px; font-size: 14px; transition: color 0.3s; }
nav ul li a:hover { color: #E50914; }

/* HERO */
.hero { height: 100vh; background-size: cover; background-position: center; }
.hero-overlay { height: 100%; background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent); display: flex; align-items: center; padding: 0 50px; }
.hero-content h1 { font-size: 60px; margin-bottom: 10px; color: white; }
.hero-content p { font-size: 20px; color: #e5e5e5; }
.hero-buttons { display: flex; gap: 15px; margin-top: 20px; }
.hero-btn { padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold; transition: 0.3s; }
.play-btn { background: white; color: #141414; }
.info-btn { background: rgba(255, 255, 255, 0.2); color: white; border: 2px solid white; }

/* CARD & SECTIONS */
.row { padding: 120px 50px; opacity: 1; }
.card { display: flex; background: #2f2f2f; border-radius: 6px; padding: 40px; gap: 30px; align-items: center; color: white; }
.card img { width: 400px; height: 300px; object-fit: cover; border-radius: 4px; }
.card-text p { font-size: 22px; line-height: 1.8; }

/* SKILLS */
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px; }
.skill-box { background: #2f2f2f; padding: 30px; border-radius: 6px; text-align: center; }
.skill-icons img { width: 55px; margin: 10px; transition: 0.2s; }
.skill-icons img:hover { transform: scale(1.2); }

/* GALLERY & MODAL */
.gallery-scroll { display: flex; overflow-x: auto; gap: 15px; }
.gallery-scroll img { height: 300px; border-radius: 6px; transition: 0.3s; }
.modal { position: fixed; inset: 0; background: rgba(0,0,0,0.9); display: flex; justify-content: center; align-items: center; z-index: 2000; }
.modal img { max-width: 90%; max-height: 90%; }
.modal button { position: absolute; top: 20px; right: 30px; background: none; border: none; color: white; font-size: 30px; cursor: pointer; }

/* CONTACT */
.contact-video-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1; }
.contact-container { padding: 60px; background: rgba(0,0,0,0.6); border-radius: 12px; position: relative; z-index: 1; text-align: center; }
.email-btn { display: inline-block; background: white; color: #141414; padding: 16px 40px; border-radius: 8px; font-weight: bold; text-decoration: none; margin-bottom: 20px; }

/* THEME TOGGLE */
.theme-toggle { 
    background: none; 
    border: none; 
    font-size: 24px; 
    cursor: pointer; 
    margin-left: 20px; 
}

/* FOOTER */
footer { 
    text-align: center; 
    padding: 20px; 
    color: #aaa; 
    background: #0a0a0a; 
}

/* LIGHT MODE OVERRIDES */
.light .card { 
    background: white; 
    color: #111; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
}

.light .skill-box { 
    background: white; 
    color: #111; 
}

.light .navbar { 
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent); 
}

.light nav ul li a { 
    color: #333; 
}

/* Ensure the wrapper handles the theme background correctly */
#app-wrapper.light {
    background-color: #f4f4f4;
}

#app-wrapper.dark {
    background-color: #141414;
}
</style>