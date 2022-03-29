const createTargetBtnMarkup=document.querySelector('.js-create-target-btn');


const makeTarketBtnMarkupModule = () => {
  makeTargetBtn();
  makeAddListenerBtn();
  makeRemoveEventListenerBtn();
}
// console.log(makeTarketBtnMarkupModule())

function makeTargetBtn ( ){
  return `<button type='button' class='btn js-terget-btn'>Целевая кнопка</button>`
}

function makeAddListenerBtn ( ){
  return `<button type='button' class='btn js-add-event-listener-btn'>Добавить слушателя событий</button>`
}

function makeRemoveEventListenerBtn ( ){
  return `<button type='button' class='btn js-remove-event-listener-btn'>Удалить слушателя событий</button>`
}

// console.log(5)