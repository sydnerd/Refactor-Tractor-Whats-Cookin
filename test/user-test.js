import { expect } from 'chai';

import User from '../src/user';
// import data from '../src/data/users-data';
import users from '../src/data/test-data-users';

describe.only('User', () => {
  let userInfo;
  let user1;
  let user2;
  let user3;
  let recipe;

  beforeEach(() => {
    user1 = users[0];
    // console.log('user1 <>>>', user1);
    user2 = users[1];
    user3 = users[2];
    recipe = {name: 'Chicken Parm', type: ['italian', 'dinner']};
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should store an id', () => {
    expect(user1.id).to.eq(1);
    expect(user2.id).to.eq(2);
    expect(user3.id).to.eq(3);
  });

  it.skip('should store a name', () => {
    expect(user2.name).to.eq('Saige O\'Kon');
  });

  it.skip('should store a pantry', () => {
    expect(user.pantry[0].ingredient).to.eq(11477);
  });

  it.skip('should store an empty favoriteRecipes array', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it.skip('should store an empty recipesToCook array', () => {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it.skip('should be able to save a recipe to favoriteRecipes', () => {
    user.saveRecipe(recipe);
    expect(user.favoriteRecipes[0].name).to.equal('Chicken Parm');
  });

  it.skip('should be able to decide to cook a recipe', () => {
    user.decideToCook(recipe);
    expect(user.recipesToCook[0].name).to.equal('Chicken Parm');
  });

  it.skip('should be able to filter recipes by type', () => {
    user.saveRecipe(recipe);
    expect(user.filterRecipes('italian')).to.deep.equal([recipe]);
  });

  it.skip('should be able to search recipes by name', () => {
    user.saveRecipe(recipe);
    expect(user.searchForRecipe('Chicken Parm')).to.deep.equal([recipe]);
  });
});
