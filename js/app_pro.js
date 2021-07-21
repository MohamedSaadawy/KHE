//change color
function chnagePicToRed() {
    document.getElementById('productImge').src = '../img/Optimized-redRadio.jpg'
}

function chnagePicToblue() {
    document.getElementById('productImge').src = '../img/readioop.jpg'
}

function chnagePicToBlack() {
    document.getElementById('productImge').src = '../img/Optimized-blackRadio.jpg'
}
//slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});