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
    
    //home cleaning card
    
        var clean= document.getElementById("homeCleaningCards");
        var item = clean.getElementsByClassName("main_card");
        function after(){
            clean.append(item[0]);
        }
        function before(){
            clean.prepend(item[item.length - 1]);
        }
    
    /* imageslider*/
   
        var imageSlider = document.getElementById("imageSlider");
        var fourImages = imageSlider.getElementsByClassName("four_images");
        function nexter(){
            imageSlider.append(fourImages[0]);
        }
        function previouser(){
            imageSlider.prepend(fourImages[fourImages.length - 1]);
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
  

/*serviceprice slider*/

    var service = document.getElementById("servicePrice");
    var serviceBox = service.getElementsByClassName("prices");
    function btnnext(){
        service.append(serviceBox[0]);
    }
    function btnprev(){
        service.prepend(serviceBox[serviceBox.length - 1]);
    }
 
    /*review slider*/
 
        var review = document.getElementById("reviewSlider");
        var contentBox = review.getElementsByClassName("cleaning_rules");
        function nxt(){
            review.append(contentBox[0]);
        }
        function prv(){
            review.prepend(contentBox[contentBox.length - 1]);
        }