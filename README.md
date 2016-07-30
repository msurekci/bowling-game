# bowling-game

Bowling Game exercise in Javascript

[![Dependency Status](https://david-dm.org/msurekci/bowling-game.svg)](https://david-dm.org/msurekci/bowling-game)
[![devDependency Status](https://david-dm.org/msurekci/bowling-game/dev-status.svg)](https://david-dm.org/msurekci/bowling-game#info=devDependencies)

[generate-babel-boilerplate](https://github.com/babel/generator-babel-boilerplate) was used to create the initial structure.

A more functional approach was taken rather than a OO approach as the complexity is far less.

Built using ES2015/ES6 features such as arrow functions.

Both scoreCalculator and getValueOfRolls functions are [idempotent](https://github.com/hemanth/functional-programming-jargon#idempotent). However, the functions within those have [side effects](https://github.com/hemanth/functional-programming-jargon#side-effects). It would be nice to remove those to make them easily available in the future without being concerned about the implications.
