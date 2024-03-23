// entrada de dados
let inNumero = document.querySelector('#inNumero')
let arrayNum = []
//ações
const btnApostar = document.querySelector('#btnApostar')
const btnJogar = document.querySelector('#btnJogar')

//saída de dados
const outErros = document.querySelector('#outErros')
let outErrosNum = 0
const outChances = document.querySelector('#outChances')
let outChancesNum = 6
let outDica = document.querySelector('#outDica')
let numsAnterior = document.querySelector('#numsAnterior')
let numeroCerto = parseInt(Math.random() * 101)

btnApostar.addEventListener('click', () => {
    let inNumero = document.querySelector('#inNumero')
    let inNumeroNum = Number(inNumero.value)
    if(inNumeroNum === numeroCerto){
        alert('Parabéns você ganhou o jogo!')
        btnApostar.disabled = true
    }else if(inNumeroNum > numeroCerto){
        outDica.innerHTML = `Tente um número menor que ${inNumero.value}`
        outErrosNum++
        outErros.innerHTML = outErrosNum
        outChancesNum--
        outChances.innerHTML = outChancesNum
        if(outErrosNum >= 6 || outChancesNum <= 0){
            alert('Você perdeu!')
            btnApostar.disabled = true
            return
        }else if(arrayNum.includes(inNumeroNum)){
            alert('Número repetido jogue novamente')
            inNumero.value = ''
            return
        }
        arrayNum.push(inNumeroNum)
        arrayNum.join(', ')
        numsAnterior.innerHTML = ''
        numsAnterior.innerHTML += ` ${arrayNum} `
    }else if(inNumeroNum < numeroCerto){
        outDica.innerHTML = `Tente um número maior que ${inNumero.value}`
        outErrosNum++
        outErros.innerHTML = outErrosNum
        outChancesNum--
        outChances.innerHTML = outChancesNum
        if(outErrosNum >= 6 || outChancesNum <= 0){
            alert('Você perdeu!')
            btnApostar.disabled = true
            return
        } else if(arrayNum.includes(inNumeroNum)){
            alert('Número repetido jogue novamente')
            inNumero.value = ''
            return
        }
        arrayNum.push(inNumeroNum)
        arrayNum.join(',')
        numsAnterior.innerHTML = ''
        numsAnterior.innerHTML += ` ${arrayNum} `
    }
    inNumero.value = ''
})

btnJogar.addEventListener('click', () => {
    reiniciarJogo()
})

const reiniciarJogo = () => {
    location.reload()
}