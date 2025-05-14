 // Get DOM elements
 const navToggle = document.querySelector('.nav-toggle');
 const navLinks = document.querySelector('.nav-links');
 const overlay = document.querySelector('.overlay');
 const closeNav = document.querySelector('.close-nav');
 const logoContainer = document.querySelector('.logo-container');

  const slides = document.querySelectorAll('.carousel .hero-content');
  const prevButton = document.querySelector('.arrow-left');
  const nextButton = document.querySelector('.arrow-right');
  let currentIndex = Array.from(slides).findIndex(slide => !slide.hidden);


  console.log(slides)
 // Function to open navigation
 function openNav() {
   navLinks.classList.add('active');
   overlay.classList.add('active');
   navToggle.setAttribute('aria-expanded', 'true');
   navToggle.style.display = 'none';
   logoContainer.style.display = 'none'; // Hide logo when menu is open
   document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
 }

 // Function to close navigation
 function closeNavMenu() {
   navLinks.classList.remove('active');
   overlay.classList.remove('active');
   navToggle.setAttribute('aria-expanded', 'false');
   navToggle.style.display = 'block';
   logoContainer.style.display = 'flex'; // Show logo when menu is closed
   document.body.style.overflow = ''; // Restore scrolling
 }

 // Event listeners
 navToggle.addEventListener('click', openNav);
 closeNav.addEventListener('click', closeNavMenu);
 overlay.addEventListener('click', closeNavMenu);

 // Close menu when pressing Escape key
 document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
     closeNavMenu();
   }
 });


  // If no slide is visible (for safety), show the first one
  if (currentIndex === -1) {
    currentIndex = 0;
    slides[currentIndex].hidden = false;
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.hidden = i !== index;
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });