const book = {
    title:"«Мастер и Маргарита»",
    author:"Булгаков М.А.",
    year: "1967 г.",
    pages: "480 стр.",
    available: true,
    info() {
        if (this.available === true) {
            return `${this.title}, ${this.author}, ${this.year}, ${this.pages}`
        }
    }
}
console.log(book.info())

const { rating = 0 } = book
console.log(book.title, book.author, rating)

const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const passeStudents = students
.filter(student => student.passed === true)
.map(student => student.name)
console.log(passeStudents)
console.log(students.find(student => student.grade > 4.5))
const sum = students.reduce((acc, n) => acc + n.grade, 0)
const avg = sum / students.length
console.log(avg.toFixed(1))

function mergeUsers(user1, user2) {
  return { ...user1, ...user2 }
}
const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }
const merge = mergeUsers(u1, u2)
console.log(merge)

function countByField(arr, field) {
    return arr.reduce((counter, item) => {
    const value = item[field]
    counter[value] = (counter[value] || 0) + 1
    return counter
  }, {})
}
const result = countByField(students, "passed")
console.log(result)