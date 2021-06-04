import { expect } from 'chai';

import User from '../src/user';
// import data from '../src/data/users-data';
import { users, testRecipes } from '../src/data/test-data-users';


describe.only('User', () => {
  let userInfo;
  let user1;
  let user2;
  let user3;
  let recipe;

  beforeEach(() => {
    user1 = new User(users[0]);
    // console.log('user1 <>>>', user1);
    user2 = new User(users[1]);
    user3 = new User(users[2]);
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

  it('should store a name', () => {
    expect(user1.name).to.eq('Padme Amidala');
    expect(user2.name).to.eq('Ahsoka Tano');
    expect(user3.name).to.eq('Leia Organa');
  });

  it('should store a pantry', () => {
    expect(user1.pantry[0].ingredient).to.eq(1);
    expect(user2.pantry[1].ingredient).to.eq(3);
    expect(user3.pantry[2].ingredient).to.eq(5);
  });

  it('should store an empty favoriteRecipes array', () => {
    expect(user1.favoriteRecipes).to.deep.equal([]);
  });

  it('should store an empty recipesToCook array', () => {
    expect(user2.recipesToCook).to.deep.equal([]);
  });

  it('should be able to save a recipe to favoriteRecipes', () => {
    user3.saveRecipe(recipe);
    expect(user3.favoriteRecipes[0].name).to.equal('Chicken Parm');
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
