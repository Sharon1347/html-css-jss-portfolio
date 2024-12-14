function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
} 
 // JavaScript for animation on scroll
        document.addEventListener('DOMContentLoaded', function () {
            const certificates = document.querySelectorAll('.certificate');
            
            // Function to add 'show' class when certificates are in view
            function checkCertificates() {
                const triggerBottom = window.innerHeight * 0.85;  // Trigger animation a bit before reaching the bottom
                certificates.forEach(certificate => {
                    const certificateTop = certificate.getBoundingClientRect().top;

                    if (certificateTop < triggerBottom) {
                        certificate.classList.add('show');
                    } else {
                        certificate.classList.remove('show');
                    }
                });
            }

            // Run on scroll
            window.addEventListener('scroll', checkCertificates);

            // Initial check
            checkCertificates();
        });

