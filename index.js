const _ = require('lodash');

// _.times(4, () => { print() });

// const print = () => { console.log('Hello World') }

// accumulator
// current value
// current index
// source array

const arr = [1, 2, 3, 4, 5];
let sum = _.reduce(arr, (total, next) => { return total + next });
console.log('Sum: ' + sum);

const sar = ['Sarajevo', 'Zenica', 'Tuzla', 'Mostar', 'Bihac', 'Travnik'];
let chain = _.reduceRight(sar, (total, next) => { return `${total}-${next}` });
console.log('Chain: ' + chain);

const person = { name: 'Antonio Banderas', age: 50, job: 'actor' };
const keys = _.keys(person);
console.log(_.join(keys, ','));
const vals = _.values(person);
console.log(_.join(vals, ','));