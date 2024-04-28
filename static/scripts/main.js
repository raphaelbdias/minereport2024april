document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function toggleSections() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    document.addEventListener('scroll', toggleSections);
    toggleSections(); // Initial check
});
