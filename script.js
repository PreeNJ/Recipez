  function searchRecipe() {
    let searchBox = document.getElementById("searchBox").ariaValueMax;
    let apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`;

    // fetch(apiURL)
    // .then(response = response.json())
    // .then (data => {
    //     IdleDeadline(data.meals){
    //         let meal = data.meals[0];
    // //     }
    // })
  }