import galleryItems from "./app.js";
const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeLightboxBtn = document.querySelector('.lightbox__button');
// const linkItemRef = document.querySelector('gallery__item');


  galleryItems.forEach(arr => {
    const galleryItem = `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${arr.original}
  >
    <img
      class="gallery__image"
      src=${arr.preview}
      alt='${arr.description}'
      data-source=${arr.original}
      data-index=${galleryItems.indexOf(arr)}
    />
  </a>
</li>`;
    galleryRef.insertAdjacentHTML('beforeend', galleryItem)
  });

// const galleryArrow = document.querySelectorAll('.gallery__image');
// console.log(galleryArrow);

galleryRef.addEventListener('click', onImgClick)
function onImgClick(e) {
  e.preventDefault();
  openModal(e);
  // console.log(e.target.dataset.index);
}

function openModal(e) {
  document.addEventListener('keydown', onEscapeCloseModal);
  const currentImage = e.target;
  // document.addEventListener('keydown', onArrowsKeyImageChanger(e, currentImage));
  lightboxRef.classList.add('is-open');
  lightboxImageRef.src = e.target.dataset.source;
  console.log(e.target.dataset.index);
};

closeLightboxBtn.addEventListener('click', closeModal);
function closeModal() {
  lightboxRef.classList.remove('is-open');
  lightboxImageRef.src = '';
};

lightboxOverlayRef.addEventListener('click', onLightboxClick)
function onLightboxClick(e) {
  if (e.currentTarget !== e.target) {
    return
  };
  closeModal();
};


function onEscapeCloseModal(e) {
  if (e.key !== 'Escape') {
    return
  };
  closeModal()
};

