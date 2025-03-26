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

    // Calls the API using fetch then waits for the response.. then change to json
    const response = await fetch(apiURL + category);
    const data = await response.json();
    
// passes the meal data to displayRecipes
    displayRecipes(data.meals);
}

// Gets the #recipes container and clears previous results innerHTML"""
function displayRecipes(meals) {
    const recipeContainer = document.getElementById("recipes");
    recipeContainer.innerHTML = "";

    // Loop through the meals and create a card for each one
    meals.forEach(meal => {
        const mealCard = document.createElement("div");
        mealCard.classList.add("recipe-card");
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <button onclick="viewRecipe('${meal.idMeal}')">View Recipe</button>
        `;
        recipeContainer.appendChild(mealCard);
    });
    
}