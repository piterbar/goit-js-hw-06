const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//-------------------------------

const ingredientsList = document.querySelector("#ingredients");

console.log(ingredientsList);

console.log(ingredients);

const listNew = ingredients.map((ingredient) => {
  const listNew = document.createElement("li");
  listNew.textContent = ingredient;
  listNew.classList.add("item");
  return listNew;
});

ingredientsList.append(...listNew);