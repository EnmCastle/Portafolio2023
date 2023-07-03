const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls .control');
const mainContent = document.querySelector('.main-content');

function PageTransitionEvent() {
  // button click active class
  sectBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      
      // Remove active class from all buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
      });
      
      // Add active class to the clicked button
      this.classList.add('active-btn');
      
      // Hide all sections
      sections.forEach((section) => {
        section.style.display = 'none';
      });
      
      // Show the corresponding section
      const targetSection = document.getElementById(id);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });
}

// Call the function to initialize page transition event handling
PageTransitionEvent();

//newcomment
