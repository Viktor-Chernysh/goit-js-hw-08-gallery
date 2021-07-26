import galleryItems from "./app.js";
const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeLightboxBtn = document.querySelector('.lightbox__button');
// const linkItemRef = document.querySelector('gallery__item');


  const items = galleryItems.map(arr => {
   return `<li class="gallery__item">
  <a
    class="gallery__link lazyload"
    href=${arr.original}
  >
    <img
      load='lazy'
      class="gallery__image"
      src=${arr.preview}
      alt='${arr.description}'
      data-source=${arr.original}
      data-index=${galleryItems.indexOf(arr)}
    />
  </a>
</li>`;   
  }).join('');
  galleryRef.innerHTML = items

// const galleryArrow = document.querySelectorAll('.gallery__image');
// console.log(galleryArrow);

galleryRef.addEventListener('click', onImgClick)
function onImgClick(e) {
  e.preventDefault();
  if(e.target.nodeName !== "IMG"){
    return
  }
  openModal(e);
  // console.log(e.target.dataset.index);
}

let currentIndex;

function openModal(e) {
  document.addEventListener('keydown', onEscapeCloseModal);
   document.addEventListener('keydown', keyPress);
  const currentImage = e.target;
  lightboxRef.classList.add('is-open');
  lightboxImageRef.src = e.target.dataset.source;
  currentIndex = Number(e.target.dataset.index);
  // console.log(currentIndex);
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


// console.log(galleryItems);
function nextImage  () {
  if (currentIndex!== galleryItems.length - 1) {
    currentIndex += 1;
    lightboxImageRef.src = galleryItems[currentIndex].original;
  } else if ((currentIndex === galleryItems.length - 1)) {
    currentIndex = 0;
    lightboxImageRef.src = galleryItems[currentIndex].original;
    
    
  };
};

function prevImage () {
  if (currentIndex !==0) {
    currentIndex -= 1;
    lightboxImageRef.src = galleryItems[currentIndex].original;
  } else if (currentIndex === 0) {
    currentIndex = galleryItems.length - 1;
    lightboxImageRef.src = galleryItems[currentIndex].original;
  }
};
function keyPress (e)  {
  if (e.code === "ArrowLeft") {
    prevImage();
  }

  if (e.code === "ArrowRight") {
    nextImage();
  }
};


    
    

// document.addEventListener('keydown', onArrowsKeyImageChanger);
// function nextImage  () {
//   if (currentIndex >= 0 && currentIndex < galleryItems.length - 1) {
//     currentIndex += 1;
//     lightboxImageRef.src = galleryItems[currentIndex].original;
//   };
//   if ((currentIndex === galleryItems.length - 1)) {
//     currentIndex = 0;
//     lightboxImageRef.src = galleryItems[currentIndex].original;
//   };
// };

// function prevImage () {
//   if (currentIndex > 0 && currentIndex <= galleryItems.length - 1) {
//     currentIndex -= 1;
//     lightboxImageRef.src = galleryItems[currentIndex].original;
//   } else if (currentIndex === 0) {
//     currentIndex = galleryItems.length - 1;
//     lightboxImageRef.src = galleryItems[currentIndex].original;
//   }
// };
// function keyPress (e)  {
//   if (e.code === "ArrowLeft") {
//     prevImage();
//   }

//   if (e.code === "ArrowRight") {
//     nextImage();
//   }
// };