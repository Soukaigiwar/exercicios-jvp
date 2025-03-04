/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
    { name: 'Bastardos inglórios', release: 2009 },
    { name: 'Pulp Fiction', release: 1994 },
    { name: 'Kill Bill: Volume 2', release: 2004 },
    { name: 'Quatro Quartos', release: 1995 },
    { name: 'Sin City', release: 2005 },
    { name: 'Era uma Vez em... Hollywood', release: 2019 },
    { name: 'Django Livre', release: 2012 },
    { name: 'Cães de Aluguel', release: 1992 },
    { name: 'À Prova de Morte', release: 2007 },
    { name: 'Kill Bill: Volume 1', release: 2003 }
]

// Na correção do Roger ele demonstra que não precisa do if() por que
// o objeto já é adicionado caso o retorno implícito da função retorne true.
// Além de usar o destructuring pegando somente o release para reduzir a escrita do código.
  
// const moviesReleasedBefore2000Year = tarantinoMovies.filter(movie => {
//     if (movie.release < 2000) {
//         return {
//             name: movie.name,
//             release: movie.release
//         }
//     }
// })

// console.log(moviesReleasedBefore2000Year)

const moviesReleasedBefore2000Year = tarantinoMovies.filter(({ release }) => release < 2000)

console.log(moviesReleasedBefore2000Year)
