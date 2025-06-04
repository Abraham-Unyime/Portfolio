function updateGreeting(userName = '') {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
  
    let greetingText;
    let emoji;
  
    if (hour >= 5 && hour < 12) {
      greetingText = 'Good Morning';
      emoji = '☀️';
    } else if (hour >= 12 && hour < 17) {
      greetingText = 'Good Afternoon';
      emoji = '🌤️';
    } else if (hour >= 17 && hour < 21) {
      greetingText = 'Good Evening';
      emoji = '🌇';
    } else {
      greetingText = 'Welcome';
      emoji = '🌙';
    }
    greetingText += '! ' + emoji;
  
    // Typing effect
    let i = 0;
    greetingElement.textContent = '';
    function typeWriter() {
      if (i < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    updateGreeting('Abraham');
  });

  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("nav-open");
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("nav-open");
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  
  document.getElementById("scrollToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const footerTools = document.querySelector(".footer-tools");
  
    if (scrollTop + windowHeight >= documentHeight - 10) {
        footerTools.classList.add("visible");
      } else {
        footerTools.classList.remove("visible");
      }
      
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
      const url = "https://formspree.io/f/myzjyvkg";
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: formData,
        });
  
        if (response.ok) {
          Swal.fire({
            title: 'Thank You!',
            text: 'Your form was submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            background: '#111',
            color: '#00e5ff',
            confirmButtonColor: '#00e5ff',
            buttonsStyling: false,
            width: '400px',
            padding: '2rem',
            customClass: {
              popup: 'swal2-border-radius',
              title: 'swal2-title-custom',
              confirmButton: 'swal2-confirm-custom',
            },
          });
  
          form.reset();
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
          background: '#111',
          color: '#00e5ff',
          confirmButtonColor: '#00e5ff',
          buttonsStyling: false,
          width: '400px',
          padding: '2rem',
          customClass: {
            popup: 'swal2-border-radius',
            title: 'swal2-title-custom',
            confirmButton: 'swal2-confirm-custom',
          },
        });
      }
    });
  });

  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); 
    }, 2000); 
  });

  