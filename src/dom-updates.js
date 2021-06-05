let domUpdates = {
  addWelcomeMessage(firstName) {
    let welcomeMsg = `
      <div class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </div>`;
    document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
      welcomeMsg);
  },

  addToDom(recipeInfo, shortRecipeName) {
    let cardHtml = `
      <div class="recipe-card" id=${recipeInfo.id}>
        <h3 maxlength="40">${shortRecipeName}</h3>
        <div class="card-photo-container">
          <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
          <div class="text">
            <div>Click for Instructions</div>
          </div>
        </div>
        <h4>${recipeInfo.tags[0]}</h4>
        <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
      </div>`
    document.querySelector("main").insertAdjacentHTML("beforeend", cardHtml);
  },

  listTags(allTags) {
    allTags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}">${this.capitalize(tag)}</label></li>`;
      tagList.insertAdjacentHTML("beforeend", tagHtml);
    });
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  generateRecipeTitle(recipe, ingredients) {
    let recipeTitle = `
      <button id="exit-recipe-btn">X</button>
      <h3 id="recipe-title">${recipe.name}</h3>
      <h4>Ingredients</h4>
      <p>${ingredients}</p>`
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", recipeTitle);
  },

  addRecipeImage(recipe) {
    document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
  },

  generateInstructions(recipe) {
    let instructionsList = "";
    let instructions = recipe.instructions.map(i => {
      return i.instruction
    });
    instructions.forEach(i => {
      instructionsList += `<li>${i}</li>`
    });
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", "<h4>Instructions</h4>");
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", `<ol>${instructionsList}</ol>`);
  },

  generateCost(recipe, pantry) {
    let recipeCost = recipe.calculateIngredientsCost(pantry);
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", `<h4>Recipe Cost: $${recipeCost}</h4>`)
  }
}

export default domUpdates;
