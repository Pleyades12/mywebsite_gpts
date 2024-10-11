// Function to open links when cards are clicked
function openLink(url) {
    window.open(url, '_blank');
}

// Scroll reveal effect
window.addEventListener('scroll', function() {
    let reveals = document.querySelectorAll('.gpt-card');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
});
