const ocenki = [4, 5, 3, 5, 2, 4, 5, 3]
const sum = ocenki.reduce((acc, n) => acc + n, 0)
const avg = sum / ocenki.length
console.log(avg.toFixed(2))


function lol(value) {
    return value > 2
}
const good = ocenki.filter(lol)
const excel = good.map(good => `Оценка: ${good}`)
console.log(excel)


const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
console.log(fruits.sort().join(", "))

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
function prices(item) {
    if (Number.isFinite(item.price) && item.price < 10000) {
    return true;
    }
} 
function names(item) {
    return item.name
}
const total = products.reduce((sum, item) => sum + item.price, 0)
console.log(products.filter(prices))
console.log(products.map(names))
console.log(total)


const soup = [12, 45, 7, 33, 18]
console.log(soup.some(n => n > 40))
console.log(soup.every(n => n > 5))