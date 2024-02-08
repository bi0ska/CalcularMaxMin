let input = document.getElementById("input")

let lista = parseInt(input.value.split(','))

lista.addEventListener('click',calcular)

function calcular(){
    
    console.log(lista)
    let suma = 0
    for(n of lista){
    suma++
    }
parrafosuma.innerHTML = `La suma de los numeros es: ${suma}`

}