
// JavaScript for Navbar Toggle and Active Navigation Item
const navToggler = document.querySelector(".nav-toggler");
   navToggler.addEventListener("click", navToggle);

   function navToggle() {
      navToggler.classList.toggle("active");
      const nav = document.querySelector(".nav");
      nav.classList.toggle("open");
      if (nav.classList.contains("open")) {
         nav.style.maxHeight = nav.scrollHeight + "px";
      } else {
         nav.removeAttribute("style");
      }
   }


// image tilt

   const hoverImage2 = document.getElementById("hover-image-2");
   hoverImage2.addEventListener("mousemove", (e) => {
       const boundingBox = hoverImage2.getBoundingClientRect();
       const centerX = boundingBox.left + boundingBox.width / 2;
       const centerY = boundingBox.top + boundingBox.height / 2;
       const rotateX = (centerY - e.clientY) / 5; // Adjust the tilt factor
       const rotateY = (e.clientX - centerX) / 5; // Adjust the tilt factor

       hoverImage2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
   });
   hoverImage2.addEventListener("mouseleave", () => {
       hoverImage2.style.transform = "rotateX(0deg) rotateY(0deg)";
   });

   const hoverImage = document.getElementById("hover-image");
   hoverImage.addEventListener("mousemove", (e) => {
       const boundingBox = hoverImage.getBoundingClientRect();
       const centerX = boundingBox.left + boundingBox.width / 2;
       const centerY = boundingBox.top + boundingBox.height / 2;
       const rotateX = (centerY - e.clientY) / 5; // Adjust the tilt factor (increase for faster tilt)
       const rotateY = (e.clientX - centerX) / 5; // Adjust the tilt factor (increase for faster tilt)
   
       hoverImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
   });
   hoverImage.addEventListener("mouseleave", () => {
       hoverImage.style.transform = "rotateX(0deg) rotateY(0deg)";
   });

// JavaScript to make the navbar sticky

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
   if (window.scrollY > headerHeight) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
});


// accordion for skill
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("active");
    const icon = header.querySelector("i.fa-chevron-up, i.fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
    icon.classList.toggle("fa-chevron-down");
  });
});

// type writing

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Data Scientist")
  .pauseFor(2000)
  .deleteAll()
  .typeString("ML Engineer")
  .pauseFor(2000)
  .start();

// scroll top
document.addEventListener('DOMContentLoaded', function () {
   var scrollTopBtn = document.getElementById('scroll-top-btn');

   window.onscroll = function () {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       scrollTopBtn.style.display = 'block';
     } else {
       scrollTopBtn.style.display = 'none';
     }
   };

   scrollTopBtn.addEventListener('click', function () {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   });
 });

