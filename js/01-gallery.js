import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galery = document.querySelector('.gallery');

galery.insertAdjacentHTML('beforeend', galeryCreate(galleryItems));

galery.addEventListener('click', onGaleryImgClick);

function galeryCreate(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}

function onGaleryImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => document.addEventListener('keydown', onEscapePress),
      onClose: () => document.removeEventListener('keydown', onEscapePress),
    }
  );

  instance.show();

  function onEscapePress(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}


