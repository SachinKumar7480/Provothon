//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

const codeForm = document.getElementById('codeForm');
const codeInput = document.getElementById('codeInput');
const reviewReport = document.getElementById('reviewReport');

codeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const code = codeInput.value;

  // Send code to the backend for processing
  // Display the review report in the reviewReport div
  // You would need to implement the backend functionality for code submission and report generation
});


//Navigation bar effects on scroll

//Responsive navigation menu toggle