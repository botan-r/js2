/* Реализуйте каррирование для функции сложения чисел sum() */

function sum(a, b){
  return a + b;
}
console.log(sum(3, 5)); //8

const sum2 = function (a){
  function fn (b){
    return a + b;
  }
  return fn;
}

console.log(sum2(3)(5)); //8