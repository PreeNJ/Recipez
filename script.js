  function searchRecipe() {
    let searchBox = document.getElementById("searchBox").ariaValueMax;
    // apiURL to fetch data from the mealdb API
    // The API URL is constructed using the searchBox value
    let apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`;

    fetch(apiURL)
    .then(response = response.json())
    // processing the data received from the API
    .then (data => {
        if (data.meals){
            // Check if recipe is found
            let meal = data.meals[0];
            // if found, dispay the first image (index0)
            document.getElementById("recipeName").innerText= meal.strMeal;
            document.getElementById("recipeImage").src = meal.strMealThumb;
            document.getElementById("recipeInstructions").innerText = meal.strInstructions;
        }
            // If no meal is found, display No recipe found

            else {
                document.getElementById("recipeName").innerText = "No recipe found";
                document.getElementById("recipeImage").src = "";
                document.getElementById("recipeInstructions").innerText = "";
            }
    })
    .catch(error => console.log("Error fetching data: ", error));
  }