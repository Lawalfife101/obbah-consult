window.addEventListener('scroll', () => {
    const toTopButton = document.querySelector('.to-top');
    if (window.pageYOffset > 200) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
});

document.querySelector('.to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.getElementById("view-more-btn").addEventListener("click", function() {
    var moreUniversities = document.getElementById("more-universities");
    if (moreUniversities.style.display === "none" || moreUniversities.style.display === "") {
        moreUniversities.style.display = "flex";
        this.textContent = "View Less";
    } else {
        moreUniversities.style.display = "none";
        this.textContent = "View More";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    document.getElementById('next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.getElementById('prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-slide'));
            showSlide(currentSlide);
        });
    });

    // Automatically move to the next slide every 10 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 10000);

    // Show the first slide initially
    showSlide(currentSlide);
});
