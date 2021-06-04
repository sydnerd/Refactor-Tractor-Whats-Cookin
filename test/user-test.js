import { expect } from 'chai';

import User from '../src/user';
import { users, testRecipes } from '../src/data/test-data-users';


describe.only('User', () => {
  let userInfo;
  let user1;
  let user2;
  let user3;
  let recipe;

  beforeEach(() => {
    user1 = new User(users[0]);
    user2 = new User(users[1]);
    user3 = new User(users[2]);
    recipe = testRecipes[0];
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be a new instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  })

  it('should store an id', () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
    expect(user3.id).to.equal(3);
  });

  it('should store a name', () => {
    expect(user1.name).to.equal('Padme Amidala');
    expect(user2.name).to.equal('Ahsoka Tano');
    expect(user3.name).to.equal('Leia Organa');
  });

  it('should store a pantry', () => {
    expect(user1.pantry[0].ingredient).to.equal(1);
    expect(user2.pantry[1].ingredient).to.equal(3);
    expect(user3.pantry[2].ingredient).to.equal(5);
  });

  it('should store an empty favoriteRecipes array', () => {
    expect(user1.favoriteRecipes).to.deep.equal([]);
    expect(user2.favoriteRecipes).to.deep.equal([]);
    expect(user3.favoriteRecipes).to.deep.equal([]);
  });

  it('should store an empty recipesToCook array', () => {
    expect(user2.recipesToCook).to.deep.equal([]);
  });

  it('should be able to save a recipe to favoriteRecipes', () => {
    user3.saveRecipe(recipe);
    expect(user3.favoriteRecipes[0].name).to.equal('Rice bowl with Fried Egg');
  });

  it('should be able to decide to cook a recipe', () => {
    user1.decideToCook(recipe);
    user2.decideToCook(recipe);
    user3.decideToCook(recipe);

    expect(user1.recipesToCook[0].id).to.equal(1);
    expect(user2.recipesToCook[0].tags).to.deep.equal([
      "breakfast",
      "morning meal",
      "snack",
      "appetizer"
    ]);
    expect(user3.recipesToCook[0].name).to.equal('Rice bowl with Fried Egg');
  });

  it('should be able to filter recipes by type', () => {
    user2.saveRecipe(recipe);

    expect(user2.filterRecipes('breakfast')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by name', () => {
    user3.saveRecipe(recipe);

    expect(user3.searchForRecipe('Rice bowl with Fried Egg')).to.deep.equal([recipe]);
  });

  it('should be able to search a portion of the name', () => {
    user1.saveRecipe(recipe);

    expect(user1.searchForRecipe('bowl')).to.deep.equal([recipe]);
  })
});
