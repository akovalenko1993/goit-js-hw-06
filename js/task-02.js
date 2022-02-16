const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const ingredientsListItem = document.createElement('li')
  
  ingredientsListItem.textContent = ingredient; 
  ingredientsListItem.classList.add('item');
  ingredientsList.append(ingredientsListItem);
};