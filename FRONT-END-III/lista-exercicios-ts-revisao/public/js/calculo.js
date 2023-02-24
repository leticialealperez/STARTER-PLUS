"use strict";
/*

Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no botão calcular efetuar os cálculos solicitados na página.

Salvar os valores e cálculos no localStorage para quando a página for carregada possamos recuperar estes valores e preencher automaticamente os inputs.

Alterar o cálculo do botão calcular para que a cada vez que o usuário digitar um valor e sair do input o formulário seja automaticamente recalculado.


{
    receitas: {
        valorBase,
        valorTransporte,
        valorAlimetacao,
        totalReceitas,
    },
    despesas: {
        valorAutomovel,
        valorFaltas,
        totalDespesas
    },
    totalGeral
}

// POR QUE CRIAR UMA INTERFACE?
// 1 - quando for armazenar a gente garante que o nome das propriedades serão as estipuladas na interface
// 2 - quando a gente buscar os dados no localstorage, garantimos que estaremos acessando as propriedades estipuladas na interface e armazenadas no localStorage


*/
const botao = window.document.getElementById('btn_calcular');
botao.addEventListener('click', calcular);
// Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no botão calcular efetuar os cálculos solicitados na página.
// precisava trazer o valor digitado = utilizar o .value
function calcular() {
    // RECEITAS
    const valorBase = window.document.getElementById('valor_base').value;
    const transporte = window.document.getElementById('valor_transporte').value;
    const alimentacao = window.document.getElementById('valor_alimentacao').value;
    // preciso colocar um valor no .value do elemento
    const receitas = window.document.getElementById('valor_receita');
    const receitaTotal = Number(valorBase) + Number(transporte) + Number(alimentacao);
    receitas.value = `${receitaTotal}`;
    //DESCONTOS
    const automovel = document.getElementById("valor_automovel").value;
    const faltas = document.getElementById("faltas").value;
    const descontos = document.getElementById('valor_descontos');
    const descontosTotal = Number(automovel) + Number(faltas);
    descontos.value = `${descontosTotal}`;
    // VALOR TOTAL
    const valorTotal = document.getElementById("valor_total");
    valorTotal.value = `${receitaTotal - descontosTotal}`;
    const dados = {
        despesas: {
            valorAutomovel: Number(automovel),
            valorFaltas: Number(faltas),
            totalDespesas: descontosTotal,
        },
        receitas: {
            valorBase: Number(valorBase),
            valorTransporte: Number(transporte),
            valorAlimetacao: Number(alimentacao),
            totalReceitas: receitaTotal,
        },
        totalGeral: receitaTotal - descontosTotal
    };
    // guardar a info no localstorage
    localStorage.setItem('dados', JSON.stringify(dados));
}
document.addEventListener("DOMContentLoaded", () => {
    // buscar os dados
    let dados = localStorage.getItem('dados');
    if (dados) {
        // o dado esta no formado de objeto? converte!
        const dadosConvertidos = JSON.parse(dados);
        const valorBase = window.document.getElementById('valor_base');
        valorBase.value = `${dadosConvertidos.receitas.valorBase}`;
        const transporte = window.document.getElementById('valor_transporte');
        transporte.value = `${dadosConvertidos.receitas.valorTransporte}`;
        const alimentacao = window.document.getElementById('valor_alimentacao');
        alimentacao.value = `${dadosConvertidos.receitas.valorAlimetacao}`;
        const receitas = window.document.getElementById('valor_receita');
        receitas.value = `${dadosConvertidos.receitas.totalReceitas}`;
        const automovel = document.getElementById("valor_automovel");
        automovel.value = `${dadosConvertidos.despesas.valorAutomovel}`;
        const faltas = document.getElementById("faltas");
        faltas.value = `${dadosConvertidos.despesas.valorFaltas}`;
        const descontos = document.getElementById('valor_descontos');
        descontos.value = `${dadosConvertidos.despesas.totalDespesas}`;
        const valorTotal = document.getElementById("valor_total");
        valorTotal.value = `${dadosConvertidos.totalGeral}`;
    }
    // pode ser que exista a chave 'dados' no localStorage devido já termos clicado no botão "calcular" antes
    // caso contrario (temos infos no localStorage)
    // os inputs devem iniciar com as infos armazenadas lá
});
const input1 = document.getElementById('valor_base');
input1.addEventListener('focusout', calcular);
const input2 = document.getElementById('valor_transporte');
input2.addEventListener('focusout', calcular);
const input3 = document.getElementById('valor_alimentacao');
input3.addEventListener('focusout', calcular);
const input4 = document.getElementById("valor_automovel");
input4.addEventListener('focusout', calcular);
const input5 = document.getElementById("faltas");
input5.addEventListener('focusout', calcular);
