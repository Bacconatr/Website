



// animation on scroll effect for about section
const appearOptions = {
    threshold: .5,
    rootMargin: "400px 0px -200px 0px"
};


const observer = new IntersectionObserver((entries) => {



    entries.forEach((entry) => {

        console.log(entry);


        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            return;
        } else {
                entry.target.classList.remove('show');
                return;
            }

    });

},appearOptions);


const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => {observer.observe(element);});




// animation on scroll effect for about text box's 
const appearOptions2 = {
    threshold: .4,
    rootMargin: "0px 0px 0px 0px"
};

let lastScrollY = window.scrollY;
let scrollDown = true;
window.addEventListener('scroll', () => {

    scrollDown = window.scrollY > lastScrollY
    lastScrollY = window.scrollY;
});

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting && scrollDown) {
            // delay by 1 second
            setTimeout(() => {
                entry.target.classList.add('slide');
            }, 500);
            return;
        } else {
                entry.target.classList.remove('slide');
                return;
            }

            

    });

},appearOptions2);


const hiddenSlide = document.querySelectorAll('.noSlide');

hiddenSlide.forEach((element) => {slideObserver.observe(element);});


document.querySelectorAll('.tagCloudContainer').style.color = color;


// function for the popup overlay on the contact page
function popUP() {
    document.querySelector(".overlay").style.visibility = "hidden";
    document.querySelector(".overlay").style.opacity = "0";
  }
