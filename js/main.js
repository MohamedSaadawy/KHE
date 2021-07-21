var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2100,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
if(window.innerWidth <=1179){
  document.getElementById('facebook_page').setAttributeNode(data-width, 500)
};
// cjanige product picture

function chnagePicToRed(){
  document.getElementById('productImge').src='../img/Optimized-redRadio.jpg'
}
function chnagePicToblue(){
  document.getElementById('productImge').src='../img/readioop.jpg'
}
function chnagePicToBlack(){
  document.getElementById('productImge').src='../img/Optimized-blackRadio.jpg'
}
// scroll down transetion 

const secoundProduct = document.getElementById('secoundProduct');

function makeThingVisible(secoundProduct){
  secoundProduct.style = 'display: block'  
}