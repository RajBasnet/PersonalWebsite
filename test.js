/*
var img = document.getElementById('img');

var slides = ['./Images/image2.jpg','./Images/image3.jpg','./Images/image4.jpg', './Images/image5.jpg', './Images/IoT.png', './Images/Tesla.jpg', './Images/photo.jpg','./Images/facebook.png'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}

setInterval(slider,2000);
*/

/*
var img = document.getElementById('img');

var slides = ['./Images/image2.jpg','./Images/image3.jpg','./Images/image4.jpg', './Images/image5.jpg', './Images/IoT.png', './Images/Tesla.jpg', './Images/photo.jpg','./Images/facebook.png'];

let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();

/*
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
*/

/*
function showSlides() {
  /*for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }*/
/*
  slideIndex++;

  if(slideIndex > slides.length) {
    slideIndex = 1
  }

  //slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex - 1].classList.add('active');
  img.innerHTML = "<img src="+slides[0]+">"

   if(timeoutId) {
      clearTimeout(timeoutId);
   }

  timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
}
*/

var img = document.getElementById('img');

var slides = ['./Images/image2.jpg','./Images/image3.jpg','./Images/image4.jpg', './Images/image5.jpg', './Images/IoT.png', './Images/Tesla.jpg', './Images/photo.jpg','./Images/facebook.png'];

let slideIndex = 0;

function showSlides() {

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > slides.length) {
      slideIndex = 1
    }
  
    img.innerHTML = "<img src="+slides[slideIndex-1]+">"
  
     if(timeoutId) {
        clearTimeout(timeoutId);
     }
  
    timeoutId = setTimeout(showSlides, 2000); // Change image every 5 seconds
  }

  timeoutId = setTimeout(showSlides, 2000);
  //setInterval(showSlides,2000);