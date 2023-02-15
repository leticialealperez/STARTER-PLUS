// interfaces - PascalCase
// 1 responsabilidade - declaração dos tipos da aplicação
interface User {
  email: string;
  password: string;
  recados: Array<Recado>;
}

interface Recado {
  id: number;
  tarefa: string;
  detalhamento: string;
}

export { User, Recado }
