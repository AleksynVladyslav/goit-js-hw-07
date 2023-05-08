import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';

// Change code below this line

console.log(galleryItems);

//Ссылки на элементы разметки
const refs = {
  listRef: document.querySelector('.gallery'),
};

const listItemsMurkup = createListItemsMurkup(galleryItems);

addListItemsMurkup(listItemsMurkup);

//Добавляем слушателя
refs.listRef.addEventListener('click', onSelectImage);

//функция возвращающая строки разметки
function createListItemsMurkup(items) {
  return items
    .map(
      item => `<li><img src="${item.preview}" alt = "${item.description}"></li>`
    )
    .join('');
}

//Функция добавляющая разметку в DOM
function addListItemsMurkup(murkup) {
  refs.listRef.innerHTML = murkup;
}

//Callback функция
function onSelectImage(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  //   const instance = basicLightbox.create(`
  //     <img src="${galleryItems[0].original}" width="800" height="600">
  // `);

  //   instance.show();
}
