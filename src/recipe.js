class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
  }
  calculateIngredientsCost(ingredients) {
    const totalCost = this.ingredients.reduce((acc, currentIngredient) => {
      let foundIngredient = ingredients.find(ingredient => ingredient.id === currentIngredient.id)
      acc += currentIngredient.quantity.amount * foundINgredient.estimatedCostInCents;
      return acc
    },0)
    return totalCost
  }
}

module.exports = Recipe;
