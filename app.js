const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const mainContent = document.querySelector('.main-content');

function PageTransitionEvent() {
  // button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.classList.toggle('active-btn');
      this.classList.toggle('active-btn');      
    });   
  }
}

// Call the function to initialize page transition event handling
PageTransitionEvent();
