document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.smart-plan__carousel-nav-item');
    const images = document.querySelectorAll('.smart-plan__carousel-image');
    const carouselText = document.getElementById('carousel-text');
    const carouselKey = document.getElementById('carousel-key');

    const texts = [
        { text: 'Нажмите на клавишу <span>P</span>, чтобы открыть инструмент «Разметка»', key: 'P' },
        { text: 'Нажмите на клавишу <span>Q</span>, чтобы сохранить документ', key: 'Q' },
        { text: 'Нажмите на клавишу <span>R</span>, чтобы отменить последнее действие', key: 'R' }
    ];

    let currentIndex = 0;

    function updateCarousel(index) {
        navItems.forEach(item => item.classList.remove('active'));
        navItems[index].classList.add('active');
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
        });
        carouselText.innerHTML = texts[index].text;
        carouselKey.innerHTML = texts[index].key;

        currentIndex = index;
    }

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
    updateCarousel(currentIndex);
});
