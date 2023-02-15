"use strict";
// escreva uma função que cadastre um novo usuário - receber email, senha
// não pode cadastrar dois usuarios com o mesmo email
// 3 responsabilidade - função de cadastro de um novo usuário
Object.defineProperty(exports, "__esModule", { value: true });
exports.novoUsuario = void 0;
const database_1 = require("./database");
// C -> create de usuarios
function novoUsuario(email, senha) {
    const retorno = database_1.usuarios.some((usuario) => usuario.email === email);
    if (retorno) {
        console.log('E-mail já cadastrado. Tente outro!');
    }
    else {
        const novoUsuario = { email: email, password: senha, recados: [] };
        database_1.usuarios.push(novoUsuario);
        // usuarios.push({ email: email, password: senha, recados: [] }); -> isso aqui é a mesma coisa que o de cima
    }
    console.log(database_1.usuarios);
}
exports.novoUsuario = novoUsuario;
