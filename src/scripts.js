import { fetchAllData } from './apiCalls';
import './css/base.scss';
import './css/styles.scss';
import User from './user';
import Recipe from './recipe';
import domUpdates from './dom-updates'

let allRecipesBtn = document.querySelector("#showAllBtn");
let filterBtn = document.querySelector("#filterBtn");
let fullRecipeInfo = document.querySelector("#recipeInstructions");
let main = document.querySelector("main");
let pantryBtn = document.querySelector("#myPantryBtn");
let savedRecipesBtn = document.querySelector("#savedRecipesBtn");
let searchBtn = document.querySelector("#searchBtn");
let searchForm = document.querySelector("#searchForm");
let searchInput = document.querySelector("#search-input");
let showPantryRecipes = document.querySelector("#showPantryRecipesBtn");
let tagList = document.querySelector("#tagList");
let userPantryInfo = [];
let recipes = [];
let cookbook = [];
let pantry = [];
let user;

window.addEventListener("load", loadData)
window.addEventListener("load", findTags);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", domUpdates.toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

//WINDOW LOADING FUNCTION

function loadData() {
  fetchAllData()
    .then(function(data) {
      fillCookbook(data[1].recipeData)
      fillPantry(data[0].ingredientsData)
      createCards(data[1].recipeData)
      findTags(data[1].recipeData)
      generateUser(data[2].usersData)
      findPantryInfo(data[0].ingredientsData)
    })
}

function fillCookbook(recipeData) {
  recipeData.forEach(recipe => cookbook.push(recipe))
}

function fillPantry(ingredientData) {
  ingredientData.forEach(ingredient => pantry.push(ingredient))
}

//CONTENT LOADING FUNCTIONS
function generateUser(userData) {
  user = new User(userData[Math.floor(Math.random() * userData.length)]);
  let firstName = user.name.split(" ")[0];
  domUpdates.addWelcomeMessage(firstName);
}

function createCards(recipeData) {
  recipeData.forEach(recipe => {
    let recipeInfo = new Recipe(recipe);
    let shortRecipeName = recipeInfo.name;
    recipes.push(recipeInfo);
    if (recipeInfo.name.length > 40) {
      shortRecipeName = recipeInfo.name.substring(0, 40) + "...";
    }
    domUpdates.addToDom(recipeInfo, shortRecipeName)
  });
}

// FILTER BY RECIPE TAGS
function findTags(recipeData) {
  let tags = [];
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  tags.sort();
  domUpdates.listTags(tags);
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
}

// FAVORITE RECIPE FUNCTIONALITY
function addToMyRecipes(event) {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.saveRecipe(cardId);
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe(cardId);
    }
  } else if (event.target.id === "exit-recipe-btn") {
    domUpdates.exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    openRecipeInfo(event);
  }
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function showSavedRecipes() {
  let unsavedRecipes = recipes.filter(recipe => {
    return !user.favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
  domUpdates.showMyRecipesBanner();
}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  fullRecipeInfo.style.display = "inline";
  let recipeId = event.path.find(e => e.id).id;
  let matchedRecipe = cookbook.find(recipe => recipe.id === Number(recipeId));
  let instantiatedRecipe = new Recipe(matchedRecipe)
  let matchedIngredients = generateIngredients(matchedRecipe)
  domUpdates.generateRecipeTitle(matchedRecipe, matchedIngredients);
  domUpdates.addRecipeImage(matchedRecipe);
  domUpdates.generateInstructions(matchedRecipe);
  domUpdates.generateCost(instantiatedRecipe, pantry);
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
}

function getIngredientName(id) {
  let match = pantry.find(ingredient => id === ingredient.id)
  if (match) {
    return match.name
  }
}

function generateIngredients(recipe) {
  return recipe.ingredients.map(i => {
    const ingredient = getIngredientName(i.id);
    let ingredientAmount = parseFloat(i.quantity.amount.toFixed(2))
    return `${domUpdates.capitalize(ingredient)} (${ingredientAmount} ${i.quantity.unit})`
  }).join(", ");
}

// SEARCH RECIPES
function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

function searchRecipes() {
  showAllRecipes();
  let searchedRecipes = cookbook.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  filterNonSearched(createRecipeObject(searchedRecipes));
}

function filterNonSearched(filtered) {
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function createRecipeObject(recipes) {
  recipes = recipes.map(recipe => new Recipe(recipe));
  return recipes
}

function showAllRecipes() {
  recipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "block";
  });
  domUpdates.showWelcomeBanner();
}

// CREATE AND USE PANTRY
function findPantryInfo(ingredientsData) {
  user.pantry.forEach(item => {
    let itemInfo = ingredientsData.find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = userPantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.amount = item.amount;
    } else if (itemInfo) {
      userPantryInfo.push({name: itemInfo.name, count: item.amount});
    }
  });
  domUpdates.displayPantryInfo(userPantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  let ingredientNames = selected.map(item => {
    return item.id;
  })
  recipes.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      let ingredientName = getIngredientName(ingredient.id)
      allRecipeIngredients.push(ingredientName);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}
