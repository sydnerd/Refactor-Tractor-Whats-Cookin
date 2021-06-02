import { expect } from 'chai';
import Ingredient from '../src/ingredient';

describe.only('Ingredient', () => {

  let ingredient;

  beforeEach('Instantiate ingredient', () => {
    ingredient = new Ingredient(1094, 'powdered sugar', 312);
  });

  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('Should be an instance of an ingredient', () => {
    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it('Should have an id', () => {
    expect(ingredient.id).to.equal(1094);
  });

  it('Should have an id that is a number', () => {
    expect(ingredient.id).to.be.a('number');
  });

  it('Should have a name', () => {
    expect(ingredient.name).to.equal('powdered sugar');
  });

  it('Should have a name that is a string', () => {
    expect(ingredient.name).to.be.a('string');
  });

  it('Should have an estimated cost in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(312);
  });

  it('Should have cost in cents be a number', () => {
    expect(ingredient.estimatedCostInCents).to.be.a('number');
  });

});

//
//   it('Should have a cost that is a number', () => {
//     expect(ingredient.estimatedCostInCents).to.be.a('number');
//   });
// })
