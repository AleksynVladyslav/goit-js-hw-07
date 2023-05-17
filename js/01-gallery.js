import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onGalleryItemClick);

//функция возвращающая строку разметки
function createListItemsMurkup(items) {
  return items
    .map(
      item =>
        `<li class = 'gallery__item'><a class="gallery__link" href = "${item.original}"><img class = "gallery__image" src="${item.preview}" data-source = "${item.original}" alt = "${item.description}" ></a></li>`
    )
    .join('');
}

//В переменную listItemsMurkup добавляем разметку
const listItemsMurkup = createListItemsMurkup(galleryItems);

//Функция добавляющая эл-ты в DOM
function addListItemsMurkup() {
  galleryRef.innerHTML = listItemsMurkup;
}
//Вызываем addListItemsMurkup
addListItemsMurkup();

//CallBack функция
function onGalleryItemClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
        <img src="${imageSrc}" width="800" height="600">
      `);
  instance.show();
}
