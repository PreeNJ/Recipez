  function searchRecipe() {
    let searchBox = document.getElementById("searchBox").ariaValueMax;
    let apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`;
    
  }