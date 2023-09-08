let slideIndex = 0;
let timeoutId = null;
var slides = document.getElementsByClassName("USRoad_slider");
var dots = document.getElementsByClassName("USRoad_dot");
var previous = document.getElementById("USRoad_previous");
var next = document.getElementById("USRoad_next");
var project = document.getElementById("USRoad");

function usRoadSlider() {
  
  slideValues();

  slides = document.getElementsByClassName("USRoad_slider");
  dots = document.getElementsByClassName("USRoad_dot");
  previous = document.getElementById("USRoad_previous");
  next = document.getElementById("USRoad_next");
  project = document.getElementById("USRoad");
  showSlides();
}

function iotSlider() {
  
  slideValues();

  slides = document.getElementsByClassName("IoT_slider");
  dots = document.getElementsByClassName("IoT_dot");
  previous = document.getElementById("IoT_previous");
  next = document.getElementById("IoT_next");
  project = document.getElementById("IoT");
  showSlides();
}

function teslaSlider() {
  
  slideValues();

  slides = document.getElementsByClassName("Tesla_slider");
  dots = document.getElementsByClassName("Tesla_dot");
  previous = document.getElementById("Tesla_previous");
  next = document.getElementById("Tesla_next");
  project = document.getElementById("Tesla");
  showSlides();
}

function treeSlider() {
  
  slideValues();

  slides = document.getElementsByClassName("Tree_slider");
  dots = document.getElementsByClassName("Tree_dot");
  previous = document.getElementById("Tree_previous");
  next = document.getElementById("Tree_next");
  project = document.getElementById("Tree");
  showSlides();
}

showSlides();

function currentSlide(index) {
     slideIndex = index;
     showSlides();
}

function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}

function slideValues() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
    dots[i].style.display = "none";
  }

  previous.style.display = "none";
  next.style.display = "none";
  project.classList.remove('activeP');
}

function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
    dots[i].style.display = "inline-block";
  }

  previous.style.display = "inline";
  next.style.display = "inline";

  slideIndex++;

  if(slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');

  project.classList.add('activeP');

   if(timeoutId) {
      clearTimeout(timeoutId);
   }

  timeoutId = setTimeout(showSlides, 3000); // Change image every 5 seconds
}

function projectDisplay1() {
  document.getElementById("img1").style.display = "none";  
  document.getElementById("overlay1").style.opacity = 1;

  document.getElementById("img2").style.display = "none";
  document.getElementById("overlay2").style.opacity = 1;
}

function projectDisplay2() {
  document.getElementById("img3").style.display = "none";
  document.getElementById("overlay3").style.opacity = 1;

  document.getElementById("img4").style.display = "none";
  document.getElementById("overlay4").style.opacity = 1;
}

document.onmousedown=disableclick;
status="Right Click Disabled";
function disableclick(e)
{
  if(event.button==2)
   {
     alert(status);
     return false;	
   }
}