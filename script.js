const apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
// fetch the meal data from the API

// asynchronisation function to fetch recipes and Determine the meal category based on the button clicked
async function fetchRecipes(mealType) {
    let category = "";
    if (mealType === "breakfast") category = "Breakfast";
    else if (mealType === "lunch") category = "Seafood";
    else category = "Beef"; 
    // Assuming dinner

    const response = await fetch(apiURL + category);
    const data = await response.json();
    displayRecipes(data.meals);
}