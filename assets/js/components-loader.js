document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Initialize Nav Toggle after header load
            const navToggle = document.getElementById('navToggle');
            const navLinks = document.getElementById('navLinks');

            if (navToggle && navLinks) {
                navToggle.addEventListener('click', function () {
                    navLinks.classList.toggle('active');
                });
            }

            // Highlight Active Link
            const currentPath = window.location.pathname.split("/").pop();
            const links = navLinks.getElementsByTagName('a');

            for (let link of links) {
                const href = link.getAttribute('href');
                if (href === currentPath || (currentPath === '' && href === 'index.html')) {
                    link.style.color = "var(--dpmc-blue)";
                }
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
