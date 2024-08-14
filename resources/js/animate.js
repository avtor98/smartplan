document.addEventListener('DOMContentLoaded', function() {
    const phoneForm = document.getElementById('phone-form');
    const mainLogo = document.getElementById('main-logo');
    const sectionRight = document.querySelector('.section-right');

    setTimeout(() => {
        phoneForm.classList.add('slide-in');
        mainLogo.classList.add('slide-in');
        sectionRight.classList.add('slide-in');
    }, 200);
});

document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Смещение для каждого элемента
    const blur1 = document.querySelector('.section-blur-1');
    const blur2 = document.querySelector('.section-blur-2');
    const blur3 = document.querySelector('.section-blur-3');

    blur1.style.transform = `translate(-${x * 90}px, -${y * 90}px)`;
    blur2.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
    blur3.style.transform = `translate(-${x * 110}px, ${y * 110}px)`;
});
