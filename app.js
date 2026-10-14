const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const form = document.querySelector('#inquiry');
form.addEventListener('submit', event => {
 event.preventDefault();
 document.querySelector('#form-status').textContent = 'Preview complete. Your inquiry has not been sent. Call (207) 890-5234 to discuss your property.';
});
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
 form.elements.service.value = link.dataset.service;
}));
const track = document.querySelector('#work-track');
const slides = [...document.querySelectorAll('.work-slide')];
const prev = document.querySelector('#prev-work');
const next = document.querySelector('#next-work');
function move(direction) {
 const distance = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
 track.scrollBy({left: direction * distance, behavior: reduced.matches ? 'instant' : 'smooth'});
}
function updateGallery() {
 const step = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
 const index = Math.min(slides.length - 1, Math.round(track.scrollLeft / step));
 prev.disabled = track.scrollLeft < 2;
 next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 3;
 document.querySelector('#gallery-position').textContent = `${String(index + 1).padStart(2, '0')} / 05`;
}
prev.addEventListener('click', () => move(-1));
next.addEventListener('click', () => move(1));
track.addEventListener('scroll', updateGallery, {passive:true});
track.addEventListener('keydown', event => {
 if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
  event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
 }
});
window.addEventListener('resize', updateGallery); updateGallery();
const dialog = document.querySelector('#lightbox');
let trigger;
slides.forEach(slide => slide.addEventListener('click', () => {
 trigger = slide;
 const image = document.querySelector('#lightbox-image');
 image.src = slide.dataset.image; image.alt = slide.dataset.caption;
 document.querySelector('#lightbox-caption').textContent = slide.dataset.caption;
 dialog.showModal(); document.body.style.overflow = 'hidden';
}));
document.querySelector('#close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if (event.target === dialog) dialog.close();});
dialog.addEventListener('close', () => {document.body.style.overflow = ''; trigger?.focus();});
