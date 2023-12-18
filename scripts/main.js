document.addEventListener('DOMContentLoaded', function () {
    const dotNavItems = document.querySelectorAll('.carousel__dot-nav li');
    const galleryItems = document.querySelectorAll('.gallery-item');

    dotNavItems.forEach((dotNavItem, index) => {
        dotNavItem.addEventListener('click', function () {
            setActiveDot(index);
            showCarouselItem(index);
        });
    });

    function setActiveDot(index) {
        dotNavItems.forEach((dotNavItem) => {
            dotNavItem.classList.remove('carousel__dot-nav--active');
        });
        dotNavItems[index].classList.add('carousel__dot-nav--active');
    }

    function showCarouselItem(index) {
        galleryItems.forEach((galleryItem) => {
            galleryItem.classList.remove('gallery-item-active');
        });
        galleryItems[index].classList.add('gallery-item-active');
    }

    // Auto-advance carousel every 3 seconds (adjust as needed)
    let currentIndex = 2; // Start with the third item
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dotNavItems.length;
        setActiveDot(currentIndex);
        showCarouselItem(currentIndex);
    }, 3000);
});
