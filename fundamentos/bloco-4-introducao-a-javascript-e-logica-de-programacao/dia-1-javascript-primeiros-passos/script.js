/*
1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Multiplicação (a / b)
Módulo (a % b)
*/

const a = 2; 
const b = 10; 
let resultado;
resultado = a + b;
resultado = a - b;
resultado = a * b;
resultado = a / b;
resultado = a % b;

console.log(`A Soma entre A e B: ${a + b}\nA Subtração entre A e B: ${a - b}\nA Multiplicação entre A e B: ${a * b}\nA Divisão entre A e B: ${a / b}\nA Módulo entre A e B: ${a % b}`);

/*
2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

const number1 = 40;
const number2 = 20;

let maior; 

if(number1 > number2){
  maior = number1; 
} else{
  maior = number2; 
}

console.log("\nO maior número é: " + maior)


/*
3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

const n1 = 100;
const n2 = 40;
const n3 = 30;

let maiorDeTres; 

if(n1 > n2){
  maiorDeTres = n1;
}else if(n2 > n3){
  maiorDeTres = n2
}else{
  maiorDeTres = n3;
}

console.log("\nO maior número é: " + maiorDeTres)

/*
4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

const teste = true; 
let resultadoTeste; 

if(teste){
  resultadoTeste = "positive"
}else {
  resultadoTeste = "negative"
}


console.log("\nResultado do teste é: " + resultadoTeste)

/*
5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

const anguloReto = 90;
const alpha = 45;
const beta = 45;

if(anguloReto == 90 && alpha + beta == 90){
  console.log("É um triangulo.")
} else{
  console.log("Não é um triangulo")
}

/*
6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  peças: Peão, Torre, Cavalo, Bispo, Rainha e Rei.
*/

let chessPiece= "rei"; 


switch(chessPiece.toLowerCase()){
  case "peão":
    console.log('os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas'); 
    break
  case "torre":
    console.log('\nA torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.');
    console.log('\nA torre não pode pular outras peças.')
    break
  case "cavalo":
    console.log('O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.'); 
    break
  case "bispo":
    console.log('\nO bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.');

    console.log('\nO bispo não pode pular outras peças.')
    break
  case "rainha":
    console.log('A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.'); 
    break
  case "rei":
    console.log('mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor.'); 
    break
  default:
    console.log('Erro, peça inválida!');
    break;
}

/*7 -  Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

  Porcentagem >= 90 -> A
  Porcentagem >= 80 -> B
  Porcentagem >= 70 -> C
  Porcentagem >= 60 -> D
  Porcentagem >= 50 -> E
  Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

*/

let note = 101

if(note < 0 || note> 100){
  console.log("nota invalida")
} else if(note >= 90){
  console.log("A")
} else if(note >= 80){
  console.log("B")
} else if(note >= 70){
  console.log("C")
}else if(note >= 60){
  console.log("D")
}else if(note >= 50){
  console.log("E")
} else if(note < 50){
  console.log("F")
}

/*8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
*/

const num1 = 7; 
const num2 = 3;
const num3 = 5;

const arrayNum = [num1, num2, num3]
let resultadoNum = false;

for (let index = 0; index < arrayNum.length; index += 1) {
  console.log(arrayNum[index]);
  if(arrayNum[index] % 2 === 0){
    resultadoNum = true;
  } 
}

console.log(resultadoNum)


/*
9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

for (let index = 0; index < arrayNum.length; index += 1) {
  console.log(arrayNum[index]);
  if(arrayNum[index] % 2 === 1){
    resultadoNum = true;
  } 
}

console.log(resultadoNum)

/*
10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
  
  Atente que, sobre o custo do produto, incide um imposto de 20%.
  
  Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

  O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

    valorCustoTotal = valorCusto + impostoSobreOCusto
    lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

let valorCusto = 100; // custo do produto 
let valorVenda = valorCusto + (valorCusto * 0.50); // venda do produto
let impostoProduto = valorCusto * 0.20;  // imposto sobre custo do produto

console.log(valorVenda)

if(valorCusto < 0 || valorVenda < 0) {
    console.log("valores invalidos, insira um valor maior que 0")
}else {
    let valorCustoTotal =  valorCusto + impostoProduto; /*total de compra*/
    let lucro = valorVenda - valorCustoTotal; /*valor do lucro*/
    console.log(lucro * 1000)
}

/*
11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
*/

const salarioBruto = 3000;
let aliquotaINSS; 
let aliquotaIR;
let salarioBase;

if (salarioBruto <= 1556.94) {
   //alíquota de 8%
   aliquotaINSS = salarioBruto * 0.08;
   console.log("isento de imposto de renda")
}else if (salarioBruto < 2594.92) {
    //alíquota de 9%
    aliquotaINSS = salarioBruto * 0.09;
}else if (salarioBruto < 5189.82) {
    //alíquota de 11%
    aliquotaINSS = salarioBruto * 0.11;
}else {
    aliquotaINSS = salarioBruto - 570.88;
}

salarioBase = salarioBruto - aliquotaINSS;

console.log("Desconto INSS: R$" + aliquotaINSS + " \nSalario : R$" +  salarioBase)

if(salarioBase <=  1903.98){
    aliquotaIR = "isento de imposto de renda"
}
else if(salarioBase <= 2826.65){
    //alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    aliquotaIR = (salarioBase * 0.075) - 142.80
}else if(salarioBase <= 3751.05) {
    // alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    aliquotaIR = (salarioBase * 0.15) - 354.80
}else if(salarioBase <= 4664.68) {
    //alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    aliquotaIR = (salarioBase * 0.225) - 636.13
}else {
    //alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    aliquotaIR = (salarioBase * 0.275) - 869.36
}

console.log(salarioBase - aliquotaIR)