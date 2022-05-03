import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const itemsGalleryMarkup = createItemGalleryMurkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemsGalleryMarkup);
console.log(galleryEl)

console.log(createItemGalleryMurkup(galleryItems));

function createItemGalleryMurkup(galleryItems) {
        return galleryItems.map(({ preview, original, description }) =>        
        (`<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`)).join('');      
};

let lightbox = new SimpleLightbox('.gallery a', {
    fadeSpeed: 250,
    overlayOpacity: 0.8,
    captionsData: "alt",
});



