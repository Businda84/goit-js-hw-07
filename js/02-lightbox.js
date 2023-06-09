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
galleryEl.addEventListener('click', (evt) => evt.preventDefault());
galleryEl.addEventListener('click',OnClickGalleryImg)
function OnClickGalleryImg(evt) {
  
    const isImgEl = !evt.target.classList.contains('gallery__image');
    if (isImgEl) {
        return
    }
   
    const instance = basicLightbox.create(`
    <img src="${evt.target.classList.gallery__link}" width="800" height="600">
`)
    instance.show()

    galleryEl.addEventListener('keydown', OnCloswGalleryImg)
    function OnCloswGalleryImg(evt) {
        instance.close()
    }
    let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionType: 'attr'
});
}

console.log(galleryItems);
