document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const projects = document.querySelectorAll('.project');
    
    
    projects[currentIndex].classList.add('active');
  
    setInterval(() => {
      projects[currentIndex].classList.remove('active'); 
      currentIndex = (currentIndex + 1) % projects.length; 
      projects[currentIndex].classList.add('active'); 
    }, 3000); 
  });
  
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.1 });

projects.forEach(project => {
  observer.observe(project); 
});
