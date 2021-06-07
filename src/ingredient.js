class Ingredient {
  constructor(ingredient, amount) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
    this.count = amount;
    this.ingredientModification = 0;
  }
}

export default Ingredient;
