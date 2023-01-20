/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbersLessThan501 = crazyNumbers.filter(crazyNumber => {
    if (crazyNumber < 501) {
        return crazyNumber
    }
})

console.log(numbersLessThan501.length)