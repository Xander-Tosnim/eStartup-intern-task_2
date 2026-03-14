// Nav Modal ......
const modal = document.querySelector("#navModal");
const navigators = document.querySelectorAll(".navigators")
const openBtn = document.querySelector("#openNavModal");
const closeBtn = document.querySelector("#closeNavModal");

// Open the modal
openBtn.addEventListener("click", () => {
  modal.showModal();
});

// Close the modal
closeBtn.addEventListener("click", () => {
  modal.close();
});

navigators.forEach((navigator) => {
    navigator.addEventListener('click', () => {
        modal.close();
    })
});

// ..... Nav Modal


// Video Modal.......
const openVideoBtn = document.getElementById('openVideo');
const videoModal = document.getElementById('videoModal');
const closeVideoBtn = document.getElementById('closeModal');
const videoPlayer = document.getElementById('videoPlayer');

openVideoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const videoSrc = openVideoBtn.getAttribute('href');
    videoPlayer.setAttribute('src', videoSrc + "?autoplay=1"); 
    videoModal.showModal();
});

closeVideoBtn.addEventListener('click', () => {
    videoModal.close();
    videoPlayer.setAttribute('src', ''); 
});

// Close when clicking outside the videoModal
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.close();
        videoPlayer.setAttribute('src', '');
    }
});
// ...... Video Modal

// Frequently Asked Questions Toggle..........

document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
    });
});

// ...........Frequently Asked Questions Toggle


// For Contact form................

const contactForm = document.querySelector('.form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract the data using FormData for efficiency
    const formData = new FormData(this);
    
    // Convert to a plain object for easier reading in console
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted Successfully:", data);
    
});



// ............For Contact form