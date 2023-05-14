import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//создаем функцию возвращающую строку разметки
function createListsItemsMurkup(items) {
  return items
    .map(
      item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`
    )
    .join(' ');
}

//кладем разметку в пременную listsItemsMurkup
const listsItemsMurkup = createListsItemsMurkup(galleryItems);
// console.log(listsItemsMurkup);

//добавляем ссылку на элемент разметки
const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);

//Добавляем элементы в DOM
function addListsItemsMurkup() {
  galleryRef.innerHTML = listsItemsMurkup;
}

//вызов функции
addListsItemsMurkup();

// добавляем слушателя событий
function addGalleryItemsListener() {
  galleryRef.addEventListener('click', event => {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery .gallery__link', {
      captionPosition: 'bottom',
      captionsData: 'alt',
      captionDelay: 250,
    });

    lightbox.on('closed.simplelightbox', () => lightbox.refresh());

    return;
  });
}

addGalleryItemsListener();
