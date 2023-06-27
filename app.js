const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const mainContent = document.querySelector('.main-content');

function PageTransitionEvent() {
  // button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.remove('active-btn');
      this.classList.add('active-btn');
      
      // Hide current section
      let currentSection = document.querySelector('.section.active');
      currentSection.classList.remove('active');
      
      // Show target section based on button data-id attribute
      let targetSection = document.querySelector(`#${this.dataset.id}`);
      targetSection.classList.add('active');
    });   // prube de visual commit
  }
}

// Call the function to initialize page transition event handling
PageTransitionEvent();
