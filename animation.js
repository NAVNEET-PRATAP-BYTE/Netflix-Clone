// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create a timeline for better control of animations
  const mainTimeline = gsap.timeline();
  
  // Navbar animations - all elements appear from top with blur effect
  mainTimeline.from('.navbar', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Animate navbar elements with the same duration but staggered start times
  mainTimeline.from('.navbar-brand, .navbar-nav .nav-link, .navbar-right > *', {
    opacity: 0,
    y: -30,
    filter: 'blur(10px)',
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.5'); // Start slightly before the navbar animation completes
  
  // Hero section animations
  mainTimeline.from('.hero-image', {
    opacity: 0,
    scale: 1.5,
    duration: 1.2,
    ease: 'power2.out'
  }, '-=0.3');
  
mainTimeline.from(['.hero'], {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 1,
    ease: 'power2.out'
}, '-=0.8');
  
  // Content section animations
  mainTimeline.from('.section-title', {
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4');
  
  // Animate all content cards at the same time (removed stagger property)
  mainTimeline.from('.content-card', {
   

    stagger: 0.1,
    duration: 1.0,
    ease:'power2.out'
  }, '-=0.8');

  
  // Footer animations
  mainTimeline.from('.footer-content > *', {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power1.out'
  }, '-=1.8');
  
 
 
});