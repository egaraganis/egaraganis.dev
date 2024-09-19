document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-bar .nav-button')
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`a[href="#${id}"] .nav-button`)

                if (entry.isIntersecting) {
                    navLinks.forEach((link) => link.classList.remove('active'))
                    navLink.classList.add('active')
                }
            });
        },
        {
            root: null,
            threshold: 0.2,
        }
    );

    sections.forEach((section) => {
        observer.observe(section)
    })
})
