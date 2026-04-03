const temperature = 36.6789
console.log(temperature.toFixed(1))

const a = 17
const b = 5
console.log(Math.floor(a/b), `Остаток от деления ${a%b}`)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInt(1, 10))

console.log(isNaN("100" / 5))
console.log(isNaN("сто" / 5))

console.log(Math.max(14, -3, 77, 0, -100, 42))
console.log(Math.min(14, -3, 77, 0, -100, 42))