/*

Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem.

getElementsByClassName()

querySelectAll()

*/

// capturar os elementos da DOM
const cardsHTML = document.getElementsByClassName('card')


// FOR OF - é a unica forma de percorrer uma HTMLCollection (conjunto de elementos HTML)

for(const div of cardsHTML) {
    console.log(div)
    div.setAttribute('style', 'background-color: #e16e0e')
}



/*
Capture, armazene e manipule todos os elementos de classe
"titulo-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

Modifique o texto dos títulos nos cards para "Meu card".

*/


// capturar os elementos da DOM
const titulosCardHTML = document.querySelectorAll('.titulo-card');

for(const titulo of titulosCardHTML) {
    console.log(titulo)

    titulo.setAttribute('style', 'color: #2b385b; font-size: 30px')

    // innerHTML - dica na duvida usa esse cara
    titulo.innerHTML = 'Meu card'
}


/*

4. Capture, armazene e manipule todos os elementos de classe
"descricao-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem.

5. Modifique o texto das descrições nos cards para "Descrição
modificada pelo JavaScript".

*/
// capturar os elementos da DOM
const descricoesCardHTML = document.querySelectorAll('.descricao-card');

for(const descricao of descricoesCardHTML) {

    descricao.setAttribute('style', 'margin:30px 0; color: white; font-weight: 600;')

    descricao.innerHTML = 'Descrição modificada pelo JavaScript'
}



/*

6. Capture, armazene e manipule todos os elementos de classe
"botao-editar". Modifique o estilo desses elementos para que fique
semelhante a imagem.

8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
Essa função deve mostrar um alerta com a mensagem "Clicou em
Editar!".

*/

// capturar os elementos da DOM
const botoesCardEditarHTML = document.querySelectorAll('.botao-editar')

for(const botaoEditar of botoesCardEditarHTML) {
    
    botaoEditar.setAttribute('style', 'padding: 5px 12px; border-radius: 15px; color: white; background-color: green')

    botaoEditar.setAttribute('onclick', 'editarCard()')
}


/*

7. Capture, armazene e manipule todos os elementos de classe
"botao-apagar". Modifique o estilo desses elementos para que fique
semelhante a imagem.

9. Adicione o atributo 'onclick' nos elementos de classe
“botão-apagar”. Ao clicar nesses elementos deve chamar a função
'apagarCard()'. 
Essa função deve perguntar ao usuário se ele tem
certeza da exclusão do card. Se o usuário confirmar a exclusão deve
mostrar um alerta com a mensagem "Confirmado!", se não deve
mostrar a mensagem "Cancelou!".

*/
// capturar os elementos da DOM
const botoesCardApagarHTML = document.querySelectorAll('.botao-apagar')

for(const botaoApagar of botoesCardApagarHTML) {
    
    botaoApagar.setAttribute('style', 'padding: 5px 12px; border-radius: 15px; color: white; background-color: red')

    botaoApagar.setAttribute('onclick', 'apagarCard()')
}


// função que dispara ao clique do botão editar de cada card
function editarCard() {
    alert('Clicou em editar!')
}


// função que dispara ao clique do botão deletar de cada card
function apagarCard() {
    const confirma = confirm("Você está certo da exclusão?")

    if(confirma){
        alert("Confirmou!")
    }else {
        alert("Cancelou!")
    }
}