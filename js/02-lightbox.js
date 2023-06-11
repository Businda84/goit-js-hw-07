import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
console.log(galleryEl);
const onCreateMarkup = galleryItems.map(({ preview, original, description })=>

    ` <li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      
      src="${preview}"
      alt="${description}"
     />
  </a>
</li>
 `
);
galleryEl.insertAdjacentHTML('beforeend', onCreateMarkup.join(''));

    let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
      captionsData: 'alt',

});



