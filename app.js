// let titulo = document.querySelector('h1');// selecionou h1 do html com:  document.querySelector('h1')
// titulo.innerHTML = 'Jogo do Número Secreto'; // cria o texto dentro da tag h1 o qual foicriado variável titulo titulo.innerHTML = " texto desejado"
// let paragrafo = document.querySelector('p'); // selecionou p do html com:  document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; // cria o texto dentro da tag p o qual foicriado variável titulo titulo.innerHTML = " texto desejado"
//Criar a variavel  numero secreto aleatório, através da funcao gerarNumeroAleatorio com parseInt(Math.random()*10 + 1); e armazena na mesma variavel
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio() ;
let tentativas = 1;

// Criado uma função exibirTextoNaTela que invoca/seleciona (tag e texto) e inclui o texto desejado (dentro dos parenteses mostra parametros onde será executado = tag, texto)
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
//Executar a função exibirTextoNaTela usar o valor desejado na tag ( na tag h1 recebe 'texto: Jogo do Número Secreto)
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
};
// chamar função para dar inicio a partida
exibirMensagemInicial();
//Função sem parametros e responsável verificar determinada ação 
function verificarChute(){    
    let chute = document.querySelector('input').value; // query selector será usado para pegar o valor usado pelo usiuário qdo digitado nocampo input
    if(chute == numeroSecreto){
        // elimina o plural da ṕalavra tentativa
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        // cria mensagem quando acertar numero correto
        let mensagemTentativas = (`Você Descobriu o Número Secreto, com ${tentativas} ${palavraTentativa} `)
        exibirTextoNaTela('h1','Acertou');
        // aplica a mensagem correta com ou sem plural da palvra tentativa
        exibirTextoNaTela('p',mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');//desativa o atributo disabled referente ao id='reiniciar' habilita botao novo jogo.  

    }else {
         if(chute > numeroSecreto){
        exibirTextoNaTela('p','Número Secreto é menor');
        } else{
        exibirTextoNaTela('p','Número Secreto é maior');
    } 
      tentativas++;
      limparCampo();
    };
};
// criar função com retorno para variavel numero secreto
function gerarNumeroAleatorio(){
     //return parseInt(Math.random()*10 + 1); // retorna e armazena valor na let numeroSecreto
     //fara verificação se o numero sorteado já foi escolhido, se foi ,se gerado novo numero
     let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
     // conta a quantidade numeros da lista
     let quantidadeDeElemetosNalista = listaNumerosSorteados.length;
     // compara se a quantidade de numeros sorteados é igual ao espaço da lista limitado em pela variável numeroLimite
     if(quantidadeDeElemetosNalista == numeroLimite){
        listaNumerosSorteados = []
     }
     if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     }else{
        listaNumerosSorteados.push(numeroEscolhido); //adiciona elemtos a lista = listaNumerosSorteados recebera numeroEscolhido
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
     }
};
// limpa o value do chute no campo onde é inserido valor
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';    
};
// Função para reiniciar o jogo, com: novo numero secreto, sem preenchimento de campos, numero de tentativas = 1, com as mensagens iniciais de h1 e p
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true); // botão reiniciar inicia como desabilitado
};
