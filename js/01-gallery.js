import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGalleryEl = document.querySelector('.gallery');
const itemsGalleryMarkup = createItemGalleryMurkup(galleryItems);
divGalleryEl.insertAdjacentHTML('beforeend', itemsGalleryMarkup);
console.log(divGalleryEl)

console.log(createItemGalleryMurkup(galleryItems));

function createItemGalleryMurkup(galleryItems) {
        return galleryItems.map(({ preview, original, description }) =>        
        `<div class="gallery__item">
            <a class="gallery__link" data-lightbox="images"  href="${original}">
                <img class="gallery__image"
                src="${preview}" 
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>`).join('');      
};

divGalleryEl.addEventListener('click', onOpenGalleryItem);

function onOpenGalleryItem(event) { 
    
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    const eventImageEl = event.target.dataset.source;    
    const instance = basicLightbox.create(`<img src="${eventImageEl}">`);       
    instance.show();

    window.addEventListener('keydown', onCloseImgEsc);

    function onCloseImgEsc(event) {
        if (event.code !== "Escape") {
            return;
        }
        instance.close();
    }
}
    




    
   

