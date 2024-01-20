// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    console.log('Olá Mundo Dev, Functions JavaScript');
};
olaMundo()
// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function verificarNome(nome){  
    let nomeAdicinado = nome
    return nomeAdicinado    
}
let nome = verificarNome('Rafael')
console.log('Olá seu nome é: ' + nome)

function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  exibirOlaNome("Alice");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero){    
    let dobroV = numero * 2
    return dobroV  
}
let numero = dobro(2)
console.log(`Dobro = ${numero}`) 

function calcularDobro(numeroD) {
    return numeroD * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(valor1,valor2,valor3){
    let media = (valor1 + valor2 +valor3) /3
    return media
}
let valores = media(7,7,7)
console.log(`Média = ${valores}`)

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let mediaV = calcularMedia(4, 7, 10);
  console.log(mediaV);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorValor(numero1,numero2){
    if (numero1 > numero2){
        maior = numero1
    } else if
        (numero1 == numero2){
            maior = 'Mesmo valores'
    } else{
        maior = numero2
    }    
    return maior
}
let numeros = maiorValor(15,12);
console.log(`O maior valor é: ${numeros}`)

function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(1, 9);
  console.log(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacaoPorEleMesmo(numeroMultplica){
    let multiplicar = numeroMultplica * numeroMultplica
    return multiplicar
}
let numeroMultplica = multiplicacaoPorEleMesmo(5)
console.log(`Multiplicar por ele mesmo = ${numeroMultplica}`)

function quadrado(numeroQ) {
    return numeroQ * numeroQ;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, 
//em quilogramas, que serão recebidos como parâmetro.

function calcularImc(altura,peso){
    let imc = peso/(altura**2)        
    return mostradorImc = imc > 30 ? 'Sobrepeso' : 'Ideal',imc
    
};
let calculadoraImc = calcularImc(1.5,60);
let valorImc = calcularImc()
console.log('Imc = ' + parseInt(calculadoraImc) +' Peso: '+ mostradorImc)

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(fatorial) {
    let resultado = 1;
    while (fatorial > 1) {
        resultado *= fatorial;
        fatorial--;
    }
    return resultado;
};
let numeroFatorial = calcularFatorial(5);
console.log(numeroFatorial); // Isso imprimirá 120

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
//Para isso, considere a cotação do dólar igual a R$4,80.

function conversaoMoeda(reais){
    return reais / 4.8
}
let moedaDolar = conversaoMoeda(100)
console.log(`$$ ${moedaDolar}`)

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularPerimetro(base, altura){
    return 2*(base+altura)
};
let valoresPerimetro = calcularPerimetro(10,8)
console.log('Perimetro retangulo: ' + valoresPerimetro)

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. 
//Considere Pi = 3,14.
function calcularPerimetroCirculo(raio){
    let Pi = 3.14
    return 2*Pi*raio
};
let valorPerimetroCirculo = calcularPerimetroCirculo(5)
console.log('Perimetro Circulo: ' + valorPerimetroCirculo)

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuadaNumero(valor) {
    let i = 0;
    let resultado;
    while (i < 10) {
        i++;
        resultado = i * valor;
        console.log(`${i} * ${valor} = ${resultado}`);
    }
}
let valorTabuada = tabuadaNumero(9);


//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos:
//'JavaScript','C','C++', 'Kotlin' e 'Python'.
let listaLinguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
listaLinguagensDeProgramacao.push('Java', 'Ruby','GoLang');
console.log(listaLinguagensDeProgramacao)
//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaTresNomes = ['Rafa','Tais','Terezinha']
console.log(listaTresNomes)
console.log(listaTresNomes[0])
console.log(listaTresNomes[1])
console.log(listaTresNomes[2])
console.log('Contém ' + listaTresNomes.length + ' elementos')