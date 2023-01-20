/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

// correção: no caso abaixo, estou retornando um novo array com 5 elementos 
// usando filter() e exibindo a quantidade de elemento do array. 
// O Roger resolveu usando reduce() no lugar. 

// const numbersLessThan501 = crazyNumbers.filter(crazyNumber => {
//     if (crazyNumber < 501) {
//         return crazyNumber
//     }
// })

// console.log(numbersLessThan501.length)

const numbersLessThan501 = crazyNumbers.reduce((accumulator, crazyNumber) => 
  crazyNumber < 501 ? accumulator + 1 : accumulator, 0)

console.log(numbersLessThan501)
