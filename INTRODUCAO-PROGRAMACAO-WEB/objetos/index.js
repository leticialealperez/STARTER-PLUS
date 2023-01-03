// // strings, number, boolean
// [10, 20, 50, 50]

// // INDICE = 0
// // VALOR = 10

// { propriedade: 50 }

// // PROPRIEDADE = chave de acesso ao valor "propriedade"
// // VALOR = 50

// const aluno = {
//     nome: 'João',
//     idade: 27,
//     matricula: '155454-3',
//     ativo: true,
//     ocorrencias: []
// }


// const turma = [];
// const nome = prompt("Digite seu nome:")
// const idade = prompt("Digite sua idade:")

// let aluno = {
//     nome: nome,
//     idade: idade
// }

// turma.push(aluno)

// console.log(turma[0].nome)



/*

Crie um objeto em JavaScript para colocar dois atributos de um produto. Atribua o preço e descrição do produto com o valor “90” e a descrição com o valor “Mouse”. Mostre no console o valor dos dois atributos.

*/


/*

Crie um objeto em JavaScript para colocar 5 atributos de um notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, utilizando o laço for in, mostre o nome e valor de cada atributo no console.

*/
// let listaNumeros = [10, 20, 30]

// FOR OF - arrays - acessa o valor de cada posição
// for(const numero of listaNumeros) {
//     console.log(numero)
// }


// FOR IN - acessar os índices/propriedade de um array OU objeto
// const aluno = {
//     nome: 'Joao',
//     idade: 27,
//     matricula: '1122-3'
// }

// for(const propriedade in aluno) {
//     console.log(`${propriedade} = ${aluno[propriedade]}`)
    
// }


/*

Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno. Agora crie mais um objeto para colocar informações do nosso segundo aluno. Mostre as informações de cada aluno no console. Mostre também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta turma de 2 alunos.

*/


/*

Crie cinco objetos JavaScript dentro de um Array contendo nome(texto), idade(número), skills (array), ou seja um total de cinco alunos. 
Agora crie uma função que receba estes cinco objetos e mais um parâmetro skill. Dependendo da skill enviada mostrar no console.log(), quais alunos têm a skill enviada por parâmetro, mostrar todo o objeto.
Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. Se mandar chamar a função enviando (alunos, “JavaScript”), precisa mostrar o Pedro e qual mais se encaixa nessa skill.

*/
// const aluno1 = {
//     nome: 'João',
//     idade: 27,
//     skills: ['Javascript', 'HTML']
// }

// const aluno2 = {
//     nome: 'Maria',
//     idade: 25,
//     skills: ['CSS', 'Javascript']
// }

// const aluno3 = {
//     nome: 'Pedro',
//     idade: 20,
//     skills: ['Typescript', 'React']
// }

// const aluno4 = {
//     nome: 'Joaquim',
//     idade: 32,
//     skills: ['Javascript', 'HTML', 'CSS']
// }

// const aluno5 = {
//     nome: 'Tiago',
//     idade: 25,
//     skills: ['Javascript', 'HTML', 'CSS', 'Typescript', 'React']
// }

// const turma = [aluno1, aluno2, aluno3, aluno4, aluno5]

// buscaSkill(turma, 'React')

// function buscaSkill(listaAlunos, skillBuscada) {
    
//     console.log(listaAlunos)
//     console.log(skillBuscada)

//     console.log('')

//     const novaLista = listaAlunos.filter((aluno, index, array) => {
        
//         const existe = aluno.skills.some((valor) => valor === skillBuscada)

//         console.log(existe)
//         return existe === true
//     })

//     console.log('NOVA LISTA', novaLista)
  
// }




const pessoas = [
    // [0]
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },

    // [1]
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },

    // [2]
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },

    // [3]
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },

    // [4]
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },

    // [5]
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },

    // [6]
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];

// 1 - tamanho total da lista? 
console.log(`A quantidade total de pessoas é ${pessoas.length}`)

// 2 - filtrar apenas as pessoas do sexo Feminino e dizer qual o tamanho total da lista retornada pelo filter
const listaF = pessoas.filter((pessoa) => pessoa.sexo === 'F')
console.log(`A quantidade total de pessoas do sexo Feminino é ${listaF.length}`)


// 3 - Imprima no console a soma do salário de todas as pessoas.
let soma = 0;

pessoas.forEach((pessoa) => {
    soma += pessoa.salario
})

// REDUCE - retorna apenas 1 dado resultado do processamento feito da lista
const somaReduce = pessoas.reduce( (soma, pessoa) => soma += pessoa.salario, 0)

console.log(`A soma de todos os salários é ${somaReduce}`)


// 4 - Imprima no console a soma do salario de todos as pessoas do sexo Masculino
const somaM = pessoas.reduce( (soma, pessoa) => {
    if(pessoa.sexo === 'M') {
        return soma += pessoa.salario
    }

    // mantem o valor que tinha em soma
    return soma
}, 0)

console.log(`A soma de todos os salários de pessoas do sexo Masculino é ${somaM}`)


// 5 - Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
const existe = pessoas.some((pessoa) => pessoa.salario > 7000)

console.log(existe ? 'verdadeiro' : 'falso')
// if(existe){
//     console.log('verdadeiro')
// } else {
//     console.log('falso')
// }

// idade > 18  ? true  : false


// 6 - Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
const indiceEncontrado = pessoas.findIndex((pessoa) => pessoa.nome === 'Eva Trindade');
console.log(indiceEncontrado === -1 ? 'Não encontrado' : `O indice na lista da pessoa chamada Eva Trindade é ${indiceEncontrado}`)


// 7 - Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
const silvas = pessoas.filter((pessoa) => pessoa.nome.includes('Silva'))
console.log(silvas)

console.log('Joao da Silva Souza'.includes('Souza')) // true


// 8 - imprima os nomes utilizando o MAP
const nomes = pessoas.map((pessoa) => {
    return {
        nome: pessoa.nome.toUpperCase(),
        salario: pessoa.salario * 2
    }
})
console.log(nomes)

// CRUD - CONTATOS
// nome, telefone

// Ex: { nome: Aryadne, phone: '5199887766' }
// não adicionar na lista se o telefone já estiver cadastrado

// C -> CREATE -> CRIAR
// clicar num botão com nome "criar novo contato" -> executar uma função


// R -> READ -> LER/LISTAR
// clicar num botão "listar contatos" e percorrer a lista de contatos mostrando no html nome e telefone


// U -> UPDATE -> ATUALIZAR
// D -> DELETE -> DELETAR







