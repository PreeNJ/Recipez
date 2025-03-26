const apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
// fetch the meal data from the API

// asynchronisation function to fetch recipes and Determine the meal category based on the button clicked
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