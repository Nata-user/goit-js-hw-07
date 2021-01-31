const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listForAddItems = document.querySelector(`#ingredients`);
const addListItems = (array) => {
    const listArray = array.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    })
    listForAddItems.append(...listArray);
}
addListItems(ingredients);
console.log(ingredients);



