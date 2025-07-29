document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    // 1. Membuat dots navigasi secara dinamis
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');
    
    // 2. Fungsi untuk pindah ke slide tertentu
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        
        // Pindahkan slider
        slider.style.transform = `translateX(-${index * 100}%)`;
        
        // Update index saat ini
        currentIndex = index;
        
        // Update class 'active' pada dot
        updateDots();
    }

    // 3. Fungsi untuk mengupdate dot yang aktif
    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    // 4. Memberikan event listener pada setiap dot
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            goToSlide(index);
        });
    });

    // 5. Fungsi untuk slide berikutnya (untuk auto-play)
    function nextSlide() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        goToSlide(nextIndex);
    }
    
    // Inisialisasi slider
    goToSlide(0);

    // Atur interval untuk auto-play (misalnya, setiap 5 detik)
    setInterval(nextSlide, 5000); 
});