
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