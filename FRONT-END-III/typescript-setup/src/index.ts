// import de um módulo exportado como DEFAULT
// import criarNovoUsuario from './criarNovoUsuario';

// import de um módulo exportado como NÃO DEFAULT
import { novoUsuario } from './criarNovoUsuario';


novoUsuario('maria@teste.com', '123456');


// export -> externalizar um módulo para os demais arquivos ou modulos da aplicação
// import -> traz o modulo para o arquivo que vai utilizar daquele modulo externo



// string, boolean, number
// assim que a variavel for criada com a atribuição de um valor de um determinado tipo
// ela morrerá com esse tipo atribuido

// let idade = 10
// let nome = "João da Silva"
// let ativo = false

// // Array - define uma coleção de dados - lista
// let listaIdade: Array<number> = [10, 20, 30]
// let listaIdade2: number[] = [10, 20, 30]
