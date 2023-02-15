import { User } from './types';


// 2 responsabilidade - armazenar/declaração a lista de usuários
const usuario: User = {
  email: 'joao@teste.com',
  password: '1234',
  recados: [],
};

const usuarios: Array<User> = [usuario];

export { usuarios };
