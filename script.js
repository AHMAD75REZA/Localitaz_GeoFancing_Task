const productsSection = document.querySelector('.products');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            productsSection.classList.add('in-viewport');
        }
    });
}, { rootMargin: '0px 0px -100px 0px' });  // Adjust rootMargin as needed for when you want the animation to trigger


observer.observe(productsSection);
