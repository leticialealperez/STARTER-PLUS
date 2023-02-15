// escreva uma função que cadastre um novo usuário - receber email, senha
// não pode cadastrar dois usuarios com o mesmo email
// 3 responsabilidade - função de cadastro de um novo usuário

import { usuarios } from './database';

// C -> create de usuarios
function novoUsuario(email: string, senha: string) {
  const retorno = usuarios.some((usuario) => usuario.email === email);

  if (retorno) {
    console.log('E-mail já cadastrado. Tente outro!');
  } else {
    const novoUsuario = { email: email, password: senha, recados: [] };
    usuarios.push(novoUsuario);

    // usuarios.push({ email: email, password: senha, recados: [] }); -> isso aqui é a mesma coisa que o de cima
  }

  console.log(usuarios);
}

// padrão/ default - poder renomear o módulo quando importado em outro arquivo
// OBS: só podemos exportar 1 modulo default por arquivo
// export default novoUsuario;

// não padrão - quem importar vai precisar utilizar o nome original
// OBS: podemos exportar mais de uma função ou módulo por vez
export { novoUsuario };
