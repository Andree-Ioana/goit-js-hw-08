// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

 const galleryContainer = document.querySelector(".gallery");
const createGallaryItems = galleryItems.map(({original, preview, description}) => 
    `<li class = "gallery__item"> 
        <a class = "gallery__link" href = "${original}">
            <img class = "gallery__image" src = "${preview}"
             data-source = "${original}" alt = "${description}" >

             </img>
        </a>
    </li>`).join("");
    

    galleryContainer.insertAdjacentHTML('beforeend', createGallaryItems);

    const galleryHandler = new SimpleLightbox('ul.gallery a',
     { captionsData: 'alt', captionDelay: 250 
    });
    galleryHandler.on("show.SimpleLightbox");