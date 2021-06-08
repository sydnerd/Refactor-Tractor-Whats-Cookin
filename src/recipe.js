class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
  }


  calculateIngredientsCost(ingredientDataset) {
    const totalCost = this.ingredients.reduce((acc, currentIngredient) => {
      let foundIngredient = ingredientDataset.find(ingredient => ingredient.id === currentIngredient.id);
      acc += currentIngredient.quantity.amount * foundIngredient.estimatedCostInCents;
      return acc;
    }, 0);
    return totalCost / 100;
  }
}

module.exports = Recipe;
