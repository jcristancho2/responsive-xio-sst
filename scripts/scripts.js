document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-gallerys');

    const fadeInOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                image.classList.add('fade-in');
            } else {
                image.classList.remove('fade-in');
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Para aplicar el efecto al cargar la página
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Aquí puedes hacer una solicitud a un servidor o simplemente mostrar un mensaje
        alert('¡Formulario enviado con éxito!');

        // Reiniciar el formulario
        form.reset();
    });
});