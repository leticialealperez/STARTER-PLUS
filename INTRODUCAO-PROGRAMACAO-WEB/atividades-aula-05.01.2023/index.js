// posso querer capturar apenas 1 elemento


// busco pelo ID - getElementById('')
const paragrafo = document.getElementById('paragrafo')
// console.log('POR ID', paragrafo)


// busca o primeiro elemento que atender ao seletor CSS - querySelector()
const paragrafoQuery = document.querySelector('#paragrafo')
// console.log('POR QUERY SELECTOR', paragrafo)



// posso querer capturar várias elementos

// pelo atributo "name" - gets


// pelo nome da tag - gets
const paragrafos = document.getElementsByTagName('p')
console.log(paragrafos)


// capturar todos os elementos que atenderem ao seletor - querySelectorAll()
const paragrafosQuery = document.querySelectorAll('p')
console.log(paragrafosQuery)


// pelo nome da classe - gets
let paragrafosTextos = document.getElementsByClassName('texto')
console.log(paragrafosTextos)

const paragrafosQueryClass = document.querySelectorAll('.texto')
console.log(paragrafosQueryClass)


// let lista = [1, 2, 3]
// console.log(lista)

// HTMLCollection só pode ser percorrido com for of pois não é Array
// for(const elemento of paragrafosTextos) {
//     elemento.setAttribute('style', 'color: blue')
// }
