const apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
// fetch the meal data from the API

// for fetching recipes and determining the meal category based on the button
// clicked I applied asynchronisation function recipes
async function fetchRecipes(mealType) {
  let category = "";
  if (mealType === "breakfast") category = "Breakfast";
  else if (mealType === "lunch") category = "Seafood";
  else category = "Beef";
  // Assuming dinner

  // Calls the API using fetch then waits for the response change to json
  const response = await fetch(apiURL + category);
  const data = await response.json();

  // passes the meal data to displayRecipes
  displayRecipes(data.meals);
}

// Gets the recipes container and clears previous results innerHTML
function displayRecipes(meals) {
  const recipeContainer = document.getElementById("recipes");
  recipeContainer.innerHTML = "";

  // Loop through the meals and creating a div card for each one
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("recipe-card");
    // Sets the image, title, and View Recipe button inside mealCard.
    mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <button onclick="viewRecipe('${meal.idMeal}')">View Recipe</button>
        `;
    recipeContainer.appendChild(mealCard);
  });
}
//   View Recipe Fetches detailed recipe data When is clicked
async function viewRecipe(mealId) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  const data = await response.json();
  const meal = data.meals[0];

  // Get modal elements
  const modal = document.getElementById("recipeModal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalInstructions = document.getElementById("modal-instructions");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Set modal content
  modalTitle.textContent = meal.strMeal;
  modalImage.src = meal.strMealThumb;
  modalInstructions.textContent = meal.strInstructions;

  // Show modal
  modal.style.display = "block";

  // Close modal when clicking (x)
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal when clicking outside
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
