const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = document.querySelector('#ingredients');
const element = ingredients.map(el => {
  const newEl = document.createElement('li');
  newEl.textContent = el;
  newEl.classList.add('item');
  return newEl;
});
itemEl.append(...element);
