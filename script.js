document.addEventListener("DOMContentLoaded", function () {
    
    //Menú móvil
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
         menuToggle.addEventListener("click", function (event) {
            navLinks.classList.toggle("show");
            event.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
        });

        document.addEventListener("click", function (event) {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinks.classList.remove("show");
            }
        });
    }

    //Carrusel de certificados
    const wrapper = document.querySelector(".certificados-wrapper");
    let index = 0;
    
    function moveCarousel() {
        const images = document.querySelectorAll(".certificado");
        index = (index + 1) % images.length;
        const offset = -index * (images[0].clientWidth ); 
        wrapper.style.transform = `translateX(${offset}px)`;
    }

    setInterval(moveCarousel, 3000); 

});

