import { expect } from 'chai';

import User from '../src/user';
import { users, testRecipes } from '../src/data/test-data-users';


describe('User', () => {
  let user1;
  let user2;
  let user3;
  let recipe1;
  let recipe2;

  beforeEach(() => {
    user1 = new User(users[0]);
    user2 = new User(users[1]);
    user3 = new User(users[2]);
    recipe1 = testRecipes[0];
    recipe2 = testRecipes[1];
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be a new instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceof(User);
    expect(user3).to.be.an.instanceof(User);
  })

  it('should store an id', () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
    expect(user3.id).to.equal(3);
  });

  it('should store the id as a number', () => {
    expect(user1.id).to.be.a('number');
    expect(user2.id).to.be.a('number');
    expect(user3.id).to.be.a('number');
  });

  it('should store a name', () => {
    expect(user1.name).to.equal('Padme Amidala');
    expect(user2.name).to.equal('Ahsoka Tano');
    expect(user3.name).to.equal('Leia Organa');
  });

  it('should store the name as a string', () => {
    expect(user1.name).to.be.a('string');
    expect(user2.name).to.be.a('string');
    expect(user3.name).to.be.a('string');
  });

  it('should store a pantry', () => {
    expect(user1.pantry[0].ingredient).to.equal(1);
    expect(user2.pantry[1].ingredient).to.equal(3);
    expect(user3.pantry[2].ingredient).to.equal(5);
  });

  it('should store the pantry as an array', () => {
    expect(user1.pantry).to.be.an('array');
    expect(user2.pantry).to.be.an('array');
    expect(user3.pantry).to.be.an('array');
  });

  it('should store an empty favoriteRecipes array', () => {
    expect(user1.favoriteRecipes).to.deep.equal([]);
    expect(user2.favoriteRecipes).to.deep.equal([]);
    expect(user3.favoriteRecipes).to.deep.equal([]);
  });

  it('should store an empty recipesToCook array', () => {
    expect(user1.recipesToCook).to.deep.equal([]);
    expect(user2.recipesToCook).to.deep.equal([]);
    expect(user3.recipesToCook).to.deep.equal([]);
  });

  it('should be able to save a recipe to favoriteRecipes', () => {
    user3.saveRecipe(recipe1);

    expect(user3.favoriteRecipes[0].name).to.equal('Rice bowl with Fried Egg');
  });

  it('should remove a recipe if it is not a favorite anymore', () => {
    user1.saveRecipe(recipe1);
    user2.saveRecipe(recipe2);
    user2.saveRecipe(recipe1);

    expect(user1.favoriteRecipes[0].id).to.equal(1);
    expect(user2.favoriteRecipes[0].name).to.equal('Avocado and Tomatillo Salsa');

    user1.removeRecipe(recipe1);
    user2.removeRecipe(recipe2);

    expect(user1.favoriteRecipes).to.deep.equal([]);
    expect(user2.favoriteRecipes[0].name).to.equal('Rice bowl with Fried Egg');
  });

  it('should be able to decide to cook a recipe', () => {
    user1.decideToCook(recipe1);
    user2.decideToCook(recipe1);
    user3.decideToCook(recipe1);

    expect(user1.recipesToCook[0].id).to.equal(1);
    expect(user2.recipesToCook[0].tags).to.deep.equal([
      "breakfast",
      "morning meal",
      "snack",
      "appetizer"
    ]);
    expect(user3.recipesToCook[0].name).to.equal('Rice bowl with Fried Egg');
  });

  it('should be able to filter recipes by tag', () => {
    user2.saveRecipe(recipe1);
    user3.saveRecipe(recipe1);
    user3.saveRecipe(recipe2);

    expect(user2.filterRecipes('breakfast')).to.deep.equal([recipe1]);
    expect(user3.filterRecipes('snack')).to.deep.equal([recipe1, recipe2]);
  });

  it('should return an empty array if no recipes match the filter search', () => {
    expect(user1.filterRecipes('snack')).to.deep.equal([]);
  });

  it('should be able to search recipes by name', () => {
    user3.saveRecipe(recipe1);

    expect(user3.searchForRecipe('Rice bowl with Fried Egg')).to.deep.equal([recipe1]);
  });

  it('should be able to search a portion of the name', () => {
    user1.saveRecipe(recipe1);
    user2.saveRecipe(recipe1);
    user2.saveRecipe(recipe2);

    expect(user1.searchForRecipe('bowl')).to.deep.equal([recipe1]);
    expect(user2.searchForRecipe('Avocado')).to.deep.equal([recipe2]); // can't test for ingredient names yet; the data only contains the id at this stage
  });

  it('should return an empty array if no recipes match the search', () => {
    expect(user2.searchForRecipe('potato')).to.deep.equal([]);
  });
});
