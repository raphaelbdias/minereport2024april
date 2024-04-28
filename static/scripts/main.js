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

    // Collapsible functionality
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
