// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
// seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
// calcular e escrever o custo final ao consumidor.

let custoDeFabrica = parseFloat(prompt("Digite o custo de fabrica do carro: "))
let distribuidor = 28 / 100
let impostos = 45 / 100

let valorConsumidor = custoDeFabrica + (distribuidor * custoDeFabrica) + (impostos * custoDeFabrica)

alert("O valor final do carro para o consumidor é de: " + valorConsumidor)