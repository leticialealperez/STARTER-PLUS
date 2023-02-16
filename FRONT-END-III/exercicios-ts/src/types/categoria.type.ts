// posso chamar de qualquer coisa quando foi exportado como DEFAULT
import Tag  from './tag.type'

// só posso importar o nome original do modulo
// import { Tag } from './tag.type';

interface Categoria {
    nome: string,
    tags: Array<Tag>,
}

export default Categoria;