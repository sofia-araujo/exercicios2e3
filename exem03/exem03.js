// entradas
let inModelo = document.querySelector('#inModelo')
let inPreco = document.querySelector('#inPreco')

// ações
const btnAdicionar = document.querySelector('#btnAdicionar')
const btnListar = document.querySelector('#btnListar')
const btnFiltrar = document.querySelector('#btnFiltrar')

// saida
let outLista = document.querySelector('#outLista')

const carrosDispo = []

btnAdicionar.addEventListener('click', () => {
    let inModeloValue = inModelo.value
    let inPrecoValue = Number(inPreco.value)
    if(inPrecoValue === '' || inPrecoValue === 0 || isNaN(inPrecoValue)){
        alert('Digite um número válido')
        return
    }else if (inModeloValue === '' ){
        alert('Preencha todos os campos')
        return
    }
    carrosDispo.push({Modelo: inModeloValue, Preco: inPrecoValue})
})

btnListar.addEventListener('click', () => {
    outLista.innerHTML = ' '
    carrosDispo.map((element) => {
        outLista.innerHTML += `${element.Modelo} - R$${element.Preco} <br>`
    })
})

btnFiltrar.addEventListener('click', () => {
    let valorMax = prompt('Qual o valor máximo que o cliente deseja pagar?')
    const carrosMax = carrosDispo.filter((carrosDispo) => carrosDispo.Preco <= Number(valorMax))
    console.log(carrosMax)
    outLista.innerHTML = ' '
    carrosMax.map((element) => {
        outLista.innerHTML += `${element.Modelo} - R$${element.Preco} <br>`
    })
})