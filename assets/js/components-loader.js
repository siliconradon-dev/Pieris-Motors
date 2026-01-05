document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('header-placeholder');
            if (placeholder) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                // insert all children before the placeholder
                while (tempDiv.firstChild) {
                    placeholder.parentNode.insertBefore(tempDiv.firstChild, placeholder);
                }

                // remove the placeholder
                placeholder.remove();
            }

            // Re-select elements now that they are in the DOM
            const navToggle = document.getElementById('navToggle');
            const navLinks = document.getElementById('navLinks');

            if (navToggle && navLinks) {
                navToggle.addEventListener('click', function () {
                    navLinks.classList.toggle('active');
                });
            }

            // Highlight Active Link
            const currentPath = window.location.pathname.split("/").pop();
            const links = navLinks ? navLinks.getElementsByTagName('a') : [];

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
            const placeholder = document.getElementById('footer-placeholder');
            if (placeholder) {
                placeholder.outerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});
