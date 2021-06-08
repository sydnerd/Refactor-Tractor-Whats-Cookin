import { expect } from 'chai';
import Ingredient from '../src/ingredient';

describe('Ingredient', () => {

  let ingredient1, ingredient2, ingredient3;

  beforeEach('Instantiate ingredient', () => {
    ingredient1 = new Ingredient({ id: 1094, name: 'powdered sugar', estimatedCostInCents: 312 }, 1);
    ingredient2 = new Ingredient({ id: 234, name: 'eggs', estimatedCostInCents: 523 }, 2);
    ingredient3 = new Ingredient({ id: 23453, name: 'butter', estimatedCostInCents: 524 });
  });

  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('Should be an instance of an ingredient', () => {
    expect(ingredient1).to.be.an.instanceOf(Ingredient);
    expect(ingredient2).to.be.an.instanceOf(Ingredient);
    expect(ingredient3).to.be.an.instanceOf(Ingredient);
  });

  it('Should have an id', () => {
    console.log('ingre2 <>>>', ingredient2);
    console.log('ingre3 <>>>', ingredient3);
    expect(ingredient2.id).to.equal(234);
    expect(ingredient3.id).to.equal(23453);
  });

  it('Should have an id that is a number', () => {
    expect(ingredient1.id).to.be.a('number');
  });

  it('Should have a name', () => {
    expect(ingredient3.name).to.equal('butter');
  });

  it('Should have a name that is a string', () => {
    expect(ingredient1.name).to.be.a('string');
  });

  it('Should have an estimated cost in cents', () => {
    expect(ingredient2.estimatedCostInCents).to.equal(523);
  });

  it('Should have cost in cents be a number', () => {
    expect(ingredient3.estimatedCostInCents).to.be.a('number');
  });

  it('Should have a count to store the number of ingredient available', () => {
    expect(ingredient1.count).to.equal(1);
    expect(ingredient2.count).to.equal(2);
  })

  it('Should have a default count of zero if nothing is provided', () => {
    expect(ingredient3.count).to.equal(0);
  })

});
