import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galery = document.querySelector('.gallery');

galery.insertAdjacentHTML('beforeend', galeryCreate(galleryItems));

function galeryCreate(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li>
  <a class="gallery__item" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
