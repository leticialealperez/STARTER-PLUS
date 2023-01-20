const contato1 = {
    nome: 'Joao',
    telefone: '519999999'
}

const contato2 = {
    nome: 'Maria',
    telefone: '519988888'
}


const listaContatos = [contato1, contato2] 

// localStorage - armazena preferencias do usuário
// qualquer storage só armazena dados primitivos
// strings, numeros e booleanos são armazenados de boa sem precisar converter

// arrays e objetos precisam ser convertidos em JSON

// converter arrays e objetos em JSON -> JSON.stringify()
// console.log(listaContatos)

const listaJSON = JSON.stringify(listaContatos)
//console.log(listaJSON)

// setItem() - criar os registros no localStorage
window.localStorage.setItem('testeRegistro', true)
window.localStorage.setItem('contatos', listaJSON)




// getItem() - buscar registro do localStorage

// converter JSON em array ou objeto novamente -> JSON.parse()
const contatosJSON = window.localStorage.getItem('contatos')
console.log(contatosJSON)


const contatos = JSON.parse(contatosJSON)
console.log(contatos)


let contatosFavoritos = window.localStorage.getItem('contatosFavoritos')
contatosFavoritos = JSON.parse(contatosFavoritos)

if(!contatosFavoritos) {
    contatosFavoritos = []
}

contatosFavoritos.forEach((valor) => console.log(valor))



// removeItem() - exclui um registro do localStorage
window.localStorage.removeItem('teste2')
window.localStorage.removeItem('testeRegistro')



// clear() - excluir tudo que está armazenado no localStorage
window.localStorage.clear()



