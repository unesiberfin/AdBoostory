const track = document.querySelector('.gallery-track');

// ==========banner cards==========

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const offset = scrollY * 0.4; // speed of sideways scroll
  track.style.transform = `translateX(-${offset}px)`;
});

// =====sliding deck cards=======

const cards = [...track.children];
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});


// ===== mobile nav toggle =====
const navToggleBtn = document.getElementById('navToggle');
const bodyEl = document.body;

if (navToggleBtn) {
  navToggleBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('nav-open');
  });
}

// Contact form

// Initialize EmailJS
// emailjs.init("xYSh-Eo7kpF6QY-Z5"); // Your public key

// // Handle form submission
// document.querySelector(".contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   emailjs.send("service_kups8ea", "template_23r1nte", {
//     name: document.querySelector("input[name='name']").value,
//     email: document.querySelector("input[name='email']").value,
//     message: document.querySelector("textarea[name='message']").value
//   })
//   .then(function(response) {
//     alert("Your message has been sent successfully!");
//     console.log("SUCCESS:", response);

//     // Reset form
//     document.querySelector(".contact-form").reset();
//   }, function(error) {
//     alert("Oops! Something went wrong. Check the console for details.");
//     console.log("FAILED:", error);
//   });
// });
