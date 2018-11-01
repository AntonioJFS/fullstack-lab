console.log('Olá Fullstack Lab')

const soma = (num1, num2) => num1 + num2
const mult = (num1, num2) => num1 * num2
const operacao = (operacao, num1, num2) => operacao(num1, num2)

const obj = {
    key: 'valor'
}
const arr = [1, 2, 3]

console.log('Soma: ', operacao(soma, 10, 20))
console.log('Mult: ', operacao(mult, 10, 20))