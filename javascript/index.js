let slides = document.querySelectorAll('.slide_container');
let index = 0;

//next function
function next(){
slides[index].classList.remove('active');
index = (index + 1) % slides.length;
slides[index].classList.add('active');
}
//prev function
function prev(){
slides[index].classList.remove('active');
index = (index - 1 + slides.length) % slides.length;
slides[index].classList.add('active');
}
/* grid card slider*/
let cards = document.querySelectorAll('.card_slider');
let figure = 0;

//next function
function nexty(){
cards[figure].classList.remove('active');
figure = (figure + 1) % cards.length;
cards[figure].classList.add('active');
}
//prev function
function prevy(){
cards[figure].classList.remove('active');
figure = (figure - 1 + cards.length) % cards.length;
cards[figure].classList.add('active');
}