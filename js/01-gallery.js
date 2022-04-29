import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGalleryEl = document.querySelector('.gallery');
const itemsGalleryMarkup = createItemGalleryMurkup(galleryItems);
divGalleryEl.insertAdjacentHTML('beforeend', itemsGalleryMarkup);
console.log(divGalleryEl);


console.log(createItemGalleryMurkup(galleryItems));

function createItemGalleryMurkup(galleryItems) {
        return galleryItems.map(({ preview, original, description }) =>
        
        `<div class="gallery__item">
            <a class="gallery__link"
                data-lightbox="images"
                href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"                
                alt="${description}"
                />
            </a>
        </div>`).join('');    
};

divGalleryEl.addEventListener('click', onOpenGalleryItem);

function onOpenGalleryItem(event) {
    if (!event.target.classlist.contains('gallery__image')) {
        return;
    }
    console.log(event.target.dataset.sourse);
}


console.log(galleryItems);

    
   

