import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');


const onCreateMarkup = galleryItems.map(({ preview, original, description })=>

    ` <li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     />
  </a>
</li>
 `
);
    
galleryEl.insertAdjacentHTML('beforeend', onCreateMarkup.join(''))


galleryEl.addEventListener('click', OnClickGalleryImg);

function OnClickGalleryImg (evt) {
  evt.preventDefault();
  const isImgEl = !evt.target.classList.contains('gallery__image');
  if (isImgEl) {
  return
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
  instance.show()

  // console.log(evt.target.src);
  // console.log(evt.target.dataset.source);
  galleryEl.addEventListener('keydown', OnCloswGalleryImg)
  function OnCloswGalleryImg(evt) {
    instance.close()
  }


}



