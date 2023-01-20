/* Desenvolva aqui a rotina */
document.addEventListener('DOMContentLoaded', () => {
    const totalFinal = localStorage.getItem('totalFinal')

    if(totalFinal) {
        const valorTotalHTML = document.getElementById('valor_total')
        valorTotalHTML.value = totalFinal
    }

    const receitasJSON = localStorage.getItem('receitas')

    if(receitasJSON) {
        const receitas = JSON.parse(receitasJSON)

        const valorBase = document.getElementById('valor_base')
        valorBase.value = receitas.valorBase

        const valorTransporte = document.getElementById('valor_transporte')
        valorTransporte.value = receitas.valorTransporte

        const ajudaAlimentacao = document.getElementById('valor_alimentacao')
        ajudaAlimentacao.value = receitas.ajudaAlimentacao

        const valorTotalReceitas = document.getElementById('valor_receita')
        valorTotalReceitas.value = receitas.totalReceitas
    }

    const despesasJSON = localStorage.getItem('despesas')

    if(despesasJSON) {
        const despesas = JSON.parse(despesasJSON)

        const valorAutomovel = document.getElementById('valor_automovel')
        valorAutomovel.value = despesas.valorAutomovel

        const descontoFaltas = document.getElementById('faltas')
        descontoFaltas.value = despesas.descontoFaltas

        const valorTotalDescontos = document.getElementById('valor_descontos')
        valorTotalDescontos.value = despesas.totalDescontos

    }

})

function calcularTotalReceitas() {
    const valorBase = document.getElementById('valor_base').value
    const valorTransporte = document.getElementById('valor_transporte').value
    const ajudaAlimentacao = document.getElementById('valor_alimentacao').value

    // todo valor digitado em inputs na página vem em formato string
    const totalReceitas = Number(valorBase) + Number(valorTransporte) + Number(ajudaAlimentacao)

    const valorTotalReceitas = document.getElementById('valor_receita')
    valorTotalReceitas.value = totalReceitas

    const receitas = {
        valorBase: Number(valorBase),
        valorTransporte: Number(valorTransporte),
        ajudaAlimentacao: Number(ajudaAlimentacao),
        totalReceitas: totalReceitas
    }

    localStorage.setItem('receitas', JSON.stringify(receitas))

    return totalReceitas
}

function calcularTotalDespesas() {
    const valorAutomovel = document.getElementById('valor_automovel').value
    const descontoFaltas = document.getElementById('faltas').value

    const totalDescontos = Number(valorAutomovel) + Number(descontoFaltas)

    const valorTotalDescontos = document.getElementById('valor_descontos')
    valorTotalDescontos.value = totalDescontos

    const descontos = {
        valorAutomovel: Number(valorAutomovel),
        descontoFaltas: Number(descontoFaltas),
        totalDescontos: totalDescontos
    }

    localStorage.setItem('despesas', JSON.stringify(descontos))

    return totalDescontos
}

function calcularTotalFinal() {
    const receitas = calcularTotalReceitas();
    const despesas = calcularTotalDespesas();

    const totalFinal = receitas - despesas;
    const valorTotalHTML = document.getElementById('valor_total')
    valorTotalHTML.value = totalFinal

    localStorage.setItem('totalFinal', totalFinal)

}

const botaoCalcular = document.getElementById('btn_calcular')
botaoCalcular.addEventListener('click', calcularTotalFinal)


// CAPTURA OS ELEMENTOS PARA OBSERVAR QUANDO OS INPUTS SÃO DESFOCADOS
const valorBase = document.getElementById('valor_base')
const valorTransporte = document.getElementById('valor_transporte')
const ajudaAlimentacao = document.getElementById('valor_alimentacao')
const valorAutomovel = document.getElementById('valor_automovel')
const descontoFaltas = document.getElementById('faltas')

valorBase.addEventListener('focusout', calcularTotalFinal)
valorTransporte.addEventListener('focusout', calcularTotalFinal)
ajudaAlimentacao.addEventListener('focusout', calcularTotalFinal)
valorAutomovel.addEventListener('focusout', calcularTotalFinal)
descontoFaltas.addEventListener('focusout', calcularTotalFinal)