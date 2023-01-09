

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -300px 0px"

};

const observer = new IntersectionObserver((entries) => {



    entries.forEach((entry) => {

        console.log(entry);

        if(entry.isIntersecting) {

            entry.target.classList.add('show');

        } else {
                entry.target.classList.remove('show');
            }

    });

},appearOptions);


const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => {observer.observe(element);});