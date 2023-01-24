


// smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





// animation on scroll effect for about section
const appearOptions = {
    threshold: 1,
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
    threshold: .5,
    rootMargin: "0px 0px 0px 0px"
};

const slideObserver = new IntersectionObserver((entries) => {



    entries.forEach((entry) => {

        console.log(entry);


        if(entry.isIntersecting) {
            entry.target.classList.add('slide');
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




