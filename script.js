// Filtering by category
const btns = document.querySelectorAll('.category-btn');
const cards = document.querySelectorAll('.video-card');
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.category-btn.active').classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.category;
    cards.forEach(card => {
      if (cat === 'all' || card.dataset.category === cat) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Video Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxVideo = lightbox.querySelector('video');
document.querySelectorAll('.video-thumb').forEach(img => {
  img.addEventListener('click', function() {
    lightbox.style.display = "flex";
    lightboxVideo.src = this.getAttribute('data-video');
    lightboxVideo.play();
  });
});
function closeLightbox() {
  lightbox.style.display = "none";
  lightboxVideo.pause();
  lightboxVideo.src = "";
}
// Close lightbox when clicking outside video
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) closeLightbox();
});
