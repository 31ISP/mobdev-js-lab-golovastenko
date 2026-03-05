const sentence = "  javascript — это просто!  "
console.log(sentence.trim()[0].toUpperCase() + sentence.trim().slice(1))

const stringname = "Иван"
const surname = "Иванов"
const group = "ИСР-21"
const avgrating = "4.75"
console.log(`Студент ${surname} ${stringname}, группа: ${group}, средний балл: ${avgrating}`)

const date = "2025-03-15"
const dates = date.split("-")
console.log(`${dates[2]}.${dates[1]}.${dates[0]}`)

const node = "Node.js разработчик"
console.log(node.startsWith("Node"), node.endsWith("разработчик"))

const sorokdva = "42"
console.log(sorokdva.padStart(8, 0))